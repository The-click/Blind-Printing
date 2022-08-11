

export const getTextService = async () => {
    try {
        let response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
        let text = await response.json();
        return await text[0].replace(/\s+/g, ' ');     
      } catch(err) {
        console.log(err);
        setTimeout(() => {
          alert('Упс:) Что-то пошло не так. Перезагрузим страницу или попробуйте позже');
          window.location.reload();

        }, 2000);
       
      }
}