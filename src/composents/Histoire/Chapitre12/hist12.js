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
         <FormulaText dir="rtl"><strong>الملف الثامن عشر : مملكة اوداغست
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أتعرف على المقاومة من الناحية العسكرية و السياسية و الثقافية 
</strong>
<br></br>
<strong>-أتعرف على أشهر المعارك و أبطالها</strong>
</FormulaText>
                           </Card>
                           <br></br>

             
                  <img src={pic1} alt="Teacher" style={imageStyle} /> 
                  <br></br>
                  <Card >
                    
                       
                       <FormulaText dir="rtl"><strong>لقد قاومت الشعوب الموريتانية الاستعمار على الصعيد الثقافي و السياسي و العسكري، فعلى الصعيد الثقافي قاوم لغة المستعمر و لم يقبل التعامل معها رغم كل ما بذله هذا الأخير من أساليب الترغيب و الترهيب. و قد أصدر شيوخ ابمحاظر فتاوى تحرم ذلك و تعتبره ردة و كذلك نبذ المجتمع لكل من يوالي الاستعمار و اعتبار ذلك خيانة وطنية.
و قد ازداد الوعي السياسي في موريتانيا منذ منتصف القرن العشرين نتيجة لأحداث عالمية و محلية. أن تضافر هذه الأحداث مع تعسف المستعمر و نهبه لثروات البلاد دفع الشعب إلى تصعيد النضال السياسي و المطالبة الاستقلال. و هكذا ظهرت عدة أحزاب تطالب بالاستقلال نذكر منها: حزب التفاهم و الاتحاد القومي رابطة الشباب، حزب التجمع و حزب النهضة.
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

                       
 <FormulaText dir="rtl"><strong>اندلعت المقاومة العسكرية فور دخول الاستعمار البلاد حوالي 1902. و قد كبدت المستعمر خسائر بشرية تمثلت في القضاء على أكبر رموزه اكزافيه كبولاني الذي مات في معركة تجكجة سنة 1905 بقيادة سيدي بن مولاي الزين.</strong></FormulaText>
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