import React, { useState } from 'react';
import QCMC2 from './QCMC2';

import pic3 from '../../Images/pic3.png';
import pic4 from '../../Images/pic4.png';


import Audio from "./Audio2" ;
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
         <FormulaText dir="rtl"><strong>الملف الثاني : رسول الله  ﷺ في مكة
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>  -أتعرف على بدايات نزول الوحي
</strong>
<br></br>
<strong>أتعرف على أهم الشخصيات التي بادرت إلى التصديق بما جاء به ﷺ
</strong>
</FormulaText>
                           </Card>
                          
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic3} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        لما بلغ رسول الله ﷺ الأربعين من عمره أرسله الله للعالمين بشيرا و نذيرا و كان أول ما بدأ به الوحي الرؤيا الصادقة.
                        </SmallCard><SmallCard>
                         و بينما هو قائم على الجبل اذ ظهر له جبريل و قال له ابشر يا محمد انت رسول الله إلى هذه الأمة.
                         </SmallCard>
</strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
               
<br></br>        
 <Card>
 <br></br>

             
<img src={pic4} alt="Teacher" style={imageStyle} /> 
                       
 <FormulaText dir="rtl"><strong>
    <SmallCard>
    بادرت خديجة بنت خويلد إلى التصديق بالنبي ﷺ كما آمن ابن عمه على ابن أبي طالب و زيد بن حارثة و أم أيمن ثم أبو بكر،
    </SmallCard><SmallCard>
     و كان الرسول ﷺ يجتمع بهم في دار الأرقم بن أبي الأرقم ليرشدهم و يعلمهم سرا
     </SmallCard><SmallCard>
      حتى نزلت عليه الآية الكريمة (فَاصْدَعْ بِمَا تُؤْمَرُ وَأَعْرِضْ عَنِ الْمُشْرِكِينَ) فبدأت الدعوة جهرا
      </SmallCard>
</strong></FormulaText>
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
