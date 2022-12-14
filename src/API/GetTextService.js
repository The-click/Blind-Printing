

export const getTextService = async (lang) => {
  let response;
  let text;
    try {
      if (lang === 'en'){
        response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
        text = await response.json();
        return text[0].replace(/\s+/g, ' ');  
      }else{
        response = await fetch('https://fish-text.ru/get');
        text = await response.json();
        return text.text.replace('—', '');
      } 
    } catch(err) {
        console.log(err);
        alert('Что-то пошло не так. Перезагрузите страницу или попробуйте позже')
      }
}