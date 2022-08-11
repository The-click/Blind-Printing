import {  makeAutoObservable } from "mobx"

class Store{

    fullText = '';
    printText = [];
    countPrintedLetter = 0;
    isEnd = false;

    constructor(){
        makeAutoObservable(this);
    }

    setNewText(text){
        this.fullText = text; 

    }

    setPrintText(text){
        this.printText = text; 
    }

    changePrintText(len){
        this.countPrintedLetter += 1;
        this.printText[len - 1] = (<span className='letter__printed' key={(len - 1) + this.fullText[len - 1]}>
                                      {this.fullText[len - 1]}
                                   </span>);
        
        if (len < this.fullText.length ){
            this.printText[len] = (<span className='letter__green' key={(len) + this.fullText[len]}>
                                        {this.fullText[len]}
                                   </span>);
        } else{
            this.isEnd = true;
        }
                            
    }

    setErrorText(indexLetter){
        this.printText[indexLetter] = (<span className='error' key={(indexLetter) + this.fullText[indexLetter]}>
                                            {this.fullText[indexLetter]}
                                      </span>);
    }



}

export default new Store()


