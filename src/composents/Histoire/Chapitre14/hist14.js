import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic1 from '../../Images/pic27.png';
import pic2 from '../../Images/pic28.png';


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
         <FormulaText dir="rtl"><strong>الملف الرابع عشر : المدن التاريخية في موريتانيا</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-تعرف على المدن التاريخية في موريتانيا
</strong>
<br></br>
<strong>-أعطي لمحة موجزة عن كل مدينة تاريخية</strong>
</FormulaText>
                           </Card>
                           <br></br>

             
                  <img src={pic1} alt="Teacher" style={imageStyle} /> 
                  <br></br>
                  <Card >
                    
                       
                       <FormulaText dir="rtl"><SmallCard><strong>توجد في موريتانيا عدة مدن تاريخ دية من اهمها : شنقيط ووادان، و تيشيت وولاته</strong></SmallCard></FormulaText>
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
    لقد تاسست مدينه شنقيط القديمه(آبير) في القرن الثاني الهجري وبعد قرن اندثرت وقامت على انقاضها
     شنقيط بالقرن السابع الهجريه 
     </SmallCard><SmallCard>
     وهي ما تزال حيه وهي مدينه  واحات اما مدينه الشتاء فقد اسست خلال القرن السادس
     الهجري وهي مدينه واحات.
     </SmallCard><SmallCard>
اما مدينه تيشيت فقط تاسست خلال القرن السادس الهجريه
 
وهي مدينه واحات واحدى محطات القوافل التجاريه كما كانت مدينه علم ومعرفه.
</SmallCard><SmallCard>
من المحتمل ان تكون مدينه وادان تاسست منذ القرن الاول هجري وكانت محطه رئيسيه من المحطات 
</SmallCard><SmallCard>
 ولذلك كانت مركزا للدعاة و المعلمين والمرشدين كما تأسست وادان في القرن السادس الهجري 
نظرا لدورها الاقتصاديي والعلمي
</SmallCard><SmallCard>فكانت تصدر المواشي والذهب والاخشاب للشمال
 وتزود الجنوب بالمصنوعه المعدنيه والاقمشه والتمور والقمح والشعير والكتب والملح.
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
