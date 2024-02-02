import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic1 from '../../Images/pic14.png';
import pic15 from '../../Images/pic15.png';
import pic16 from '../../Images/pic16.png';

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
         <FormulaText dir="rtl"><strong>الملف السابع : الحضارة الأموية و الحضارة العباسية
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong> -أتعرف على أهم أوجه الحضارة الأموية
</strong>
<br></br>
<strong>-أتعرف على أهم أوجه الحضارة العباسية.
</strong>
</FormulaText>
                           </Card>
                           <br></br>
                      
                  <Card >
                         <img src={pic15} alt="Teacher" style={imageStyle} /> 
             
                  <img src={pic1} alt="Teacher" style={imageStyle} /> 
                  <br></br>
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        ظهر نشاط واسع في عهد بني أمية شمل جميع مناحي المعرفة كما ازدهر فن الهندسة المعمارية و الموسيقى.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
              
<br></br>        
 <Card>
 <br></br>

             
<img src={pic16} alt="Teacher" style={imageStyle} /> 
                       
 <FormulaText dir="rtl"><strong>
 <SmallCard>
    ازدهرت الحياة العلمية بشكل واسع في العهد العباسي
     و تونعت مجالاتها 
     </SmallCard><SmallCard>
     كما ازدهرت العمارة،ونظم الجيش و الوزارة،وشمل الاهتمام التجارة و الزراعة و الصناعة و الموسيقى و الغناء.</SmallCard></strong></FormulaText>
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
