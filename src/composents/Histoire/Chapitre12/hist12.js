import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic1 from '../../Images/pic38.png';
import pic2 from '../../Images/pic39.png';


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
         <FormulaText dir="rtl"><strong>الملف الثاني  عشر : مملكة اوداغست
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-اتعرف على مملكه اوداغست</strong>
<br></br>
<strong>
    -أتعرف على القبائل المكونه للتنظيم وطرق سيطرتها
</strong>
</FormulaText>
                           </Card>
                           <br></br>

             
                  <img src={pic1} alt="Teacher" style={imageStyle} /> 
                  <br></br>
                  <Card >
                    
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                            تطلق مملكه
                             اوداغوست على التنظيم التي اقامته قبائل صنهاجة قبل الاسلام والتي امتدت من المحيط الاطلسي غربا الى منطقه ادرار شرقا 
        </SmallCard>
                            <SmallCard>وقد شملت ايضا قبائل السوداء التي كانت منتشره حول مدينه 
                        اوداغست
                         </SmallCard><SmallCard>
                         و قد دخلت قبائل صنهاجة موريتانيا خلال القرنين الثانيي والثالث الميلاديين وقد ساعدهم وجود الجمل في بسط نفوذهم على الصحراء.
</SmallCard>
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

                       
 <FormulaText dir="rtl"><strong>
    <SmallCard>تعتبر مملكه او استمرارا لتنظيم قبائل صنهاجه التي كان قائما قبل الاسلام وقد دخلت هذه القبائل الموريتانيه
        </SmallCard><SmallCard> في القرنين الثاني والثالث الميلاديين وقد امتد نفوذهما من المحيط الاطلسي إلى ادرار شرقا و فرضت سيطرتها على قبائل السود في الجنوب . 
</SmallCard><SmallCard>و قد كان نظام الحكم فيها ملكيا وبالتعاقب بين القبائل حسب الميزان القوة.
 وقد ساعدهم الجمي
ل الذي قدموا به من اليمن في بسط نفوذهما على الصحراء
</SmallCard><SmallCard>
 حيث احدث ثوره للمواصلات.
انتشرت قبائل صنهاجة في عموم الصحراء
 حيث اصبح لكل بها فيلم قبيلة موطنها الخاص يها في لمتونه من ادرار حتى المحيط </SmallCard> <SmallCard>و اكدالة في الجنوب و مسوفة  في الحوض. 
    وقد أقاموا دولة في الجنوب الشرقي من موريتانيا عاصمتها اوداغست</SmallCard></strong></FormulaText>
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
