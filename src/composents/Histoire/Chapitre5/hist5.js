import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic9 from '../../Images/pic9.png';
import pic11 from '../../Images/pic11.png';

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
         <FormulaText dir="rtl"><strong>الملف الخامس : الخلافة الراشدية
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>  -أتعرف على الخلفاء الراشدين و أهم أعمالهم
</strong>
<br></br>
<strong>-أتعرف على أهم أعمال أبي بكر و عمر أثناء خلافتهما
</strong>
</FormulaText>
                           </Card>
                           
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic9} alt="Teacher" style={imageStyle} /> 
                     
               
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        كانت فترة خلافة أبي بكر و عمر فترة توسع الدولة الإسلامية خارج الجزيرة العربية.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                 
<br></br>        
 <Card>
 <br></br>

             
<img src={pic11} alt="Teacher" style={imageStyle} /> 
                       
 <FormulaText dir="rtl"><strong>
 <SmallCard>
    واصل عثمان الفتوحات التي تمت في عهد أبي بكر و عمر،

    </SmallCard><SmallCard>
     و في عهد علي وقعت الفتنة الكبرى و عمل علي على جمع كلمة المسلمين تحت راية واحدة.</SmallCard></strong></FormulaText>
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
