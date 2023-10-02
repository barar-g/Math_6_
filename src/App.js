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
import Mathexam from './composents/Mathexam';
import Calculchap1 from './composents/Math/Calcul/Calculchap1';
import Calculchap2 from './composents/Math/Calcul/Calculchap2';
import Calculchap3 from './composents/Math/Calcul/Calculchap3';
import Calculchap4 from './composents/Math/Calcul/Calculchap4';
import Calculchap5 from './composents/Math/Calcul/Calculchap5';
import Calculchap6 from './composents/Math/Calcul/Calculchap6';
import Calculchap7 from './composents/Math/Calcul/Calculchap7';
import Calculchap8 from './composents/Math/Calcul/Calculchap8';
import Mesurechap1 from './composents/Math/Mesures/Mesurechap1';
import Mesurechap2 from './composents/Math/Mesures/Mesurechap2';
import Mesurechap3 from './composents/Math/Mesures/Mesurechap3';
import Mesurechap4 from './composents/Math/Mesures/Mesurechap4';
import Mesurechap5 from './composents/Math/Mesures/Mesurechap5';
import Mesurechap6 from './composents/Math/Mesures/Mesurechap6';
import Mesurechap7 from './composents/Math/Mesures/Mesurechap7';
import Géometriechap1 from './composents/Math/Géometrie/Géometriechap1';
import Géometriechap2 from './composents/Math/Géometrie/Géometriechap2';
import Géometriechap3 from './composents/Math/Géometrie/Géometriechap3';
import Géometriechap4 from './composents/Math/Géometrie/Géometriechap4';
import Géometriechap5 from './composents/Math/Géometrie/Géometriechap5';
import Géometriechap6 from './composents/Math/Géometrie/Géometriechap6';
import C1 from './composents/C1/C1';
import C2 from './composents/C2/C2';
import C3 from './composents/C3/C3';
import C4 from './composents/C4/C4';
import C5 from './composents/C5/C5';
import C5A2 from './composents/C5A2';
import C5A3 from './composents/C6/C5A3';
import C5A4 from './composents/C6/C5A4';
import Kangaroo from './composents/C6/Kangaroo';
import C5A5 from './composents/C6/C5A5';
import C6 from './composents/C6/C6';
import M2A1 from './composents/M2/M2A1';
import M2A2 from './composents/M2/M2A2';
import M2A3 from './composents/M2/M2A3';
import M2 from './composents/M2/M2';
import G1A1 from './composents/G1/G1A1';
import G3 from './composents/G3/G3';
import G1A2 from './composents/G1/G1A2';
import G1 from './composents/G1/G1';



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
          <Route path="/Mathexam" element ={<Mathexam/>}/>
          <Route path="/Calculchap1" element ={<Calculchap1/>}/>
          <Route path="/Calculchap2" element ={<Calculchap2/>}/>
          <Route path="/Calculchap3" element ={<Calculchap3/>}/>
          <Route path="/Calculchap4" element ={<Calculchap4/>}/>
          <Route path="/Calculchap5" element ={<Calculchap5/>}/>
          <Route path="/Calculchap6" element ={<Calculchap6/>}/>
          <Route path="/Calculchap7" element ={<Calculchap7/>}/>
          <Route path="/Calculchap8" element ={<Calculchap8/>}/>
          <Route path="/Mesurechap1" element ={<Mesurechap1/>}/>
          <Route path="/Mesurechap2" element ={<Mesurechap2/>}/>
          <Route path="/Mesurechap3" element ={<Mesurechap3/>}/>
          <Route path="/Mesurechap4" element ={<Mesurechap4/>}/>
          <Route path="/Mesurechap5" element ={<Mesurechap5/>}/>
          <Route path="/Mesurechap6" element ={<Mesurechap6/>}/>
          <Route path="/Mesurechap7" element ={<Mesurechap7/>}/>
          <Route path="/Géometriechap1" element ={<Géometriechap1/>}/>
          <Route path="/Géometriechap2" element ={<Géometriechap2/>}/>
          <Route path="/Géometriechap3" element ={<Géometriechap3/>}/>
          <Route path="/Géometriechap4" element ={<Géometriechap4/>}/>
          <Route path="/Géometriechap5" element ={<Géometriechap5/>}/>
          <Route path="/Géometriechap6" element ={<Géometriechap6/>}/>
          <Route path="/C1" element ={<C1/>}/>
          <Route path="/C2" element ={<C2/>}/>
          <Route path="/C3" element ={<C3/>}/>
          <Route path="/C4" element ={<C4/>}/>
          <Route path="/C5A1" element ={<C5/>}/>
          <Route path="/C5A2" element ={<C5A2/>}/>
          <Route path="/C5A3" element ={<C5A3/>}/>
          <Route path="/C5A4" element ={<C5A4/>}/>
          <Route path="/Kangaroo" element ={<Kangaroo/>}/>
          <Route path="/C5A5" element ={<C5A5/>}/>
          <Route path="/C6" element ={<C6/>}/>
          <Route path="/M2A1" element ={<M2A1/>}/>
          <Route path="/M2A2" element ={<M2A2/>}/>
          <Route path="/M2A3" element ={<M2A3/>}/>
          <Route path="/M2" element ={<M2/>}/>
          <Route path="/G1" element ={<G1/>}/>
          <Route path="/G1A2" element ={<G1A2/>}/>
          <Route path="/G3" element ={<G3/>}/>
          <Route path="/G1" element ={<G1/>}/>

         
        </Routes>
      
      </div>
    </Router>
  )
}

export default App;
