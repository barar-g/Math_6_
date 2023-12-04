import React, { useState } from 'react';
import QCMC2 from './QCMC3';

import pic5 from '../../Images/pic5.png';
import pic6 from '../../Images/pic6.png';


import Audio from "./Audio3" ;
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
         <FormulaText dir="rtl"><strong>الملف الثالث : رسول الله  ﷺ في المدينة
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong> -أتعرف على أسباب هجرته ﷺ إلى المدينة.
</strong>
<br></br>
<strong>-أتعرف على ما قام به في المدينة
</strong>
</FormulaText>
                           </Card>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic5} alt="Teacher" style={imageStyle} /> 
                    
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        اتجه رسول الله ﷺ إلى الطائف يدعو أهلها إلى الاسلام و لكنهم أعرضو عنه
                        </SmallCard><SmallCard>
                         ثم دعا القبائل العربية في موسم الحج رغم مضايقة قريش له فآمن به أهل يثرب و دعوة للهجرة إليهم
                         </SmallCard><SmallCard>
                         . فهاجر إليهم بصحبة أبي بكر رضي الله عنه حيث وصلاها في السنة الثالثة عشرة بعد البعثة.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                 <br></br>

             
 
 <Card>
 <img src={pic6} alt="Teacher" style={imageStyle} /> 
<br></br>       
                       
 <FormulaText dir="rtl"><strong>
    <SmallCard>
    استبدل ﷺ يثرب باسم المدينة و كانت هجرته إليها فاتحة عهد جديد للأمة الاسلامية و اصبح يومها من الأيام الخالدة في الأسلام.
    </SmallCard><SmallCard>
أسس ﷺ الدول الإسلامية و بني المسجد كما كتب وثيقة لتنظيم العلاقات
</SmallCard><SmallCard>
 ثم حارب قريشا بوصفها العقبة الأولى في نشر الاسلام و قام بالغزوات.</SmallCard></strong></FormulaText>
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
