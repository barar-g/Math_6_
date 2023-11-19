import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './composents/Accueil';
import C1 from './composents/C1/C1';
import C2 from './composents/C2/C2';
import C3 from './composents/C3/C3';
import C4 from './composents/C4/C4';
import C5 from './composents/C5/C5';
import G2 from './composents/G2/G2';
import C5A3 from './composents/C6/C5A3';
import C5A4 from './composents/C6/C5A4';
import Kangaroo from './composents/C6/Kangaroo';
import C5A5 from './composents/C6/C5A5';
import C6 from './composents/C6/C6';
import C7 from './composents/C7/C7';
import M2A1 from './composents/M2/M2A1';
import M2A2 from './composents/M2/M2A2';
import M2A3 from './composents/M2/M2A3';
import M2 from './composents/M2/M2';
import G3 from './composents/G3/G3';
import G1A2 from './composents/G1/G1A2';
import G1 from './composents/G1/G1';
import P2A1A from './composents/C09/P2A1A';
import P2A1C from './composents/C10/P2A1C';
import P2A1B from './composents/C12/P2A1B';
import P3A3 from './composents/C11/P3A3';
import P3A4 from './composents/C13/P3A4';
import P3A6 from './composents/G4/P3A6';
import P3A7 from './composents/G5/P3A7';
import P3A8 from './composents/M4/P3A8';
import Aire2 from './composents/M3/Aire2';
import P3A5 from'./composents/C14_C15_C16/P3A5';
import Chap13 from'./composents/C16/Chap13';
import Fraction2 from './composents/M5/Fraction2';
import Periode1 from './composents/Periode1';
import Periode2 from './composents/Periode2';
import Science from './composents/Science';
import EquilibrAlimantaire from './composents/Science/Chapitre1/EquilibreAlimantaire';
import EquilibrEnergitique from './composents/Science/Chapitre2/EquilibreEnergitique';
import Desertification from './composents/Science/Chapitre3/Desertification';
import Pollution from './composents/Science/Chapitre4/Pollution';  
import EauEtSante from './composents/Science/Chapitre5/EauEtSante';




function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
           
          <Route path= "/" element={<Accueil/>} />
          
          <Route path="/C1" element ={<C1/>}/>
          <Route path="/C2" element ={<C2/>}/>
          <Route path="/C3" element ={<C3/>}/>
          <Route path="/C4" element ={<C4/>}/>
          <Route path="/C5A1" element ={<C5/>}/>
         
          <Route path="/C5A3" element ={<C5A3/>}/>
          <Route path="/C5A4" element ={<C5A4/>}/>
          <Route path="/Kangaroo" element ={<Kangaroo/>}/>
          <Route path="/C5A5" element ={<C5A5/>}/>
          <Route path="/C6" element ={<C6/>}/>
          <Route path="/C7" element ={<C7/>}/>
          <Route path="/M2A1" element ={<M2A1/>}/>
          <Route path="/M2A2" element ={<M2A2/>}/>
          <Route path="/M2A3" element ={<M2A3/>}/>
          <Route path="/M2" element ={<M2/>}/>
          <Route path="/G1" element ={<G1/>}/>
          <Route path="/G2" element ={<G2/>}/>
          <Route path="/G1A2" element ={<G1A2/>}/>
          <Route path="/G3" element ={<G3/>}/>
          <Route path="/G1" element ={<G1/>}/>
          <Route path="/Periode1" element ={<Periode1/>}/>
          <Route path="/Periode2" element ={<Periode2/>}/>
          <Route path="/Science" element ={<Science/>}/>
          <Route path="/EquilibrAlimantaire" element ={<EquilibrAlimantaire/>}/>
          <Route path="/EquilibrEnergitique" element ={<EquilibrEnergitique/>}/>
          <Route path="/Desertfication" element ={<Desertification/>}/>
          <Route path="/Pollution" element ={<Pollution/>}/>
          <Route path="/EauEtSante" element ={<EauEtSante/>}/>
          <Route path="/P2A1A" element ={<P2A1A/>}/>
          <Route path="/P2A1C" element ={<P2A1C/>}/>
          <Route path="/P2A1B" element ={<P2A1B/>}/>
          <Route path="/P3A3" element ={<P3A3/>}/>
          <Route path="/P3A4" element ={<P3A4/>}/>
          <Route path="/P3A5" element ={<P3A5/>}/>
          <Route path="/P3A6" element ={<P3A6/>}/>
          <Route path="/P3A7" element ={<P3A7/>}/>
          <Route path="/P3A8" element ={<P3A8/>}/>
          <Route path="/Chap13" element ={<Chap13/>}/>
          <Route path="/Aire2" element ={<Aire2/>}/>
          <Route path="/Fraction2" element ={<Fraction2/>}/>
         
        </Routes>
      
      </div>
    </Router>
  )
}

export default App;
 