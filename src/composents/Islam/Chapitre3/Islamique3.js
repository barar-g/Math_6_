import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import pic1 from '../../Images/pic47.png';
import pic2 from '../../Images/pic48.png';
import pic50 from '../../Images/pic50.png';
import pic49 from '../../Images/pic49.png';
import pic51 from '../../Images/pic51.png';
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
<FormulaText dir="rtl"><strong> الأرزاق</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic1} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>يخبرنا الله تعالى في القرآن الكريم أنه مالك كل شيء، بيده رزق كل حي. كل أمر مقدر فيه خير للعباد.
    </SmallCard><SmallCard>
    وأن كل قضاء وقع فقد كتب عليهم. فعندما يعي المسلم هذا ويوقن به، يطمئن قلبه وتسكن نفسه، ويرضى تمام الرضا بما قدره الله عليه.
    </SmallCard><SmallCard>
    الأجل معلوم، والرزق مقسوم، وما قضى الله واقع محتوم الإيمان.
    </SmallCard><SmallCard>
    ما علينا سوى السعي في عبادة ومرضات من يرزق ويملك أرزاق العباد، وعدم الانشغال بما هو مضمون. ثم الإيمان والتسليم لله سبحانه وتعالى، والتوكل عليه.
    </SmallCard></strong></FormulaText>

                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
                 <SmallCard>
<FormulaText dir="rtl"><strong> 
مالك الملك    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>يخبرنا الله تعالى في آية القرآن الكريم أنه مالك الملك، يُعطي الملك لمن يشاء وينزع الملك ممن يشاء.
    </SmallCard><SmallCard>
         ويُعز من يشاء ويُذل من يشاء. بيده الخير وهو على كل شيء قدير.
    
    يذكرنا هذا بأن كل ما يحدث في الكون، من رزق ومقدرات، هو بأمر الله وحكمته. 
    </SmallCard><SmallCard>
    وعلى المؤمن أن يطمئن قلبه ويسلم أمره لله، مؤمنًا بأن كل ما قضاه الله وقع محتومًا.
    </SmallCard><SmallCard>
    الإيمان بهذه الحقيقة يجعل الإنسان مطمئنًا، راضيًا بما قسمه الله له، شاكرًا لنعمه، ومتوكلًا عليه في جميع أموره.
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
دلائل قدرة الله
        </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>من دلائل قدرة الله تعالى أنه يخرج الحي من الميت، كإخراج الزرع من الحبة التي لا حياة فيها.
    </SmallCard><SmallCard>
    كما يخرج الميت من الحي، مثل إخراج البيض من الدجاج. هذا يظهر كيف يتحكم الله في الحياة والموت، ويعطي الرزق من حيث لا نحتسب.
    </SmallCard><SmallCard>
    يبرز هذا الأمر قدرة الله على تنويع الخلق وتحويل الأحوال، من الحي إلى الميت والعكس، مظهرًا قدرته العظيمة في الكون.
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
التوكل على  الله 
 </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic49} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>لله تعالى أسماء كثيرة، بعضها نزل في آيات القرآن الكريم، وبعضها ذكره الرسل عليهم السلام. تعبر هذه الأسماء عن كمال صفات الله سبحانه وتعالى.
    </SmallCard><SmallCard>
    الأسماء تدل على كمال صفات الله عز وجل، وتبرز أسمائه الحسنى جوانب مختلفة من كمال إلهيته وصفاته العظيمة.
    </SmallCard><SmallCard>
    ليست كل الأسماء تدل على ذات الله عز وجل، ولذلك تعتبر الصفات أشمل من الأسماء الحسنى. يمكن اعتبار جميع أسماء الحسنى من صفات الله تعالى، لكن العكس غير جائز.
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
الصفات الواجبة في حقه تعالى    </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic49} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>الصفات الواجبة في حق الله عز وجل هي أساس الإيمان في قلب المسلم وجوهر العقيدة الإسلامية.
    </SmallCard><SmallCard>
         يجب الإيمان بوجود الله عز وجل منذ الأزل وللأبد، وجودًا لا يقبل العدم.
    </SmallCard><SmallCard>
    ومن الصفات التي تنفي عن الله ما لا يليق به وتنزهه: القدم والبقاء والغنى المطلق ومخالفة الحوادث والوحدانية.
    </SmallCard><SmallCard>
    وصفات المعاني مثل القدرة والإرادة والعلم والحياة والسمع والبصر والكلام.
    </SmallCard><SmallCard>
    ومن الصفات المعنوية أنه قادر، عالم، حي، سميع، بصير، متكلم.
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
الإسلام عقيدة 
</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic50} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>يستحيل في حق الله تعالى أضداد الصفات الواجبة. فصفة الوجود ضدها العدم، والوحدانية ضدها التعدد، والغنى ضده الفقر.
    </SmallCard><SmallCard>
    كما أن القدم ضده الحدوث، والبقاء ضده الفناء، والمخالفة للحوادث ضدها المماثلة. والحياة ضدها الموت، والعلم ضده الجهل.
    </SmallCard><SmallCard>
    وإرادة الله لا تعاكسها الإكراه أو عدم حصول الإرادة، والقدرة ضدها العجز، والتكلم ضده البكم، والسمع ضده الصمم، والبصر ضده العمى.
    </SmallCard><SmallCard>
    الله سبحانه وتعالى لا تعترضه الحوادث والآفات، وهو مدبر هذا الكون ومحدث هذه الأمور.
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
صفات الرسل     </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic2} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>صفات الرسل والأنبياء الواجبة في حقهم هي: الصدق، والأمانة، والفطانة، والتبليغ.
    </SmallCard><SmallCard>
    الصفات المستحيلة في حقهم هي أضداد الواجبة، وتشمل: الكذب، والخيانة، والبلادة، والكتمان.
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
إلإيمان بالرسل     </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

                  <img src={pic50} alt="Teacher" style={imageStyle} /> 


                       
<FormulaText dir="rtl"><strong>
    <SmallCard>الإيمان بالرسل هو الركن الرابع من أركان الإيمان.
    </SmallCard><SmallCard> أرسل الله تعالى الرسل والأنبياء في أزمنة مختلفة وأماكن متعددة لدعوة الناس إلى عبادة الله وحده، وكانت رسالتهم هي كلمة التوحيد.
    </SmallCard><SmallCard>
    عدد الرسل والأنبياء الحقيقي معلوم لله عز وجل وحده، وقد ذُكر في القرآن الكريم خمسة وعشرون رسولًا ونبيًا فقط.
    </SmallCard><SmallCard>
    الفرق بين الأنبياء والرسل: الرسول هو من جاءه الوحي من السماء وأمره الله بتبليغه إلى الناس مثل سيدنا موسى عليه السلام.
    </SmallCard><SmallCard> أما النبي فهو من أنزل عليه وحي إلهي ولم يؤمر بتبليغه.
    </SmallCard><SmallCard>
    علينا كمسلمين الالتزام بهذا الركن من أركان الإيمان وهو أن نؤمن بجميع الرسل والأنبياء ورسالتهم ومعجزاتهم.
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
الملائكة 
 </strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic51} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>الإيمان بالملائكة هو الركن الثاني من أركان الإيمان.
    </SmallCard><SmallCard> الملائكة هي مخلوقات من نور خلقها الله لتنفيذ الأعمال المنوطة إليهم، فهم جنود الله في الكون.
    </SmallCard><SmallCard>
    الملائكة ليسوا كالبشر؛ فهم لا يأكلون ولا يشربون ولا ينامون ولا يعصون الله. 
    </SmallCard><SmallCard>للملائكة أعمال ومهام مختلفة مثل حملة العرش، والملكين رقيب وعتيد الذين يكتبان أعمال الإنسان.
    </SmallCard><SmallCard>
    يجب على كل مسلم أن يؤمن بوجود الملائكة ومهامهم المختلفة. من بينهم سيدنا جبريل عليه السلام، المعروف بالأمين،
    </SmallCard><SmallCard> مهمته نزول الوحي على الأنبياء والرسل.
   
    وقد رافق النبي محمد، صلى الله عليه وسلم، في رحلة الإسراء والمعراج حتى سدرة المنتهى.
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
االملائكة لمقربون     
</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={pic51} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>للملائكة أسماء وأعمال موكلة إليهم، وهم يتصفون بالكرامة والبراءة، ويطيعون أوامر الله دون معصية.
    </SmallCard><SmallCard>
    منهم جبريل الأمين، الموكل بنقل الوحي من الله تعالى إلى رسله.
    </SmallCard><SmallCard>
    ومنهم ميكال أو ميكائيل عليه السلام، الموكل بالمطر وتصاريفه.
    </SmallCard><SmallCard>
    ومنهم إسرافيل عليه السلام، الموكل بنفخ الصور.
    </SmallCard><SmallCard>
    وملك الموت وأعوانه الموكلون بقبض الأرواح.
    </SmallCard></strong></FormulaText>






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
الكتب المنزلة</strong></FormulaText>
 </SmallCard>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
                  <img src={pic50} alt="Teacher" style={imageStyle} /> 
                       
<FormulaText dir="rtl"><strong>
    <SmallCard>القرآن: هو كلام الله تعالى، المنزل على نبينا محمد صلى الله عليه وسلم، بواسطة جبريل عليه السلام. يتم تلاوته وتعبده، منقول إلينا بالتواتر
    </SmallCard><SmallCard>
    الإنجيل: الكتاب الذي أنزله الله على عيسى عليه السلام.
    </SmallCard><SmallCard>
    التوراة: كتاب الله تعالى الذي أنزله على نبيه موسى عليه السلام.
    </SmallCard><SmallCard>
    الزبور: أنزل الله الزبور على نبيه داود عليه السلام.
    </SmallCard><SmallCard>
    دعا الله تعالى في كتابه الكريم إلى الإيمان بما سبقه من كتب أنزلها على أنبيائه إجمالاً فيما أجمل، وتفصيلاً فيما فصل.
    </SmallCard></strong></FormulaText>







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
