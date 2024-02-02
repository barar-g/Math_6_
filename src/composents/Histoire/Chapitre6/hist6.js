import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic12 from '../../Images/pic12.png';
import pic13 from '../../Images/pic13.png';


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
         <FormulaText dir="rtl"><strong>الملف السادس : الإسلام دين و علم
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>  -أوضح موقف الإسلام من العلم
</strong>
<br></br>
<strong>-أتعرف على مجهود المسلمين في العلم
</strong>
</FormulaText>
                           </Card>
                           
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic12} alt="Teacher" style={imageStyle} /> 
                    
                       
                       <FormulaText dir="rtl"><strong>
                       <SmallCard>
                        حض الإسلام على التعلم حيث دعا القرآن إلى التفكر و التأمل و النظر و أول ما نزل من القرآن :(اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ)</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                 
<br></br>        
 <Card>

 <br></br>             
<img src={pic13} alt="Teacher" style={imageStyle} /> 

 <FormulaText dir="rtl"><strong>
    <SmallCard>
    تبنى المسلمون منذ عهد النبي ﷺ رسالة واضحة تقتضي نشر العلم في جميع بقاع العالم.</SmallCard></strong></FormulaText>
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
