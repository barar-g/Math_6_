import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import pic1 from '../../Images/Arabe1.png';
import pic2 from '../../Images/Arabe2.png';
import pic3 from '../../Images/Arabe3.png';
import pic4 from '../../Images/Arabe4.png';
import pic5 from '../../Images/Arabe5.png';
import pic6 from '../../Images/Arabe6.png';
import pic7 from '../../Images/Arabe7.png';
import pic8 from '../../Images/Arabe8.png';
import pic9 from '../../Images/Arabe9.png';
import pic10 from '../../Images/Arabe10.png';
import pic11 from '../../Images/Arabe11.png';
import pic12 from '../../Images/Arabe12.png';


import Audio from "./Audio1" ;
import Quiz from "../../home copy/QuizTest"
import Quiz1 from "../../home copy/Quiztest1"
import Quiz2 from "../../home copy/Quiztest2"
import Quiz3 from "../../home copy/Quiztest3"
import Quiz4 from "../../home copy/Quiztest4"
import Quiz5 from "../../home copy/Quiztest5"
import Quiz6 from "../../home copy/Quiztest6"
import Quiz7 from "../../home copy/Quiztest7"
import Quiz8 from "../../home copy/Quiztest8"
import Quiz9 from "../../home copy/Quiztest9"
import Quiz10 from "../../home copy/Quiztest10"
import Quiz11 from "../../home copy/Quiztest11"


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
<FormulaText dir="rtl"><strong>المبتدأ و الخبر</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic1} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>
العلم نور - أركان الإسلام خمسة -  
الصحة نعمة عظيمة 
<br></br>




                             </SmallCard><SmallCard>
المبتدأ : اسم مرفوع متحدث عنه تبدأ بخ الجملة الاسمية، و                              </SmallCard><SmallCard>الخبر : اسم مرفوع يخبر عن المبتدأ و يكون معه جملة فعلية.
</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz/>
                           </Card>
                           <br></br>

            {section >= 1 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> الظرف</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>عاد المسافر ليلا 
جلس الراعي تحت الشجرة 
اصطف التلاميذ أمام القسم  </SmallCard><SmallCard>ينقسم الظرف إلى قسمين و هما : 
 </SmallCard><SmallCard>-ظرف الزمان : و هو اسم منصوب، يدل على زمن وقوع الفعل.
 </SmallCard><SmallCard>-ظرف المكان : و هو اسم منصوب يدل على مكان وقوع الفعل. 
</SmallCard></strong></FormulaText>

                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz1/>
                           </Card>
                           <br></br>
                   
                </div>
            )}

{section >= 2 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> كان و أخواتها :
</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic3} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>كان الامتحان سهلا - صار الهلال بدرا 
أصبح الجو معتدلا</SmallCard><SmallCard>القاعدة تدخل كان و أخواتها على الجملة الأسمية فترفع المبتدأ على أنه اسم لها و تنصب الخبر على أنه خبر لها غدرت يهود بني قريظة ونقضوا عهدهم مع النبي، وتحالفوا مع الأحزاب.
    </SmallCard><SmallCard>و من الأفعال الناسخة التي تعمل عمل كان : أصبح، أمسى، بات، أضحى ، </SmallCard></strong></FormulaText>


                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz2/>
                           </Card>
                           <br></br>
                   
                </div>
            )}
         

         {section >= 3 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
العطف      </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic4} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>الخلفاء الراشدون هم أبو بكر و عمر فعثمان ثم علي </SmallCard>
    <SmallCard>العطف هو الربط بين شيئين في الكلام بأداة تسمى حرف العطف تتوسط بين العطف و المعطوف عليه </SmallCard>
    <SmallCard>و من حروف العطف : الواو - الفاء - ثم - بل - حتى</SmallCard></strong></FormulaText>



                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz3/>
                           </Card>
                           <br></br>
                   
                </div>
            )}

{section >= 4 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> البدل      </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>
                         
             
<img src={pic5} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>حضرت التلميذة مريم - كرم المدير الولد خالدا</SmallCard>
    <SmallCard>الدبل اسم تابع يمهد له بذمر اسم قبله غير مقصود لذاته يسمى المبدل منه 
</SmallCard>
<SmallCard> أنواع البدل هي : بدل البعض من الكل، البدل المطابق بدل الاشتمال </SmallCard>
</strong></FormulaText>



                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz4/>
                           </Card>
                           <br></br>
                   
                </div>
            )}


{section >= 5 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong>ظن و اخواتها</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic6} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>ظننت الجو صحوا- حسبت الجود خير تجارة</SmallCard>
    <SmallCard>ظن و أخواتها أفهال متعدية تدخل على المبتدأ و الخبر فتنصبهما مفعولين لها فيصبح المبتدأ مفعولا أول و الخبر مفعولا ثانيا</SmallCard>
    <SmallCard>من أخوات ظن حسب زعم خال جعل </SmallCard>
  </strong></FormulaText>




                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz5/>
                           </Card>
                           <br></br>
                   
                </div>
            )}


{section >= 6 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong>لمفعول لأجله   </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic7} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>يصوم المسلم طعاة لربه يتصدق المحسن طلبا للثواب</SmallCard>
    <SmallCard>المفعول لأجله اسم منصوب يأتي لبيان سبب وقوع الفعل و علامته أن يصح جوابا للسؤال : لم فعلت؟</SmallCard>

    </strong></FormulaText>




                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz6/>
                           </Card>
                           <br></br>
                   
                </div>
            )}


{section >= 7 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> لفاعل</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic8} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>دق الولد الجرس 
قرأت مريم الدرس </SmallCard>
<SmallCard>الفعل اسم مرفوع يدل على الدي قام بالفعل و يرفع الفاعل بالواو اذا كان جمع مذكر سالم أو كان من الأسماء الخمسة و يرفع بالألف اذا كان مثنى</SmallCard>
 </strong></FormulaText>




                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz7/>
                           </Card>
                           <br></br>
                   
                </div>
            )}

{section >= 8 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong>حروف الجر</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic9} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>في المدينة مساجد كثيرة 
لكل شيء إذا ما تم نقصان </SmallCard>
<SmallCard>من حروف الجر: على إلى حتى عن الباء </SmallCard>
 
    </strong></FormulaText>





                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz8/>
                           </Card>
                           <br></br>
                   
                </div>
            )}

{section >= 9 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> الحال</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic10} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>دخل الولد مسرعا 
خرج التلميذ من قاعة الامتحان ننتصرا </SmallCard><SmallCard>لحال سام نكرة منصوب يدل على هيئة صاحبه وقت الفعل و يكون صاحب الحال في الغالب نكرة </SmallCard>
</strong></FormulaText>





                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz9/>
                           </Card>
                           <br></br>
                   
                </div>
            )}













{section >= 10 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> النعت الحقيقي</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic11} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>حمد ولد مجتهد 
كتبت العنوان بالقلم الأحمر</SmallCard>
<SmallCard>لنعت الحقيقي لفظ يدل على صفة في نفس موصوفه و هو تابع لموصوفه في الأعراب و الإفراد و التثنية و الجمع و التذكير و التأنيث و التعريف و التنكير</SmallCard>
</strong></FormulaText>





                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz10/>
                           </Card>
                           <br></br>
                   
                </div>
            )}










{section >= 11 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> التوكيد</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic12} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>لوفاء الوفاء خصلة حميدة - لمثابرة سر النجاح</SmallCard>
    <SmallCard>ينقسم التوكيد إلى قسمين و هما :</SmallCard>
    <SmallCard>التوكيد اللفظي و يكون بإعادة اللفظ مثل العلم العلم نور.</SmallCard>

    <SmallCard>التوكيد المعنوي و يكون بالألفاظ التالية : نفس عين جميع كل كلانا كلنا عامة</SmallCard>
    
</strong></FormulaText>





                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                           <br></br>
                           <Card >
                            <Quiz11/>
                           </Card>
                           <br></br>
                   
                </div>
            )}


            {section < 11 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
