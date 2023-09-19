import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('startstuding', () => {
  console.log('Please start to learn coding');
  setTimeout(() => {
    console.log('please start learning by opening laptop')
  }, 3000);
});
myEmitter.emit('startstuding');