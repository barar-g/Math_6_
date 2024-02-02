import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic23 from '../../Images/pic23.png';
import pic24 from '../../Images/pic24.png';


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
         <FormulaText dir="rtl"><strong>الملف الحادي عشر : مملكة التكرور
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أوضح مدلول كلمة التكرور
</strong>
<br></br>
<strong>-أتعرف على مملكة التكرور
</strong>
</FormulaText>
                           </Card>
                           
                  <br></br>
                  
                  <Card >
                  <br></br>

             
<img src={pic23} alt="Teacher" style={imageStyle} /> 
                  <FormulaText dir="rtl"><strong><SmallCard>
كلمة التكرور اسم للمنطقة الواقعة بين المحيط الأطلسي بالسنغال
                         و بين آدرار أيضا و يشكل نعر السينغال المحور الرئيسي لهذه المنطقة، 
                         </SmallCard><SmallCard>
                        و نظرا لخصوبة واديه قامت على ضفته مدن كبيرة مثل تكرور
                         و سونغاي كما انتشرت على ضفتيه الحقول الخضراء.
                         </SmallCard><SmallCard>
سكان مملكة تكرور الأوائل هم السرير

 و الولوف و السوننكي و هي أول مملكة سودانية انتشر فيها الإسلام.
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

             
<img src={pic24} alt="Teacher" style={imageStyle} />        
 <FormulaText dir="rtl"><strong>
 <SmallCard>
 يعود قيام مملكة التكرور إلى سلالة اديا أغو التي
     سيطرت على قبائل ضفتي النهر من 850-1000م و كانت تدين بالولاء لإمبراطورية غانا.
     </SmallCard><SmallCard>
ثم جائت سلالة اديابي المسلمة من 1000 إلى 1100م، ثم سلالة كانا التي حكمت حوالي 1300
</SmallCard>
<SmallCard>
، وقد تم اجتياحها من طرف قبائل الماندينغ
 الوثنية فعرفت المنطقة فترة من عدم 
الاستقرار السياسي منتصف القرن الخامس عشر </SmallCard><SmallCard>و استمر إلى ان قامت الثورة الإسلامية الإمامية(تورودو) في القرن الثامن عشر الميلادي.</SmallCard></strong></FormulaText>
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
