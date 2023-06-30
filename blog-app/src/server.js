require('dotenv').config();

const { db } = require('./database/config');
const { Server } = require('socket.io');

const app = require('./app');
const initModel = require('./models/initModels');
const Sockets = require('./sockets');

db.authenticate()
  .then(() => console.log('Database authenticated ✌'))
  .catch((err) => console.log(err));

initModel();

db.sync()
  .then(() => console.log('Database Synced ✌'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🙌`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

new Sockets(io);
