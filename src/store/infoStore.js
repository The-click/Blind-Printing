import {  makeAutoObservable } from "mobx"

class InfoStore{

    stopPrintedData = {isStop:false, timeStop: 0};
    speedPrint = 0;
    accuracy = 0;

    constructor(){
        makeAutoObservable(this);
    }
    
    setInitialState(){
        this.stopPrintedData = {isStop:false, timeStop: 0};
        this.speedPrint = 0;
        this.accuracy = 0;
    }

    setSpeedPrint(speed){
        this.speedPrint = speed;
    }
    setAccuracy(accuracy){
        this.accuracy = accuracy;
    }
 
    stopPrint(){
        this.stopPrintedData.isStop = !this.stopPrintedData.isStop;
        this.stopPrintedData.timeStop = +new Date() - this.stopPrintedData.timeStop;
    }
}

export default new InfoStore()


