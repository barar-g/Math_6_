import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import pic1 from '../../Images/pic41.png';
import pic2 from '../../Images/pic40.png';
import pic42 from '../../Images/pic42.png';
import pic44 from '../../Images/pic44.png';
import pic45 from '../../Images/pic45.png';
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
        <SmallCard>
<FormulaText dir="rtl"><strong> غزوة بدر الكبرى </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic1} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>غزوة بدر الكبرى،
                             واقعة في 17 رمضان من السنة الثانية للهجرة، كانت معركة حاسمة في التاريخ الإسلامي. 
                             </SmallCard><SmallCard>
                             بدأت 
                            المعركة عندما حاول النبي محمد، صلى الله عليه وسلم، اعتراض قافلة تجارية لقريش تحت قيادة
                             أبو سفيان.
                             </SmallCard><SmallCard>
                              خرج النبي بـ313 من المهاجرين والأنصار.
                             
                              علم أبو سفيان بالمخطط فاستدعى جيش قريش 
                            الذي بلغ نحو 1000 رجل.
                            </SmallCard><SmallCard>
                             على الرغم من نجاة القافلة، وقعت المعركة، وانتهت بانتصار المسلمي
                            </SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
غزوة أحد
    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>غزوة أحد، وقعت في السابع من شوال من السنة الثالثة للهجرة، وكانت معركة مهمة في التاريخ الإسلامي. 
    </SmallCard><SmallCard>
    سببها إصرار قريش على الثأر من المسلمين بعد خسائرهم في غزوة بدر، بقيادة أبي سفيان بن حرب. 
    </SmallCard><SmallCard>
    خرج النبي محمد، صلى الله عليه وسلم، بـ700 مقاتل لمواجهة جيش قريش الذي بلغ 3000 رجل.
    </SmallCard><SmallCard>
    بعد انتصار المسلمين المبدئي واشتغالهم بجمع الغنائم، هاجمهم المشركون من الخلف، مما أدى لاستشهاد 70 من المسلمين ومقتل 22 مشركاً.
    </SmallCard></strong></FormulaText>

                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}

{section >= 2 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
غزوة الخندق (األحزاب)
        </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic44} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>تحالف يهود بني النضير وبني وائل، ودعوا قريشًا وغطفان لحرب النبي محمد، صلى الله عليه وسلم.
    </SmallCard><SmallCard>
    عندما علم النبي بهذا، أمر بحفر خندق حول المدينة بإشارة من سلمان الفارسي.
    </SmallCard><SmallCard>
    غدرت يهود بني قريظة ونقضوا عهدهم مع النبي، وتحالفوا مع الأحزاب.
    </SmallCard><SmallCard>
    اشتد الأمر على المسلمين، وحاول النبي مداراة غطفان بثمار المدينة، لكن الأنصار طلبوا منه عدم فعل ذلك ووافقهم.
    </SmallCard><SmallCard>
    بعد إسلام نعيم بن مسعود،خلق فرقة بين بني قريظة والأحزا.وأثناء ذلك، هبت ريح شديدة أثارت الرعب في قلوب الكفار، فارتحلوا مذعورين.
    </SmallCard></strong></FormulaText>


                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}
         

         {section >= 3 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
صلح الحديبية         </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic42} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>خرج النبي محمد، صلى الله عليه وسلم، في ذي القعدة معتمرًا برفقة 1400 إلى 1500 من المهاجرين والأنصار وآخرين من العرب.
    </SmallCard><SmallCard>
    لدى علم قريش بخروجه، حاولوا منعه من دخول مكة والمسجد الحرام. وصل النبي إلى الحديبية، جنوبي مكة، حيث جرت مفاوضات مع كفار قريش.
    </SmallCard><SmallCard>
    توصل النبي لاتفاق مع سهيل بن عمرو العامري، ينص على انسحابهم هذا العام وعودتهم للعمرة العام القادم بالسيوف مغمدة، وعلى صلح لمدة عشر سنوات.
    </SmallCard><SmallCard>
    واتفقوا أيضًا على أن يُرد المسلمون الذين يأتون من قريش إليهم، بينما لا يُرد المرتدون من المسلمين إلى المسلمين.
    </SmallCard></strong></FormulaText>



                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}

{section >= 4 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
غزوة بني قريظة        </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>عاد النبي محمد، صلى الله عليه وسلم، إلى المدينة بعد انسحاب الأحزاب، وتلقى أمرًا من الله عبر جبريل بالتوجه إلى بني قريظة الذين خانوا العهد.
    </SmallCard><SmallCard>
    أمر النبي بألا يُصلى العصر إلا في بني قريظة، فحاصرهم لمدة 25 يومًا.
    </SmallCard><SmallCard>
    طلب الأوس من النبي معاملة مواليهم كما فعل مع موالي الخزرج. حكم سعد بن معاذ بقتل رجال بني قريظة وتقسيم أموالهم وسبي ذراريهم ونسائهم.
    </SmallCard><SmallCard>
    أقر النبي هذا الحكم باعتباره حكم الله. نُفذ الحكم، واستشهد سعد بن معاذ لاحقًا بسبب جرح ناتج عن سهم في الخندق، وهُز عرش الرحمن لموته.
    </SmallCard></strong></FormulaText>



                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}


{section >= 5 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
غزوة خيبر  </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>بعد التصالح مع قريش، غادر النبي محمد، صلى الله عليه وسلم، المدينة في السنة السابعة للهجرة بـ1500 مقاتل متوجهًا إلى خيبر.
    </SmallCard><SmallCard>
    حاصر خيبر لفترة طويلة وفتح معظم حصونها. تم الصلح مع يهود خيبر على نصف ثمار الأراضي مقابل عملهم فيها وحق المسلمين في إجلائهم.
    </SmallCard><SmallCard>
    كرم النبي صفية بنت حيي، زعيمة اليهود، بجعلها من أمهات المؤمنين. لكن، سممته زينب بنت الحارث بشاة مشوية، مما أدى لموت شريكه بشر بن البراء.
    </SmallCard><SmallCard>
    عفا النبي عن زينب بعد اعترافها. ترك معاذ بن جبل في خيبر وأوصى باليهود خيرًا. ثم توجه إلى يهود وادي القرى وصالحهم بنفس شروط صلح خيبر.
    </SmallCard><SmallCard>
    يهود فدك طلبوا الصلح بنفس الطريقة. عاد النبي ومن معه إلى المدينة المنورة، وخضع يهود جزيرة العرب لسلطانه.
    </SmallCard></strong></FormulaText>




                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}


{section >= 6 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
غزوة بني قريظة        </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>نقضت قريش عهد الحديبية بالاعتداء على بني خزاعة، حلفاء النبي محمد، صلى الله عليه وسلم. حاول أبو سفيان تدارك الموقف لكن طلبه رفض.
    </SmallCard><SmallCard>
    في العاشر من رمضان في السنة الثامنة للهجرة، خرج النبي بـ10,000 مجاهد إلى مكة، وفتحها بدون قتال يذكر.
    </SmallCard><SmallCard>
    عفا النبي عن أهل مكة، ودخل الكثيرون في دين الإسلام أفواجًا.
    </SmallCard></strong></FormulaText>




                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}


{section >= 7 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
فتح مكة المكرمة
     </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic45} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>نقضت قريش عهد الحديبية بالاعتداء على بني خزاعة، حلفاء النبي محمد، صلى الله عليه وسلم. حاول أبو سفيان تدارك الموقف لكن طلبه رفض.
    </SmallCard><SmallCard>
    في العاشر من رمضان في السنة الثامنة للهجرة، خرج النبي بـ10,000 مجاهد إلى مكة، وفتحها بدون قتال يذكر.
    </SmallCard><SmallCard>
    عفا النبي عن أهل مكة، ودخل الكثيرون في دين الإسلام أفواجًا.
    </SmallCard></strong></FormulaText>




                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}

{section >= 8 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
غزوة حنين     </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic45} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>لما علمت هوازن بفتح مكة، جمع مالك بن عوف جيشهم، وانضمت إليهم ثقيف بقيادة كنانة بن عدي.
    </SmallCard><SmallCard>
    خرج النبي محمد، صلى الله عليه وسلم، لمواجهتهم بـ12,000 مسلم بعد تعيين عتاب بن أسيد على مكة.
    </SmallCard><SmallCard>
    في وادي حنين، كمنت هوازن للمسلمين وهاجمتهم، مما أدى لانهزام أغلب المسلمين. ثبت النبي وبعض الصحابة.
    </SmallCard><SmallCard>
    نادى العباس بأمر النبي أصحاب السمرة، فاستجابوا وقاتلوا. رمى النبي بحصيات نحو الكفار ونادى بالنصر.
    </SmallCard><SmallCard>
    وبإذن الله، نصر الله المسلمين وغنموا أموال وذراري هوازن. لاحقًا، رد النبي الذراري إلى هوازن بعد أن جاؤوا خائفين مستنجدين.
    </SmallCard></strong></FormulaText>





                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}

{section >= 9 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
الخلفاء الراشدون </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic45} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>لما علمت هوازن بفتح مكة، جمع مالك بن عوف جيشهم، وانضمت إليهم ثقيف بقيادة كنانة بن عدي.
    </SmallCard><SmallCard>
    خرج النبي محمد، صلى الله عليه وسلم، لمواجهتهم بـ12,000 مسلم بعد تعيين عتاب بن أسيد على مكة.
    </SmallCard><SmallCard>
    في وادي حنين، كمنت هوازن للمسلمين وهاجمتهم، مما أدى لانهزام أغلب المسلمين. ثبت النبي وبعض الصحابة.
    </SmallCard><SmallCard>
    نادى العباس بأمر النبي أصحاب السمرة، فاستجابوا وقاتلوا. رمى النبي بحصيات نحو الكفار ونادى بالنصر.
    </SmallCard><SmallCard>
    وبإذن الله، نصر الله المسلمين وغنموا أموال وذراري هوازن. لاحقًا، رد النبي الذراري إلى هوازن بعد أن جاؤوا خائفين مستنجدين.
    </SmallCard></strong></FormulaText>





                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}

{section >= 10 && (
                <div dir="rtl">
                    <QCMC1 />
                </div>
            )}

            {section < 10 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
