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
         <FormulaText dir="rtl"><strong>الملف الخامس عشر : مملكة اوداغست
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أتعرف على دخول موريتانيا في نشر الإسلام

</strong>
<br></br>
<strong>-أتعرف على دور المرابطين و الطرق الصوفية في نشره</strong>
</FormulaText>
                           </Card>
                           <br></br>

             
                  <img src={pic1} alt="Teacher" style={imageStyle} /> 
                  <br></br>
                  <Card >
                    
                       
                       <FormulaText dir="rtl"><strong>دخل الأسلام إلى موريتانيا عن طريق التجار ز الفاتحين العرب الذين وصلو هذه البلاد من الشرق العربي حاملين الرسالو المحمدية و سرعان ما توطدت أركانه في العهد المرابطي فأصبحت البلاد حلقة مهمة في توصيل الإسلام إلى البلاد الإفريقية و قد حمل الموريتانيون على عواتقهم نشر الإسلام في الربوع الأفريقية فنشرو العقيدة و درسو القرآن الكربم و مبادئ الإسلام السمحة و أخلاقه الرفيعة.</strong></FormulaText>
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

                       
 <FormulaText dir="rtl"><strong>لقد اتجه المرابطون إلى القبائل السودانية الوثنية و أدخلوها ملة الإسلام كما أعادو إلى الإسلام قبائل أخرى كانت قد ارتدت عنه
تواصل المد الإسلامي من بعدهم على يد حركة الأمامية في منطق فواتاتورز بزعامة سليمان بال ثم الحج عمر تال في نفس المنطقة كما لعبت الطرق الصوفية هي الأخرى دورا كبيرا في هذا المجال.</strong></FormulaText>
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
