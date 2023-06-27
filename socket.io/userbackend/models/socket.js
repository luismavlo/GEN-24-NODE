const StudentList = require('./student-list');

class Socket {
  constructor(io) {
    this.io = io;
    this.studentList = new StudentList();

    this.socketEvents();
  }

  socketEvents() {
    //ESCUCHAR A TODOS LOS CLIENTES QUE SE CONECTAN
    this.io.on('connection', (socket) => {
      console.log('Cliente conectado');

      socket.emit('current-students', this.studentList.getStudents());

      socket.on('vote-student', (id) => {
        this.studentList.increaseVotes(id);
        this.io.emit('current-students', this.studentList.getStudents());
      });
    });
  }
}

module.exports = Socket;
