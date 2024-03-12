const EventEmitter=require('events');
//pepole class all properties of EventEmitter
class pepole extends EventEmitter{
    startWorking=()=>{
        console.log('Start working');
        
    setTimeout(() => {
        this.emit('work',
        {
            workingHoure:'8',
            text:"finish your work"
        }
        )
    }, 2000);
    }
}
module.exports = pepole;