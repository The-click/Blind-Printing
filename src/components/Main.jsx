
import { useEffect} from 'react';
import '../App.css';
import InfoBlock from './InfoBlocks/InfoBlock';
import { observer } from "mobx-react-lite" 
import store from '../store/store';
import InputTextForm from './InputTextForm';
import { getTextService } from '../API/GetTextService';
import { wrapSpanText } from '../utils/wrapSpanText';
import ControlButtons from './ControlButtons';
import StopScreen from './StopScreen';
import Loader from '../utils/Loader';
import infoStore from '../store/infoStore';
import FinalScreen from './FinalScreen';
import { useNavigate} from 'react-router-dom';


 const Main = observer(() =>  {
  let printText = store.printText;
  let navigate = useNavigate();



  useEffect( () => {
    if (store.lang === '') {
      navigate('/start');
      return;
    }
    async function setNewText(){
      let data = await getTextService(store.lang);
      store.setNewText(data);
      store.setPrintText(wrapSpanText());
    }
   
  setNewText();
  }, []);

  function stopHandler(e){
    if (e.code !== 'Escape' || store.countPrintedLetter === 0) return;
    infoStore.stopPrint();
  }


  if (store.printText.length === 0){
    return (<Loader></Loader>)
  }

  if (store.isEnd){
    return (<FinalScreen></FinalScreen>)
  }

  return (
    <div className="main-wrap" onKeyDown={stopHandler}>
      {infoStore.stopPrintedData.isStop && <StopScreen></StopScreen>}

      <div className='main'>
      {store.countPrintedLetter === 0 && <span className='tooltip'>Для паузы можно нажать "Esc"</span>}
   
      <div className='container__text' style={{}}>
        {printText}
      </div>
      <InputTextForm></InputTextForm>

      </div>
       <div className='right__block'>
        <InfoBlock   />
       <ControlButtons />

       </div>
      
       {/* <HelloScreen></HelloScreen> */}
    </div>
  );
})

export default Main;

