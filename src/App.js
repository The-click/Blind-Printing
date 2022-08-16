import HelloScreen from './components/HelloScreen';
import Main from './components/Main';
import FinalScreen from './components/FinalScreen';
import React from 'react';

import { Routes, Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom/umd/react-router-dom.development';
// import { Routes } from 'react-router-dom/umd/react-router-dom.development';




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

