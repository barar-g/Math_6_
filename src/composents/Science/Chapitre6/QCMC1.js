import QCM from '../../QCM';
import React, { useEffect, useState } from 'react';


function QCMC1(){

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Chapitre6.json'); // Notez le chemin d'accès absolu
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  

return(
        <div> <QCM questionsArray = {data}/></div>
    )
}

export default QCMC1;