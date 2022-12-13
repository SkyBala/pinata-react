import React from 'react';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import Main from './Main';
import FormLog from './pages/formPages/formLog/FormLog';
import FormSignUp from './pages/formPages/formSignUp/FormSignUp';
import MainPage from './pages/mainPage/MainPage';
import IndoorPage from './pages/catologPages/indoorPage/IndoorPage';
import MainCatalog from './pages/catologPages/mainCatalog/MainCatalog';
import MobileCatalog from './pages/catologPages/mobileCatalog/MobileCatalog';
import News from './pages/catologPages/mobileCatalog/news/News'
import MobileMainCatalog from './pages/catologPages/mobileMainCatalog/MobileMainCatalog';
import CardsWrapper from './pages/catologPages/mobileCatalog/components/cardsWrapper/CardsWrapper';
import {useMediaQuery} from '@mui/material'


function App() {

  const isMobile = useMediaQuery('(max-width:401px)');

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Main/> */}
        <Routes>
          <Route path='Log' element={<FormLog/>}/>
          <Route path='SignUp' element={<FormSignUp/>}/>
          <Route path='SignUp' element={<FormSignUp/>}/>
          {/* <Route path='IndoorPage' element={<IndoorPage/>}/> */}
          {/* <Route path='MobileMainCatalog' element={<MobileMainCatalog/>}/> */}
          
          {isMobile?<Route path='MainPage' element={<News/>}/>
            :<Route path='MainPage' element={<MainCatalog/>}/>}

          {isMobile?<Route path='MainPage/IndoorPage' element={<MobileCatalog/>}/>
            :<Route path='MainPage/IndoorPage' element={<IndoorPage/>}/>}

          {isMobile?<Route path='MainPage/MobileMainCatalog' element={<MobileMainCatalog/>} />:null}

          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
