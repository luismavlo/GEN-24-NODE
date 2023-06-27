import { useEffect, useState } from "react";

export const StudentList = ({
  data,
  vote,
  deleteStudent,
  changeStudentName,
}) => {
  const [students, setStudents] = useState(data);

  useEffect(() => {
    setStudents(data);
  }, [data]);

  const chageName = (event, id) => {
    const newName = event.target.value;
    setStudents((students) =>
      students.map((student) => {
        if (student.id === id) {
          student.name = newName;
        }

        return student;
      })
    );
  };

  const onLostFocus = (id, name) => {
    changeStudentName(id, name);
  };

  const createRows = () => {
    return students.map((student) => (
      <tr key={student.id}>
        <td>
          <button
            className="btn btn-outline-success"
            onClick={() => vote(student.id)}
          >
            +1
          </button>
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            value={student.name}
            onChange={(event) => chageName(event, student.id)}
            onBlur={() => onLostFocus(student.id, student.name)}
          />
        </td>
        <td>{student.votes}</td>
        <td>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => deleteStudent(student.id)}
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h3>Estudiantes Actuales</h3>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};
