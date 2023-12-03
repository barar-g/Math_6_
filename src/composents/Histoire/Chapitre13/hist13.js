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
         <FormulaText dir="rtl"><strong>الملف الثالث عشر : الإسلام في موريتانيا </strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أعطي لمحة عن الأديان التي سبقت الإسلام و الحالة الاجتماعية لأهلها

</strong>
<br></br>
<strong>-أبين تاريخ وصول الفتح الإسلامي في موريتانيا</strong>
</FormulaText>
                           </Card>
                           <br></br>

             
                  <img src={pic1} alt="Teacher" style={imageStyle} /> 
                  <br></br>
                  <Card >
                    
                       
                       <FormulaText dir="rtl"><strong>الاديان التي سبقت الاسلام كثيرا كان اخرها المسيحيه التي قال فيها عيسى عليه السلام انه مبشر برسول ياتي من بعده اسمه احمد وقد ضعفت وحرفت واعتنق الناس الوثنيه وقد كان سكان موريتانيا من الافارقه يعتنقون المعتقدات الوثنيه،
شأنهم في ذلك شأن كل اللأمم والشعوب التي لم تصلها الدعوه المحمديه.
</strong></FormulaText>
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

                       
 <FormulaText dir="rtl"><strong>مؤسس دوله المرابطيون هم قبائل صنهاجه التي سقطت الصحراء الموريتانيه وهي كانت  لمتونة اكدالة مسوفة و لمطة. كانت هذه القبائل قد اعتنقت الاسلام لكنها تجهل تعاليمه الشيء الذي دفع صاحبهم يحيى بن ابراهيم عبد الله بن ياسين اثناء عودتهم الحجه ليعلم الناس الاخيره لما ما رسم هامه وشد الناس في اعراضها فاعتزلهم و تلاميذته ورابطوا في جزيره تيدره شمال انواكشوط فقدم عليهما ابناء هذه القبائل فرادى وجماعات ومن هذا الرباط اشتق اسمهم وكان تاسيس رباطهم سنه 435 هجريه الى 1043 هجريه.
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
