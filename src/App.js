import React from 'react';
import { Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom/umd/react-router-dom.development';
import HelloScreen from './pages/HelloScreen';
import Main from './pages/Main';
import FinalScreen from './pages/FinalScreen';




 const App = () =>  {

  return (
    <div className="App">
      <Routes>
      <Route path="/*" element={<Navigate to="/start" />} />
      <Route path="/start" index element={ <HelloScreen></HelloScreen>}>
      </Route>
      <Route path="/main" element={ <Main></Main>}>
      </Route>
      <Route path="/final" element={ <FinalScreen></FinalScreen>}>
      </Route>
    </Routes>

     
    </div>
  );
}

export default App;

