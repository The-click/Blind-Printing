import {  makeAutoObservable } from "mobx"

class Store{
    fullText ='';
    countError = 0;
    printText = [];
    countPrintedLetter = 0;

    constructor(){
        makeAutoObservable(this)
    }
    setNewText(text){
        this.fullText = text
    }
    addCountError(){
        this.countError += 1;
    }
    setPrintText(text){
        this.printText = text; 
    }
    changePrintText(len){
        this.countPrintedLetter += 1;
        this.printText[len - 1] = (<span className='letter__printed' key={(len - 1) + this.fullText[len - 1]}>
                                      {this.fullText[len - 1]}
                                   </span>);
        this.printText[len] = (<span className='letter__green' key={(len) + this.fullText[len]}>
                                        {this.fullText[len]}
                                   </span>);                     
    }
    setErrorText(indexLetter){
        this.printText[indexLetter] = (<span className='error' key={(indexLetter) + this.fullText[indexLetter]}>
                                            {this.fullText[indexLetter]}
                                      </span>);
    }

}

export default new Store()


