

export const getTextService = async (lang) => {
  let response;
  let text;
    try {
      if (lang === 'en'){
        response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
        text = await response.json();
        return await text[0].replace(/\s+/g, ' ');  
      }else{
        response = await fetch('https://fish-text.ru/get');
        text = await response.json();
        return text.text.replace('—', '');
      } 
    } catch(err) {
        console.log(err);
        setTimeout(() => {
          alert('Что-то пошло не так. Перезагрузим страницу или попробуйте позже');
          window.location.reload();

        }, 2000);
       
      }
}