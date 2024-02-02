import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic1 from '../../Images/pic33.png';
import pic2 from '../../Images/pic32.png';


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
         <FormulaText dir="rtl"><strong>الملف السادس عشر : دولة المرابطين
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أتعرف على دولة المرابطين
</strong>
<br></br>
<strong>-أتعرف على فتوحات المرابطين و الحضارة المرابطية</strong>
</FormulaText>
                           </Card>
                          
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic1} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        كانت تسكن البلاد الموريتانية قبائل صنهاجية و إفريقية
                         حتى دخلها الإسلام على يد الفاتحين العرب، 
                         </SmallCard><SmallCard>
                         و لما ترسخ الإسلام في هذه السعوب حملت راية العوة
                         و الجهاد إلى الشعوب المجاورة فأنارتها بالإسلام و خلصتها من براثين الشرك و الأوثان
                         </SmallCard><SmallCard>
و قد وصل الأسلام إلى جنوب الصحراء (موريتانيا حاليا) على يد الفاتحيم القادمين من الشرق مرورا 
الغرب
</SmallCard><SmallCard>
 و قد اشتهر منهم عقبة بن نافع و حفيده عبد الرحمن بن حبيب 
و قع هذا في العهد الأموي، و منذ تلك الفترة أصبحت هذه المنطقة مركز إشعاع إسلامي إلى يومنا هذا.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
               
<br></br>        
 <Card>
 <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
 <FormulaText dir="rtl"><strong>
 <SmallCard>
    يعود تأسيس دولة المرابطين لقبائل صنهاجة التي تقطن الصحراء الموريتانية 
    و ماإن بلغ عدد الوافدين على رباطهم 1000  مرابط 
    </SmallCard><SmallCard>
    حتى أعلنو الجهاد بقيادة يحي بن عمر اللمتوني .
  
و كانت أولى غزواتهم سنة 446 ه 1054 ه فكان فتحهم لمدينة أوداغوست
</SmallCard><SmallCard>
. توسعت فتوحات يوسف بن تاشفين في الشمال و أبو بكر في الجنوب.
و قد جاهد هذا الأخير حتى استشهد حوالي 480ه/1087م. 
</SmallCard><SmallCard>
أسس المرابطون عاصمة لهم في الشمال بعد فتحهم مدن المغرب فكانت مراكش التي بناها
 يوسف بن تاشفين سنة 462ه/1070ه، 
 </SmallCard><SmallCard>
 وأصبحت أول دولة المغرب واصل يوسف الفتح شمالا حتى فرنسا و من المعارك 
التي خاضاها معركة الزلاقة سنة 479ه/1086م 
</SmallCard><SmallCard>

يعرف عن المرابطين اهتمامهم بالعلم و العلماء، و مزجهم بين الحضارة المغربية و الأندلسية.</SmallCard></strong></FormulaText>
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
