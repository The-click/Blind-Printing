import {  makeAutoObservable } from "mobx"

class InfoStore{

    countError = 0;
    stopPrintedData = {isStop:false, timeStop: 0, startTime:0};
    speedPrint = 0;
    accuracy = 0;
    

    constructor(){
        makeAutoObservable(this);
    }
    setInitialState(){
        this.countError = 0;
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
    addCountError(){
        this.countError += 1;
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


