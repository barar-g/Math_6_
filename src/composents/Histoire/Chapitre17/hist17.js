import React, { useState } from 'react';
import QCMC2 from './QCMC1';

import pic1 from '../../Images/pic1.png';
import pic2 from '../../Images/pic2.png';


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
         <FormulaText dir="rtl"><strong>الملف السابع عشر : الإمارات في موريتانيا</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong>-أوضح مفهوم الأمارات

</strong>
<br></br>
<strong>-أتعرف على الإمارات في موريتانيا</strong>
</FormulaText>
                           </Card>
                           <br></br>

             
              
                  <br></br>
                  <Card >
                    
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
                        الإمارة نظام سياسي مأخوذ من الإسلام و هي أصغر حجما من الإمبراطورية 
                         و يرجع الفضل في تأسيسها في موربتانيا إلى قبائل بني حسان 
                        </SmallCard><SmallCard>
                        التي دخلت البلاد بعد المرابطين فأسست إمارات في مناطق من موريتانيا و قد لعب دورا بارزا في صد المستعمر.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                 <br></br>

             

<br></br>        
 <Card>

                       
 <FormulaText dir="rtl"><strong>
 <SmallCard>
    قد ظهرت في موريتانيا عدة إمارات .
يمكن أن نذكر من هذه الإمارات سبعا هي :
</SmallCard><SmallCard>
-إمارة ادوعيش تأسست في القرن 11م/5ه  
 و من أهم رجالها محمد ولد محمد شين و بكار بن اسويد أحمد 
</SmallCard><SmallCard>
-إمارة أولاد رزك في الكبله في القرن 11ه/17م من أهم رجالها اعلي ولد وناس.
</SmallCard><SmallCard>
إمارة الترارزة في الزاوية الجنوبية من الأراضي الموريتانية تأسست في القرن 17 م على يد أحمد ابن دمان. و من أهم رجالها أحمد بن دمان .
</SmallCard><SmallCard>
-إمارة البراكنة و تضم الحانب الشرقي من نهر السنغال و أجظاء من تكامت و لعصابة تأسست في القرن 17م، و من أهم رجالها هيبه 
</SmallCard><SmallCard>
-إمارة آدرار: تشمل منطقة آدرار الحالية. تأسست في 
القرن 17م  ، و من أهم رجالها عثمان بن لفظيل و أحمد بن أحمد بن عيده .
</SmallCard><SmallCard>
-إمارة مشظوف في الحوض: تأسست في القرن 13ه على يد أحمد محمود بن المختار، و من أهم رجالها أحمد بن المختار و اعل بن محمد محمود 
</SmallCard><SmallCard>
إمارة فوتا: تأسست في القرن 16م على يد سليمان بال في منطقة فوتا و من أهم رجالها سليمان فوتا و عبد القادر كان</SmallCard></strong></FormulaText>
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
