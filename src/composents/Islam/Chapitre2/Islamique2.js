import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import pic1 from '../../Images/pic52.png';
import pic2 from '../../Images/pic53.png';
import pic55 from '../../Images/pic55.png';
import pic44 from '../../Images/pic54.png';
import pic60 from '../../Images/pic60.png';
import pic56 from '../../Images/pic56.png';
import pic57 from '../../Images/pic57.png';
import pic58 from '../../Images/pic58.png';
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
                       
<FormulaText dir="rtl">
    <strong>
        <SmallCard>وصف الله تعالى في هذه الآيات الكريمات المطففين وصفا واضحا،
        فقرر أنهم الذين إذا اكتالوا على الناس وأخذوا منهم الحق اسـتوفوا الكيـل والـوزن،</SmallCard>
        <SmallCard>وإذا كالوا للناس أو وزنوا لهم ينقصون الكيل والوزن، وقد توعدهم الله بشدة العذاب في الآخرة</SmallCard>
        <SmallCard>وأنكر عليهم صنيعهم، وتعجب من جرأتهم، وكأنهم لا يستيقنون بأن الله تعالى سوف يبعثهم،</SmallCard>
        <SmallCard>ولا يخافون من القيام بين يديه، ولا من حسابهم على تطفيفهم،</SmallCard>
        <SmallCard>وعلى ما قدموا من صغير وكبير يبعثهم في يوم القيامة، ذلك اليوم الذي يقوم الناس فيه من القبور ليجزوا على أعمالهم.</SmallCard>
        <SmallCard>عن أبي عمرو سفيان بن عبد الله الثقفي، رضي الله عنه قال: قلت: يا رسول الله، قل لي في الإسلام قولا لا أسأل عنه أحدا غيرك،</SmallCard>
        <SmallCard>قال: "قل آمنت بالله، ثم استقم". رواه مسلم في صحيحه.</SmallCard>
    </strong>
</FormulaText>


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
    <SmallCard>النفاق هو أن يظهر الإنسان خلاف ما يخفي في نفسه، ليخدع الناس بإظهار الصلاح والإسلام.</SmallCard>
    <SmallCard>وقد جاء التحذير شديدًا من النفاق عامة، والنفاق الأكبر: أن يتظاهر الإنسان بالدين وهو يكذب.</SmallCard>
    <SmallCard>فيذكر الله مع الناس، أما المنافق الذي يظهر كذبه ونفاقه بعد تحقيق مصالحه فيستخدم كلمات من المدح المبالغ فيه للآخرين.</SmallCard>
</strong></FormulaText>


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
    <SmallCard>إن الله تعالى قد مدح أهل الاستغفار وأثنى عليهم. الاستغفار هو طلب الستر والوقاية من شر الذنب، ويجلب الرزق والبركة.</SmallCard>
    <SmallCard>روي عن سيدنا عمر بن الخطاب - رضي الله عنه - أنه صعد المنبر ليستسقي فلم يزد على الاستغفار شيئًا.</SmallCard>
    <SmallCard>"من أكثر من الاستغفار جعل الله له من كل هم فرجًا، ومن كل ضيق مخرجًا، ورزقه من حيث لا يحتسب".</SmallCard>
</strong></FormulaText>



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

             
<img src={pic44} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>
        إذا ذاق الإنسان حلاوة الإيمان، وتمكنت جذوره في قلبه،    </SmallCard><SmallCard>

 استطاع أن يثبت على الحق، ويواصل المسير، حتى يلقى ربه وهو راضٍ عنه. ثم إن ذلك الإيمان يثمر له العمل الصالح، فلا إيمان بلا عمل.</SmallCard>
    <SmallCard>المسلم يوحد الله ويخصه بالعبادة، ويشهد للرسول صلى الله عليه وسلم بالرسالة، ويؤمن به، </SmallCard><SmallCard> ثم ينقاد لطاعة الله ويستقيم عليها، بأداء فرائض الله وترك محارمه.</SmallCard>
</strong></FormulaText>



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
    <SmallCard>إن للزنا أضرار كبيرة، سواء على الفرد أو على المجتمع. فهو سبب لغضب الله على فاعله، وعدم إجابة دعائه، وضياع إيمانه.</SmallCard>
    <SmallCard>كما أنه سبب للفساد في الأرض وضياع الأنساب.</SmallCard>
    <SmallCard>ويكون زنا العين بالنظر إلى الحرام وزنا الأذن بالاستماع إلى الحرام وكل ما يدعو إلى الفجور.</SmallCard>
    <SmallCard>والزنا سبب مباشر في انتشار الأمراض الخطيرة التي تفتك بالأبدان، وتنتقل بالوراثة من الآباء إلى الأبناء.</SmallCard>
    <SmallCard>وحد الزنا الجلد للبكر ذكرا كان أو أنثى، أما بالنسبة للمحصن وهو المتزوج أو الذي سبق له الزواج، فعقوبته الرجم حتى الموت ذكرا كان أو أنثى، وقد ثبت ذلك بالأحاديث الصحيحة.</SmallCard>
</strong></FormulaText>




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

             
<img src={pic44} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>إذا رغب المؤمن في استجابة الدعاء؛ فعليه أن يحرص على إخلاص الله في دعائه، والخضوع له، </SmallCard><SmallCard>وإحضار القلب بين يدي الله والحذر من المعاصي.</SmallCard>
    <SmallCard>وفي حالة صدق نية الداعي وصفاء روحه فإنه سوف يرى بشارات الاستجابة فعليه بالإيمان واليقين والتسليم.</SmallCard>
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
اليقين وحسن الظن بالله     </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic55} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>على المسلم الاستعانة بالله والتشبث بدينه في السراء والضراء، وقصة الكهف تتحدث عن فتية قرروا اعتزال قومهم.</SmallCard>
    <SmallCard>فخرجوا من المدينة متجهين إلى الجبل ليأووا إلى كهف وطلبوا من الله عز وجل أن ينشر عليهم من رحمته.</SmallCard>
    <SmallCard>وناموا نومتهم الطويلة حيث بقوا على هذه الحالة ثلاثمائة وتسع سنوات.</SmallCard>
</strong></FormulaText>





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

             
<img src={pic56} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>أتبع الله سبحانه وتعالى الأمر بوحدانيته، بالأمر بالإحسان إلى الوالدين. 
    </SmallCard><SmallCard>
    و يجب أن يكون إحسانًا كاملًا لا يشوبه سوء أو مكروه، بعد النهي عن الكلام الذي يدل على الضجر والقلق من فعلهما.</SmallCard>
    <SmallCard>وأمر أن لا نتأفف من قولهما أو فعلهما، وأن نقول لهما قولا كريمًا حسنًا، يقتضيه حسن الأدب معهما، والاحترام والعطف عليهما.</SmallCard>
    <SmallCard>ومن البر بهما المحافظة على الصلاة والدعاء لهما، وكتمان سرهما، وبرور من يحبان وصلته، </SmallCard><SmallCard> والاستئذان منهما، والمحافظة على الأثاث والمقتنيات التي تكلفهم المصاريف، وإسعادهما بهدايا مهما كانت بسيطة.</SmallCard>
</strong></FormulaText>





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
حق الجار 
   </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic57} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>لجوار يقتضي حقًا زيادة على ما تقتضيه أخوة الإسلام عناية؛ فيستحق الجار المسلم ما يستحقه كل مسلم، والجار ثلاثة أنواع:</SmallCard><SmallCard> جار مسلم وذو قربى وجار مسلم وليس له قربى، وجار كافر.</SmallCard>
    <SmallCard>فالجار الكافر له حق واحد، والجار المسلم له حق الإسلام والجوار.</SmallCard>
    <SmallCard>والجار القريب له حق الجوار والإسلام والقرابة، فخير الأصحاب عند الله خيرهم لصاحبه، وخير الجيران عند الله خيرهم لجاره بجميع أنواعه.</SmallCard>
</strong></FormulaText>





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
التعاون و الاتحاد
</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic58} alt="Teacher" style={imageStyle} /> 
                       
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

             
<img src={pic60} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>لا يؤمن المسلم إيمانا كاملا حتى يحب ما جاء به الرسول -صلى الله عليه وسلم، ويعمل به،
ويكره ما نهى عنه ويجتنبه.</SmallCard><SmallCard>

    لا يجوز له أن يعمل عملا حتى يعرضه على كتاب الله وسنة رسوله -صلى الله عليه وسلم-</SmallCard><SmallCard>
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
