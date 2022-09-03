import {  makeAutoObservable } from "mobx"

class Store{

    fullText = [];
    countPrintedLetter = 0;
    isEnd = false;
    errorData = {isError: false, countError:0};
   

    constructor(){
        makeAutoObservable(this);
    }

    setInitialState(){
        this.fullText = [];
        this.countPrintedLetter = 0;
        this.isEnd = false;
        this.errorData = {isError: false, countError:0};
    }

    setNewText(text){
        this.fullText = text; 
    }

    changePrintText(){
        if (this.errorData.isError){ 
            this.errorData ={...this.errorData, isError:false};
        };
        this.countPrintedLetter += 1;
        if (this.countPrintedLetter === this.fullText.length) {
            this.isEnd = true;
        };                        
    }

    setErrorText(){
        this.errorData = {isError:true, countError:++this.errorData.countError};
    }
}

export default new Store()
