import React from 'react';
import { Route,Routes, } from 'react-router-dom';
import Main from './Main';

import FormLog from './pages/formPages/formLog/FormLog';
import FormSignUp from './pages/formPages/formSignUp/FormSignUp';
import MainPage from './pages/mainPage/MainPage';

import IndoorPage from './pages/catologPages/indoorPage/IndoorPage';
import MainCatalog from './pages/catologPages/mainCatalog/MainCatalog';
import {useMediaQuery} from '@mui/material'

import DefaultPage from './components/defaultsPage/DefaultPage';
import Layout from './components/layouts/Layout';
import IntroPage from './pages/mobilkaPage/introPage/IntroPage';
import LayoutMob from './components/layouts/LayoutMob';
import Footer from './components/footer/Footer';


function App() {

  const isMobile = useMediaQuery('(min-width:420px)');

  


  return (
    <div className="App">
      
        
        <Routes>
            {
              isMobile
              ?
              <Route path='/' element={<Layout/>}>
                <Route path='*' element={<DefaultPage/>}/>
                  <Route index element={<FormLog/>}/>
                <Route path='signUp' element={<FormSignUp/>}/>
                <Route path='MainPage' element={<MainPage/>}/>

            </Route>
            :
            <Route path='/' element={<LayoutMob/>}>
                <Route  index element={<IntroPage/>}/>
                <Route path='*' element={<DefaultPage/>}/>

                <Route path='LogIn' element={<FormLog/>}/>
                <Route path='signUp' element={<FormSignUp/>}/>

               <Route path='/' element={<Main/>}>
                  <Route path='MainPage' element={<MainPage/>}/>
               </Route>

            </Route>
            }
            


          </Routes>
       
    </div>

  );

}

export default App;
