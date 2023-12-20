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
<FormulaText dir="rtl"><strong>التطفيف</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic1} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong>
                        <SmallCard>وصـف الله تعالى في هـذه الأيات الكريمـات المطففيـن وصفـا واضحـا، فقـرر أنهـم الذيـن
إذا اكتالـوا علـى النـاس وأخـذوا منهـم الحـق اسـتوفوا الكيـل والـوزن، وإذا كالـوا للنـاس أو
وزنـوا لهـم ينقصـون الكيـل والـوزن، وقـد توعدهـم اهلل بشـدة العــذاب يف اآلخـرة</SmallCard><SmallCard>
                              وأنكـر
عليهــم صنيعهــم، وتعجــب مــن جرأتهــم، وكأنهــم ال يســتيقنون بــأن الله تعــاىل ســوف
يبعثهــم، وال يخافــون مـن القيـام بيـن يديـه، وال مـن حسـابهم علـى تطفيفهـم،</SmallCard><SmallCard>وعلـى مـا
قدمـوا مـن صغيـر وكبيـر يبعثهـم يف يـوم القيامـة، ذلـك اليـوم الـذي يقـوم النـاس فيـه مـن
القبـور ليجـزوا علـى أعمالهـم. </SmallCard><SmallCard>عنأبــي عمــرو ســفيان بــن عبــد اهلل الثقفــي، رضــي اهلل عنــه قــال: قلــت: يــا رســول اهلل، قــل يل
يف اإلسلـام قوـ ًال ال أس أل عنه أح دا غيرك،قـال :»قـل آمنـت بـاهلل ، ثـم اسـتقم« رواهمسـلم يف
صحيحـه </SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong>النفاق
    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>النفاق هــو أن يظهــر اإلنســان خــاف مــا يخفــي يف نفســه ،ليخــدع النــاس بإظهــار الصــاح
واإلسـام،</SmallCard><SmallCard>
وقـد جـاء التحذيـر شـديدا مـن النفـاق عامـة، والنفـاق األكبـر:
أن يتظاهـر اإلنسـان بالديـن وهـو يكـذب</SmallCard><SmallCard>فيذكـر اهلل مـع النـاس، أمـا المنافـق الـذي يظهـر كذبـه
ً ونفاقـه بعـد تحقيـق مصالحـه فيسـتخدم كلمـات مـن المـدح المبالـغ فيـه لآلخريـن</SmallCard></strong></FormulaText>

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
<FormulaText dir="rtl"><strong> عظم الاستغفار
        </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic44} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>أ ّن الله تعـالى قـد مـدح أهـل الاستغفار وأثنـى عليهـم </SmallCard><SmallCard>الاستغفار طلـب السـتر والوقايـة مـن 
    شــر الذنــب، و الاستغفار يجلب الــرزق والبركــة</SmallCard><SmallCard> 
    روي عــن ســيدناعمــر بــن لخطـاب - رضـي الله عنـه - أنـه صعـد المنبـر ليستسـقي فلـم  يـزد علـى الاسـتغفار شـيئا</SmallCard><SmallCard>(مــن أكثــر
ِمـن االسـتغفار جعـل الله لـه مـن كل هـم فرجـا، ومـن كل ضيـق مخرجـا، ورزقـه مـن حيـث لا
يحتســب).</SmallCard></strong></FormulaText>


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
الاستقامة        </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic42} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>إذا ذاق الإنسان حـلاوة اإليمــان، وتمكنــت جــذوره في قلبــه، اســتطاع أن يثبــت عليه
 وهـو راض عنـه، ثـم إن ذلـك الإيمان يثمـر لـه
الحـق، ويواصـل المسـير، حتـى يلقـى رب
العمـل الصالـح، فـلا إيمـان بـلا عمـل.</SmallCard><SmallCard>المسـلم يوحـد الله ويخصـه بالعبـادة، ويشـهد للرسـول صلى الله عليه وسلم بالرسـالة، ويؤمـن بـه، ثـم ينقـاد
لطاعـة الله ويسـتقيم عليهـا، بـأداء فرائـض الله وتـرك محارمـه .</SmallCard></strong></FormulaText>



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
<FormulaText dir="rtl"><strong>الزنا       </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard> إن للزنـا أضـرار كبيـرة، سـواء علـى الفـرد أو علـى المجتمـع، فهـو سـبب لغضـب الله علـى فاعلــه، وعــدم إجابــة دعائــه، وضيــاع إيمانــه،  كمــا انه  ســبب للفســاد في الأرض وضيــاع لألنســاب</SmallCard><SmallCard>ويكــون زنــا العيــن  بالنظر إلى الحرام و زنا الأذن االســتماع إلى الحــرام وكل مــا يدعــو إلى الفجــور </SmallCard><SmallCard>والزنـا
         سبب مباشـر في انتشـار الأمـراض  الخطيـرة لتـي تفتـك باألبـدان، وتنتقـل بالوراثـة مـن الأباء إلى الأبناء.</SmallCard><SmallCard>وحـد الزنـا الجلـد للبكـر ذكـرا كان أو أنثـى، أمـا بالنسـبة للمحصـن وهـو المتـزوج أو الـذي
سـبق لـه الـزواج، فعقوبتـه الرجـم حتـى الموت ذكـرا كان أو أنثـى، وقد ثبت ذلـك باألحاديث
الصحيحة.
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
<FormulaText dir="rtl"><strong>الدعاء المستجاب </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>إذا رغــب المؤمــن يف اســتجابة الدعــاء؛ فعليــه أن يحــرص علــى اإلخــاص الله في دعائــه،
والخضـوع لـه، وإحضـار القلـب بيـن يـدي الله والحـذر مـن المعاصـي،</SmallCard><SmallCard>وفي
حالـة صـدق نيـة الداعـي وصفـاء روحـه فإنـه سـوف يـرى بشـارات االسـتجابة فعليـه بالإيمان
واليقيـن والتسـليم</SmallCard></strong></FormulaText>




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
اليقين وحسن الظن بالله     </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>علـى المسـلم الاستعانة بالله والتشـبث بدينـه في السـراء و الضـراء وقصـة الكهـف تتحـدث
عـن فتيـة قـرروا اعتـزال قومهـم</SmallCard><SmallCard>فخرجـوا مـن المدينـة متجهيـن الى الجبـل ليـأووا الى كهـف و
طلبـوا مـن الله عـز وجـل أن ينشـر عليهـم مـن رحمتـه و نامـوا نومتهـم الطويلـة حيـث بقـوا علـى
هـذه الحالـة ثالثمائـة و تسـع سـنوات.</SmallCard></strong></FormulaText>




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
بر الوالدين
     </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic45} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>أتبـع الله سـبحانه وتعالى الأمر بوحدانيتـه، بالامر بالإحسان إلى الوالديـن. إحسـانا
كاملا ال يشـوبه سـوء أو مكـروه بعـد النهـي عـن الكلام الـذي يـدل علـى الضجـر
والقلـق مـن فعلهمـا.</SmallCard><SmallCard>وأمـر أن ال نتأفـف مـن قولهمـا أو فعلهمـا وأن نقـول لهمـا قولا
كريمـا حسـنا، يقتضيـه حسـن الادب معهمـا، واالحتـرام والعطـف عليهمـا.</SmallCard><SmallCard>•ومـن البـر بهمـا المحافظـة علـى الصلاة والدعـاء لهمـا وكتمـان سـرهما وبـرور مـن
يحبــان وصلتــه والاستئذان منهمــا والمحافظــة علــى الأثاث والمقتنيــات التــي
تكلفهـم المصاريـف وإسـعادهما بهدايـا مهمـا كانـت بسـيطة</SmallCard></strong></FormulaText>




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
حق الجار    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic45} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>لجـوار يقتضـي حقـا زيـادة علـى مـا تقتضيـه أخـوة اإلسـام عنايـة؛ فيسـتحق  الجـار المسـلم مـا  يسـتحقه كل مسـلم،  ُربـى،والجـار ثالثـة أنـواع: جـار مسـلم وذو  قربى وجـار مسـلم وليـس لـه قربـى، وجـار كافـر
</SmallCard><SmallCard>فالجـار الكافـر لـه حـق واحـد، والجـار المسـلم لـه حـق الإسلام والجـوار</SmallCard><SmallCard>
    </SmallCard><SmallCard>القريـب
لـه حـق الجـوار والاسلام والقرابـة، فخيـر األصحـاب عنـد الله خيرهـم لصاحبـه، وخيـر الجيران
عنـد الله خيرهـم لجـاره بجميـع أنواعـه. </SmallCard></strong></FormulaText>





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
التعاون و الاتحاد</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic45} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>
         علـى المسـلم أن يسـعى دائما في التعاون و على فعل الخيرات و ترك المنكرات و حتى يحقق البر و التقوى في كل قول و عمل و اعتقاد</SmallCard><SmallCard>و أن يسعى دائما في ترك التعاون على الإثم و العدوان في كل قول و عمل و اعتقاد</SmallCard><SmallCard>
    في وادي حنين، كمنت هوازن للمسلمين وهاجمتهم، مما أدى لانهزام أغلب المسلمين. ثبت النبي وبعض الصحابة.
    </SmallCard><SmallCard>ومـن البـر التعـاون علـى نظافـة المـكان، و مسـاعدة الفقـراء والمحتاجيـن، و تقديـم خدمـات
اجتماعيــة وتطوعيــة للمحتاجيــن.</SmallCard><SmallCard>ومـن أهـم المشـكالت التـي تحتـاج التعـاون للقضـاء عليهـا الفقـر والجهـل والمـرض، ويتأكـد
التعــاون يف أوقــات انتشــار األوبئــة .</SmallCard></strong></FormulaText>





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
<FormulaText dir="rtl"><strong> 
اتباع أوامر الشرع
</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic45} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>ال يؤمن المسلم إيمانا كامال حتى يحب ما جاء به الرسول -صلى اهلل عليه وسلم، ويعمل به،
ويكره ما نهى عنه ويجتنبه.</SmallCard><SmallCard>اليجوز له أن يعمل عمال حتى يعرضه على كتاب اهلل وسنة رسوله -صلى اهلل عليه وسلم-
فإن وافق الكتاب والسنة فعله، وإن كان فيهما ما ينهى عنه اجتنبه وأعرض عنه </SmallCard></strong></FormulaText>





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
