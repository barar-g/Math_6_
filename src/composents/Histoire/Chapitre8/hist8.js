import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic17 from '../../Images/pic17.png';
import pic18 from '../../Images/pic18.png';


import Audio from "./Audio1" ;
import {
  Container,FormulaText, Card, ContinueButton, SmallCard
} from '../../Styles/MajorStyles'; 



const imageStyle = {
    width: '70%', // L'image prendra 80% de la largeur de son parent
    height: 'auto', // La hauteur change automatiquement pour garder les proportions
    maxWidth: '70%', // Assure que l'image ne dépasse pas la largeur de la carte
    display: 'block', // Empêche l'image de prendre plus de place que nécessaire
    marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
    marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};


const C1 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container >
         <FormulaText dir="rtl"><strong>الملف الثامن : -المدن الإسلامية الرئيسية
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>  -أتعرف على أهم المدن الإسلامية في المشرق.
</strong>
<br></br>
<strong>-أتعرف على أهم المدن المدن الإسلامية في المغرب و الأندلس.
</strong>
</FormulaText>
                           </Card>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic17} alt="Teacher" style={imageStyle} /> 
                    
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        من أهم المدن الإسلامية في المشرق: مكة و المدينة و صنعاء و دمشق و حلب و القدس و البصرة و الكوفة و بغداد و الفسطاط و القاهرة.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                
<br></br>        
 <Card>

 <br></br>

             
<img src={pic18} alt="Teacher" style={imageStyle} />     
 <FormulaText dir="rtl"><strong>
 <SmallCard>
    من أشهر الإسلامية في المغرب و الأندلس : القيروان في تونس و فاس و مراكش في المغرب و قرطبة و الزهراء في الأندلس.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </Card>
                    <br></br>
                   
                </div>
            )}

                      

{section >= 2 && (
                <div dir="rtl">
                    <QCMC2 />
                </div>
            )}

            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
