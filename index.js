const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener:', data));

logger.log('Hello World');


// const Person = require('./person');
//
// const person1 = new Person('john doe', 30);
//
// person1.greetings();

