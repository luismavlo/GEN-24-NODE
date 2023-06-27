import { useEffect, useState } from "react";
import { StudentAdd } from "./components/StudentAdd";
import { StudentList } from "./components/StudentList";
import { io } from "socket.io-client";

const connectSocketServer = () => {
  const socket = io.connect("http://localhost:4100", {
    transports: ["websocket"],
  });

  return socket;
};

export const SocketApp = () => {
  const [socket] = useState(connectSocketServer());
  const [online, setOnline] = useState(false); //offline por default
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("current-students", (students) => {
      setStudents(students);
    });
  }, [socket]);

  const vote = (id) => {
    socket.emit("vote-student", id);
  };

  const deleteStudent = (id) => {
    socket.emit("delete-student", id);
  };

  const changeStudentName = (id, name) => {
    socket.emit("change-student-name", { id, name });
  };

  const createStudent = (name) => {
    socket.emit("new-student", { name });
  };

  return (
    <section className="container">
      <header className="alert">
        <h4>Services Status</h4>
        {online ? (
          <span className="text-success">Online</span>
        ) : (
          <span className="text-danger">Offline</span>
        )}

        <h1>Students Node Gen24</h1>
        <hr />
      </header>

      <article className="row">
        <div className="col-8">
          <StudentList
            data={students}
            vote={vote}
            deleteStudent={deleteStudent}
            changeStudentName={changeStudentName}
          />
        </div>
        <div className="col-4">
          <StudentAdd createStudent={createStudent} />
        </div>
      </article>
    </section>
  );
};
