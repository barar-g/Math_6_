import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import pic61 from '../../Images/pic61.png';
import pic62 from '../../Images/pic62.png';
import pic63 from '../../Images/pic63.png';
import pic64 from '../../Images/pic64.png';
import pic65 from '../../Images/pic65.png';
import pic66 from '../../Images/pic66.png';
import pic67 from '../../Images/pic67.png';
import pic68 from '../../Images/pic68.png';
import pic69 from '../../Images/pic69.png';
import pic70 from '../../Images/pic70.png';
import pic71 from '../../Images/pic71.png';
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
<FormulaText dir="rtl"><strong>
     حكم الزكاة و شروطها
    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic61} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>خـص الله تعالى الأصناف الثمانيـة بالـزكاة، و هــم الفقراء و المساكين و السعاة</SmallCard><SmallCard>
    و مـن دخلـوا في
الإسلام قريبـا تألفيـا لقلوبهـم، و المجاهـدون في سـبيل الله و مـن عليهـم ديـون مشـروعة </SmallCard><SmallCard>
كمـا
تصـرف في عتـق العبيـد، كمـا تدفـع للمسـافر المحتـاج و لـو كان غنيـا ببلـده. </SmallCard></strong></FormulaText>

                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong>
    الحكمة من الزكاة
    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic62} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>زكاة الفطـر واجبـة علـى كل مسـلم قـادر علـى إخراجهـا، و يجـب أن يخرجهـا كل مسـلم عـن
كل مــن تلزمــه نفقتــه ســواء كان ولــدا أو والــدا، </SmallCard><SmallCard>و ينــدب إخراجهــا قبــل صــاة العيــد و يحــرم
تأخيرهـا عنـه، و قدرهـا صـاع،</SmallCard><SmallCard>و هـو أربعـة أمـداد بمـده صلـى الله عليـه و سـلم، و هـي زكاة بـدن
ال زكاة مـال، و تجـب مـن أغلـب قـوت أهـل البلـد. </SmallCard></strong></FormulaText>


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
    مستحقو الزكاة
    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic63} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>تجـب الـزكاة علـى كل مسـلم ملـك النصـاب ملـكا تامـا و حـال عليـه الحـول، </SmallCard><SmallCard>وهـي أحـد أركان
الإسلام الخمسـة، و مـن أنكـر وجوبهـا كفـر </SmallCard><SmallCard>و مـن منعهـا وجـب قتالـه حتـى تؤخـذ منـه..</SmallCard></strong></FormulaText>



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
    زكاة العين
</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic65} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>تجـب زكاة العيـن إذا بلـغ الذهـب و الفضـة النصـاب و حـال عليهمـا الحـول</SmallCard><SmallCard>و النصـاب في الذهـب
عشـرون دينـارا، و في الفضـة مائتـا درهـم</SmallCard><SmallCard>و الواجـب فيهمـا ربـع العشـر، و يجمـع بيـن الذهـب
والفضـة في الـزكاة. .</SmallCard></strong></FormulaText>




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
<FormulaText dir="rtl"><strong>زكاة الحرث</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic64} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard> تجب الزكاة في الحبوب و هي (20) صنفا:</SmallCard><SmallCard> 
    1
    القمح
    2
    الشعير
    3
    السلت
    يضم بعضها بعضا 4 العلس 5 الذرة 6 الدخن الأرز و لا يضم بعضها إلى بعض   </SmallCard><SmallCard>) 1 ( الحمـص ) 2 ( العـدس ) 3 ( الفـول ) 4 ( اللوبيـا ) 5 ( الترمـس ) 6 ( الجلبـان ) 7 ( البسـيلة ) و
هـذه السـبعة يضـم بعضهـا إلى بعـض</SmallCard><SmallCard> 1 ( الزيوت ) 2 ( السمسم ) 3 ( القرطم ) 4 ( حب الفجل األحمر ) لا يضم بعضها إلى بعض</SmallCard><SmallCard>د - نوعان من الثمار هما :  1 ( التمر ) 2 ( الزبيب .) لا يضم بعضها إلى بعض</SmallCard></strong></FormulaText>




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
    زكاة الإبل

    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic66} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>فريضة الصدقة التي فرضها رسول الله صلى الله عليه وسلم في الإبل هي :</SmallCard><SmallCard>من (9-5)شاة</SmallCard><SmallCard>(14-10)شاتان.</SmallCard><SmallCard>(15 - 19) 3شياه .</SmallCard>
    <SmallCard>(20 24) 4شياه.</SmallCard>
    <SmallCard>(25 35) بنت مخاض.</SmallCard>
    <SmallCard>(36 45)بنت لبون.</SmallCard>
    <SmallCard>(46 60) حقة.</SmallCard>
    <SmallCard>(61 - 75)جذعة.</SmallCard>
    <SmallCard>(61 - 75)جذعة.</SmallCard>
    <SmallCard>(91 120)حقتان .</SmallCard>
    <SmallCard>(121 129) ثالث بنات لبون أو حقتان.</SmallCard>
    <SmallCard>(130 فما فو) في كل خمسين حقة، وكل أربعين بنت لبون.</SmallCard>
    </strong></FormulaText>





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
    زكاة الغنم 

    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic67} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>تجـب الـزكاة في الغنـم إذا بلغـت أربعيـن، و فيهـا شـاة واحـدة عمرهـا سـنة أو أكثـر</SmallCard>

<SmallCard>، فـإذا بلغـت
مائــة و إحــدى و عشــرين إىل مائتيــن ففيهــا شــاتان</SmallCard>
<SmallCard>فــإذا زادت علــى مائتيــن إىل ثــاث مائــة
ففيهـا ثـاث شـياه، فـإذا زادت علـى ذلـك ففـي كل مائـة شـاة، </SmallCard>
<SmallCard>و يضـم المزكـي المعـز للضـأن و
يعدهـا معهـا.</SmallCard></strong></FormulaText>




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
<FormulaText dir="rtl"><strong> زكاة البقر</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

                  <img src={pic68} alt="Teacher" style={imageStyle} /> 


                       
<FormulaText dir="rtl"><strong>
    <SmallCard>تجـب الـزكاة في البقـر إذا بلغـت،30 </SmallCard><SmallCard>و فيهـا عجـل تبيـع إىل (40) ففيهـا مسـنة فـإذا بلغـت (60)
ففيهـا تبيعـان فـإذا بلغـت70</SmallCard><SmallCard>ففيهـا مسـنة و تبيـع إىل ) 80 ( مسـنتان إىل ) 90 ( ثالثـة أتبعـة إىل ) 100
( ففيهـا تبيعـان و مسـنة،</SmallCard><SmallCard>ثـم في كل ) 30 ( تبيـع، و في كل ) 40 ( مسـنة.</SmallCard><SmallCard> أما النبي فهو من أنزل عليه وحي إلهي ولم يؤمر بتبليغه.
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
زكاة الفطر 
 </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic69} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>ن الله تبارك و تعالى قد شرع لنا فريضة الزكاة من أجل حل مشاكل الفقر و العجز و اإلفالس و
غيرها . </SmallCard></strong></FormulaText>






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
<FormulaText dir="rtl"><strong> الصيام</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic70} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>يجــب صيــام شــهر رمضــان علــى كل مســلم إذا رأى الهلال أو ثبــت عنــده برؤيــة عدليــن أو
مســتفيضة يســتحيل تواطؤهــم علــى الكــذب أو بكمــال شــعبان ثالثيــن يومــا .</SmallCard><SmallCard>و مــن أفطــر عامــدا فعليــه الكفــارة، و هــي صيــام شــهرين متتابعيــن أو إطعــام 60 مســكينا لــكل
مسـكين مـد بمـد النبـي صلـى الله عليـه و سـلم أو تحريـر رقبـة مؤمنـة
    </SmallCard><SmallCard>و مـن جامـع زوجتـه في
نهـار رمضـان فعليـه الكفـارة أيضـا .</SmallCard></strong></FormulaText>






                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}

{section >= 10 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> الحج</strong>
</FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
                  <img src={pic71} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>الحج فرض مرة في العمر على الحر المسلم العاقل البالغ المستطيع، و أركانه أربعة، و هي :</SmallCard><SmallCard>
    الإنجيل: الكتاب الذي أنزله الله على عيسى عليه السلام.
    </SmallCard><SmallCard>الإحرام</SmallCard><SmallCard>طواف الإفاضة.
</SmallCard>
<SmallCard>الوقوف بعرفة وقتا و لو قصيرا من ليلة النحر، و هذه الأركان األربعة من ترك واحدامنها
بطل حجه. </SmallCard>
<SmallCard>أما واجبات الأركان فهي:</SmallCard>
<SmallCard>الإحرام من الميقات.</SmallCard>
<SmallCard>التلبية و لفظها : ( لبيك اللهم لبيك، لبيك ال شريك لك لبيك، إن الحمد و النعمة لك و الملك
ال شريك لك ).</SmallCard>
<SmallCard>وصل التلبية بالإحرام.</SmallCard>
<SmallCard>التجرد من المخيط.</SmallCard>
<SmallCard>المشي بين الصفا و المروة</SmallCard>
<SmallCard> صلاة ركعتين بعد الطواف.
</SmallCard>
<SmallCard>
    المشي في الطواف للقادر عليه.
</SmallCard>
<SmallCard>الوقوف بعرفة نهارا بعد الزوال. </SmallCard>
<SmallCard>أما الواجبات فأهمها : </SmallCard>
<SmallCard>النزول بمزدلفة بعد الرجوع من عرفة ليال. </SmallCard>
<SmallCard>تقديم رمي جمرة العقبة في العاشر على الحلق أو التقصير </SmallCard>
<SmallCard>تقديم الرمي على طواف الإفاضة . </SmallCard>
<SmallCard>رمي جمرة العقبة من طلوع فجر يوم النحر إىل الزوال. </SmallCard>
<SmallCard>الرجوع للمبيت بمنى بعد طواف الإفاضة الليلة الثانية، و الثالثة و الرابعة بعد يوم النحر </SmallCard>
<SmallCard>رمي الجمار في أيام التشريق الثالثة بعد يوم النحر حيث يرمي ثالث جمرات كل جمرة بسبع
حصيات، و وقته من طلوع الشمس إىل الغروب. . </SmallCard>
<SmallCard>الحلق بالنسبة للرجل و التقصير بالنسبة للمرأة.</SmallCard>
<SmallCard>و هذه الواجبات كلها تجبر بالدم .
</SmallCard>


</strong></FormulaText>







                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
                    <br></br>
                   
                </div>
            )}


{section >= 11 && (
                <div dir="rtl">
                    <QCMC1 />
                </div>
            )}

            {section < 11 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
