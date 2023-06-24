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
    });
  }
}

module.exports = Socket;
