import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import glucides from  '../../Images/glucides .png';
import Sida1 from '../../Images/sida1.png';
import Sida from '../../Images/Sida.png';
import Virus1 from '../../Images/Virus1.png';
import doctor from '../../Images/doctor.png';
import malade from '../../Images/malade.png';
import vaccination from '../../Images/vaccination.png';
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
        <Container>
         <FormulaText><strong>Chapitre 7 : Le sida et VIH</strong></FormulaText>
             
                  <img src={Sida} alt="Teacher" style={imageStyle} /> 
                  <Card>
                       
                       <FormulaText> <strong> Notre santé, c'est notre bien le plus précieux 🌐 : il faut agir avec précaution pour la préserver. C'est ça, la prévention du VIH/Sida.</strong> </FormulaText>
                           </Card>
            
            {section >= 1 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>
 <FormulaText><strong>Que signifie Sida/VIH ?</strong></FormulaText>  
 <img src={Sida1} alt="Lait" style={imageStyle} /> 
 
                        <FormulaText> Le VIH est un virus qui peut rendre les gens malades. Il attaque le système immunitaire, qui est comme une armée dans notre corps qui nous protège des maladies. Lorsque le système immunitaire est affaibli par le VIH, cela peut conduire au SIDA, une maladie grave. Le VIH ne se propage pas par des câlins, des baisers ou en jouant avec des amis. C'est pourquoi il est important de ne pas partager des objets tranchants comme des aiguilles, car cela peut propager le virus, on appelle Un séropositif  une personne qui porte le virus sans être malade.
</FormulaText>


<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </Card>
                    <br></br>
                   
                </div>
            )}

                      
{section >= 2 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
   
                      
                      
                    <Card> 
                        <FormulaText><strong>comment se transmet de sida ?</strong></FormulaText>  
                    <img src={Virus1} alt="Lait" style={imageStyle} /> 
                        <FormulaText> Le VIH se propage lorsque le sang d'une personne infectée entre dans le corps d'une autre personne. Cela peut arriver si quelqu'un partage une aiguille ou si une mère infectée transmet le virus à son bébé pendant la grossesse. Il est essentiel de ne pas toucher le sang des autres et d'éviter de partager des objets qui pourraient être sales de sang, comme les aiguilles. En comprenant cela, nous pouvons rester en sécurité et aider à prévenir la propagation du VIH.</FormulaText>
                     <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div></Card>
                </div>
            )}
            <br></br>
                    <br></br>
                      
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>

<Card>  <FormulaText><strong>Comment savoir si une personne est malade du sida ?</strong></FormulaText>    
                        <img src={malade} alt="glucides" style={imageStyle} /> 
                    <FormulaText>Le VIH ne peut pas être détecté visuellement, et les personnes infectées peuvent ne montrer aucun signe extérieur de la maladie pendant de nombreuses années. Le seul moyen fiable de savoir si quelqu'un est infecté par le VIH est de faire un test spécifique appelé test de dépistage du VIH, généralement effectué par un professionnel de la santé avec une prise de sang. </FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <Card>
    <FormulaText><strong>Comment se protéger ou éviter le sida ?</strong></FormulaText>    
    <img src={vaccination} alt="Sources de lipides" style={imageStyle} /> 
    <FormulaText>La meilleure façon de se protéger du VIH est de ne pas partager d'aiguilles et de ne pas toucher le sang des autres. Nous devons également nous assurer de bien nous laver les mains après avoir joué à l'extérieur et avant de manger. Les bisous et les câlins ne propagent pas le VIH, donc nous pouvons continuer à montrer de l'amour à nos amis et à notre famille. Il est important de parler à un adulte de confiance si nous pensons que nous pourrions avoir été en contact avec le sang de quelqu'un d'autre.
    </FormulaText>
    <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}

            {section >= 5 && (
                <div>
                    <Card>
    <FormulaText><strong>Comment traiter une personne attaintes du VIH/SIDA </strong></FormulaText>    
    <img src={doctor} alt="Sources de lipides" style={imageStyle} /> 
    <FormulaText>Les personnes atteintes du VIH/SIDA sont comme tout le monde. Elles ont besoin de notre amour, de notre soutien et de notre compréhension. Le VIH ne se propage pas par des gestes d'amour, et il est important de traiter tout le monde avec gentillesse, que la personne soit malade ou non. En comprenant que le VIH ne se propage pas par des contacts sociaux normaux, nous pouvons briser les stéréotypes et contribuer à créer une société où tout le monde est respecté, aimé et inclus
    </FormulaText>

   <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}
 <br></br>
 <br></br>
{section >= 6 && (
                <div>
                    <QCMC1 />
                </div>
            )}



            {section < 6 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
