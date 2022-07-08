import React, { useState } from 'react';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import './App.css';
import { BrowserRouter, Routes,  Route, } from "react-router-dom";



function App() {

const [ user, setLoginUser ] = useState({
 
});

  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
          <Route exact path='/' element={  user && user._id? <Homepage setLoginUser={setLoginUser}/>:<Login setLoginUser={ setLoginUser }/> }> 
        
          </Route>
          <Route path='/register' element={< Register />}>   </Route>
          <Route path='/login' element={< Login  setLoginUser={ setLoginUser }/> }>   </Route>
      </Routes>
      
    </BrowserRouter>
       

      
       
      
     
        
       
    </div>
  );
}

export default App;
