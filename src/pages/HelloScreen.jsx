import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import infoStore from '../store/infoStore';
import store from '../store/store';


const HelloScreen = observer((props) => {
    const [isEng, setIsEng] = useState(true);
    let navigate = useNavigate();
    function handlerClick(e){
        e.preventDefault();
        let lang = isEng ? 'en' : 'ru';
        store.setInitialState();
        infoStore.setInitialState();
        store.changeLangText(lang);

        navigate('/main');
    }
    return (
        <div className="title-wrap">
        <div className='title-block'>
            <h1 className='title'>Вас привествует сервис для теста скорости печати</h1>
            <div className='title-subtext'> Выберите язык набора тектста:</div>
            <form onSubmit={handlerClick} className='title-form'>
                <div className="title-lang-wrap">
                <label className={isEng ? 'title-input active' : 'title-input'} >
                    Английский
                    <input className='title'  type="radio" name="lang" checked={isEng} onChange={() => setIsEng(true)} />
                </label>
                <label className={!isEng ? 'title-input active' : 'title-input'} >
                    Русский
                    <input className='title'  type="radio" name="lang" checked={!isEng} onChange={() =>  setIsEng(false)}/>
                </label>
                </div>
                <button className='title-button' type="submit">Начать</button>
            </form>
            
        </div>
        </div>
    );
})

export default HelloScreen;