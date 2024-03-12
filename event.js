//one file event driven start
// const EventEmitter= require('events');//give class blueprints
// const emitter=new EventEmitter();//geting object from class blueprints
// //register event listeners for bellring events
// emitter.on('bellring',()=>{
//     console.log('world ringing');
// })
// //raise event
// emitter.emit('bellring');
// one file event driven end

// this event from eventRise file
// event register for other file. By importing class
const pepole = require('./eventRise');//require class importing
const workersTime=new pepole();
workersTime.on('work',({workingHours,text})=>{
    console.log(`It almost ${workingHours}.so ${text}`);
});
workersTime.startWorking();