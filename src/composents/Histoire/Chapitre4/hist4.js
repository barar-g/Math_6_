import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';


import Audio from "./Audio1" ;
import {
  Container,FormulaText, Card, ContinueButton
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
         <FormulaText dir="rtl"><strong>الملف الرابع : انتشار الإسلام
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أتعرف على أهم الغزوات التي وقعت بعد غزوتي بدر و أحد
</strong>
<br></br>
<strong>-أتعرف على انتشار الإسلام في العهد الراشدي و الأموي
</strong>
</FormulaText>
                           </Card>
                           <br></br>

             
                  <img src={pic1} alt="Teacher" style={imageStyle} /> 
                  <br></br>
                  <Card >
                    
                       
                       <FormulaText dir="rtl"><strong>عزمت قريش على القضاء على الإسلام فوجهت جيشا عظيما بتمويل من اليهود فحفر المسلمون خندقا حول المدينة. و في السنة السابعة قام النبي ﷺ بفتح خيبر ثم فتح مكة في السنة الثامنة.</strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                 <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
<br></br>        
 <Card>

                       
 <FormulaText dir="rtl"><strong>في عهد أبي بكر بدأ الفتح الإسلامي يتجاوز حدود الجزيرة العربية ألى الشام و العراق و قد سار الخليفتات عمر و عثمان على نهجه في توسيع رقعة العالم الإسلامي و جاءت الدولة الأموية فبلغ العالم الإسلامي أوج اتساعه.</strong></FormulaText>
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
