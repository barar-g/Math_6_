import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic21 from '../../Images/pic21.png';
import pic22 from '../../Images/pic22.png';


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
         <FormulaText dir="rtl"><strong>الملف العاشر : إمبراطورية غانا
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أوضح مفهوم الإمبراطورية.
</strong>
<br></br>
<strong>-أتعرف على عوامل ازدهار إمبراطورية غانا.
</strong>
</FormulaText>
                           </Card>
                           
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic21} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong> <SmallCard>الإمبراطورية حيز جغرافي كبير؛ يخضع لسلطة الإمبراطورية عدة ممالك.
                        </SmallCard> <SmallCard>أما إمبراطورية غانا فخضعت لها عدة ممالك من أهمها:</SmallCard>

-مملكة أودوغوست
<br></br>
-مملمة التكرور
<br></br>
-مملمة صوصو
<br></br><SmallCard>    تخضع الإمبراطورية لسلطة الإمبراطور؛ يساعد مجلس من النبلاء  و مسلمون و وثنيوند تتمتع </SmallCard>  
 <SmallCard>الممالك باستقلال ذاتي فيما يتعلق بالأمور المحلية و تخضع لسلطة الإمبراطورية  في أمور منها:
الدفاع-الجيش-الجمارك  </SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
              
<br></br>        
 <Card>
 <br></br>

             
<img src={pic22} alt="Teacher" style={imageStyle} /> 
 <FormulaText dir="rtl"><strong> 
<SmallCard>
 لغت إمبراطورية غانا أوج ازدهارها في القرنين 10 و 11 الميلاديين   
    . و من أهم العوامل التي ساهمت في ازدهار إمبراطورية غانا دخول الإسلام
    </SmallCard>  <SmallCard>   حيث وطد علاقات غانا مع شمال افريقيا و زاد ذالك من ثروتها و قد أسلم الملك 
   و قويت سلطته و أتى الفقهاء و الصتاع، و توسعت الإمبراطورية
   </SmallCard>
   <SmallCard>
     كما امتزج سكانها بالبربر و توحد العنصر و الأسود و العنصر الأبيض تحت راية الإسلام.
     </SmallCard>
     <SmallCard>
و لعبن الثروة الذهبية الهائلة التي تملكها الإمبراطورية دورا هاما في تشجيع الحركة التجارية عن طريق القوافل.</SmallCard></strong></FormulaText>
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
