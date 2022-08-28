
import { useEffect} from 'react';
import '../App.css';
import InfoBlock from '../components/InfoBlocks/InfoBlock';
import { observer } from "mobx-react-lite" 
import store from '../store/store';
import { getTextService } from '../API/GetTextService';
import ControlButtons from '../components/ControlButtons';
import Loader from '../utils/Loader';
import { useNavigate, useLocation} from 'react-router-dom';
import TypedText from '../components/TypedText';


 const Main = observer(() =>  {
  const location = useLocation();
  const navigate = useNavigate();
  const isEnd = store.isEnd;

  useEffect( () => {
    if (!location.state || isEnd) {
      navigate('/start');
      return;
    }
    async function setNewText(){
      let data = await getTextService(location.state.lang);
      store.setNewText(data.split(''));
    }
   
  setNewText();
  }, []);

  if (store.fullText.length === 0){
    return (<Loader></Loader>);
  }

  return (
    <div className="main-wrap" >
      <TypedText />     
       <div className='right__block'>
        <InfoBlock   />
       <ControlButtons />
       </div>
    </div>
  );
})

export default Main;

