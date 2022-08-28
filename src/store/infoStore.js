import {  makeAutoObservable } from "mobx"

class InfoStore{

    stopPrintedData = {isStop:false, timeStop: 0, startTime:0};
    speedPrint = 0;
    accuracy = 0;

    constructor(){
        makeAutoObservable(this);
    }
    
    setInitialState(){
        this.stopPrintedData = {isStop:false, timeStop: 0, startTime:0};
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
        let thisData = this.stopPrintedData;
        if (this.stopPrintedData.isStop){
            this.stopPrintedData = {isStop:false, 
                                    timeStop: (+new Date() - thisData.startTime) + thisData.timeStop,
                                    startTime: 0}
        }else{
            this.stopPrintedData.isStop = true;
            this.stopPrintedData.startTime = +new Date();
        }
    }
}

export default new InfoStore()


