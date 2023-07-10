import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QCMchap1 from './composents/Siences/QCMchap1';
import ChoixExamen from './composents/ChoixExamen';
import Accueil from './composents/Accueil';
import QCMchap2 from './composents/Siences/QCMchap2';
import QCMchap3 from './composents/Siences/QCMchap3';
import QCMchap4 from './composents/Siences/QCMchap4';
import QCMchap5 from './composents/Siences/QCMchap5';
import QCMchap6 from './composents/Siences/QCMchap6';
import QCMchap7 from './composents/Siences/QCMchap7';
function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path= "/" element={<Accueil/>} />
          <Route path= "/choix examn" element={<ChoixExamen/>} />
          <Route path="/QCMchap1" element ={<QCMchap1/>}/>
          <Route path="/QCMchap2" element ={<QCMchap2/>}/>
          <Route path="/QCMchap3" element ={<QCMchap3/>}/>
          <Route path="/QCMchap4" element ={<QCMchap4/>}/>
          <Route path="/QCMchap5" element ={<QCMchap5/>}/>
          <Route path="/QCMchap6" element ={<QCMchap6/>}/>
          <Route path="/QCMchap7" element ={<QCMchap7/>}/>
        </Routes>
      
      </div>
    </Router>
  )
}

export default App;
