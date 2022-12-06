import React from 'react';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';

import Main from './Main';
import IndoorPage from './pages/catologPages/indoorPage/IndoorPage';
import MainCatalog from './pages/catologPages/mainCatalog/MainCatalog';
import FormLog from './pages/formPages/formLog/FormLog';
import FormSignUp from './pages/formPages/formSignUp/FormSignUp';
import MainPage from './pages/mainPage/MainPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Main/>
        <Routes>
          <Route path='MainPage' element={<MainPage/>}/>
          <Route path='Log' element={<FormLog/>}/>
          <Route path='SignUp' element={<FormSignUp/>}/>
          <Route path='SignUp' element={<FormSignUp/>}/>
          <Route path='MainCatalog' element={<MainCatalog/>}/>
          <Route path='IndoorPage' element={<IndoorPage/>}/>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
