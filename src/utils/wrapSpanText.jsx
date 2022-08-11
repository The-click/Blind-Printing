import store from "../store/store";

export const wrapSpanText = (lenText = store.printText.length) => {
    let text = store.fullText;
        return text.split('').map((el, i) => {
          let classElement = '';
          if ((i === lenText)){
            classElement = 'letter__green';
          }
          return (<span className={classElement} key={el + i }>{el}</span>)})
    
}