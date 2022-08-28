
export const wrapSpanText = (fullText, elemIndex, isError) => {
        return fullText.map((el, i) => {
          let classElement = '';
          if (i === elemIndex){
            classElement = isError ? 'error' : 'letter__green';
          }
          if (i < elemIndex){
            classElement = 'letter__printed';
          }
          return (<span className={classElement} key={el + i }>{el}</span>)})  
}

