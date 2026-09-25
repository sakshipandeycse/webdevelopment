const EventEmitter = require('events');
// EventEmitter is a predefined class provided by Node.js
const ud = new EventEmitter();

ud.on('greet', (name) => {
  console.log(`Hello there 28 ${name}`);
});

ud.on('exit', (num) => {
  console.log(`thank you for visiting ${num}`);
});

ud.emit('greet', 'Sakshi');
ud.emit('exit', 165);