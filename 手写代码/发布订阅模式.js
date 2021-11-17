class EventEmitter{
    constructor(){
        this.events={};
    }
    on(type,callBack){
        if(!this.events[type]){
            this.events[type]=[callBack];
        }else{
            this.events[type].push(callBack);
        }
    }
    off(type,callBack){
        console.log(this.events[type]);
        if(!this.events[type]) return;
        this.events[type]=this.events[type].filter((item)=>{
            return item!=callBack;
        })
    }
    once(type,callBack){
        function fn(){
            callBack();
            this.off(type,fn);
        }
        this.on(type,fn);
    }
    emit(type,...rest){
        console.log(this.events[type]);
        this.events[type] && 
            this.events[type].forEach((fn)=>fn.apply(this,rest));
    }
}

const event=new EventEmitter();
const handler=(...rest)=>{
    console.log(rest);
}

event.on('click',handler);
event.emit('click',1,2,3,4);
event.off('click',handler);
event.emit('click',1,2);
event.once('dbclick',()=>{
    console.log(123456);
})
event.emit('dbclick');
event.emit('dbclick');
