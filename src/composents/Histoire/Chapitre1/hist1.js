import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';


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
         <FormulaText dir="rtl"><strong>الملف الأول : رسول الله  ﷺ (شبابه)
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>  -أتعرف على تاريخ و موقع مولده ﷺ
</strong>
<br></br>
<strong>-أتعرف على مراحل شبابه و الاعمال التي قام بها</strong>
</FormulaText>
                           </Card>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic1} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        ولد النبي صلى الله عيه و سلم في الجزيرة العربية،
                         و تحديدا في مكة المكرمة
                         </SmallCard><SmallCard>
                         ولد
                          في الثاني عشر من ربيع الأول سنة 571 م و هي السنة المعروفة ب عام الفيل.
                          
                          
                          </SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                 <br></br>

             

                 <br></br>        
 <Card>
 <br></br>  
 <img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
 <FormulaText dir="rtl"><strong>
    <SmallCard>
    ولد ﷺ بعد وفاة أبيه ببضعة أشهر أرضعته حليمة السعدية. وفي السنة الخامسة من عمره عاد إلى امه، 
    لكنه لم ينعم بحضانتها طويلا؛
    </SmallCard><SmallCard>
     كما توفي جده عبد المطلب و هو في الثامنة من عمره،
     فكفله عمه أبو طالب الذي خرج معه ذات مرة في التجارة إلى الشام،
     </SmallCard><SmallCard>
      و شارك و هو في الخامسة
     
     و الثلاثين من العمر أهل مكة في اعمالهم كحرب الفجار و اعادة بناء الكعبة و حل نزاع وضع الحجر الأسود.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </Card>
                    <br></br>
                   
                </div>
            )}

                      

{section >= 2 && (
                <div dir="rtl">
                    <QCMC1 />
                </div>
            )}

            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
