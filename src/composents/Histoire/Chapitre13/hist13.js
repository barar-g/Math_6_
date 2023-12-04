import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic25 from '../../Images/pic25.png';
import pic26 from '../../Images/pic26.png';


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
         <FormulaText dir="rtl"><strong>الملف الثالث عشر : الإسلام في موريتانيا </strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أعطي لمحة عن الأديان التي سبقت الإسلام و الحالة الاجتماعية لأهلها

</strong>
<br></br>
<strong>-أبين تاريخ وصول الفتح الإسلامي في موريتانيا</strong>
</FormulaText>
                           </Card>
                        
                  <br></br>
                  <Card >
                    
                  <br></br>

             
<img src={pic26} alt="Teacher" style={imageStyle} /> 
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        الاديان التي سبقت الاسلام كثيرا كان اخرها المسيحيه التي قال فيها عيسى عليه السلام
                         انه مبشر برسول ياتي من بعده اسمه احمد
                         </SmallCard><SmallCard>
                          وقد ضعفت وحرفت واعتنق الناس الوثنيه 

                        وقد كان سكان موريتانيا من الافارقه يعتنقون المعتقدات الوثنيه،
                        </SmallCard><SmallCard>
شأنهم في ذلك شأن كل اللأمم والشعوب التي لم تصلها الدعوه المحمديه.
</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
            
<br></br>        
 <Card>
 <br></br>

             
<img src={pic25} alt="Teacher" style={imageStyle} /> 
                       
 <FormulaText dir="rtl"><strong>
    <SmallCard>
    مؤسس دوله المرابطيون هم قبائل صنهاجه التي سقطت الصحراء
     الموريتانيه وهي كانت  لمتونة اكدالة مسوفة و لمطة.
     </SmallCard><SmallCard>
     كانت هذه القبائل قد اعتنقت الاسلام لكنها تجهل تعاليمه الشيء
     الذي دفع صاحبهم يحيى بن ابراهيم عبد الله بن ياسين
     </SmallCard> <SmallCard>
     اثناء عودتهم الحجه ليعلم الناس الاخيره
     لما ما رسم هامه وشد الناس في اعراضها فاعتزلهم و تلاميذته 
    ورابطوا في جزيره تيدره شمال انواكشوط
    </SmallCard><SmallCard>
     فقدم عليهما 
    ابناء هذه القبائل فرادى وجماعات ومن هذا الرباط 
    اشتق اسمهم وكان تاسيس رباطهم سنه 435 هجريه الى 1043 هجريه.
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
