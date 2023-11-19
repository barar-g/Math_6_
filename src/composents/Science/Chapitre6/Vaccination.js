import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import Vac from '../../Images/Vac.png';
import Vaccination from '../../Images/Vaccination.png';
import Paludisme from '../../Images/Paludisme.png';
import parasites from  '../../Images/parasites.png';
import Guinea from '../../Images/Guinea.png';
import bilharziose from '../../Images/bilharziose.png';
import Protegemaladie from '../../Images/Protegemaladie.png';
import Audio from "./Audio1" ;
import {
  Container, SectionContainer, ImageContainer,FormulaText, Card, FormulaBox,BodyText,Subtitle, ContinueButton
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
         <FormulaText><strong>Chapitre 6 : La Vaccination</strong></FormulaText>
             
                  <img src={Vaccination} alt="Vaccination" style={imageStyle} /> 
                  <Card>
                       
                  <FormulaText>
    <strong>La Vaccination :</strong> La vaccination, c'est comme un super bouclier pour notre corps. 
    Elle nous aide à combattre les germes et les maladies. Quand on se fait vacciner, on apprend à notre corps à reconnaître
     et à combattre les microbes sans tomber malade. C'est comme si on entraînait nos défenses pour être super fortes !
</FormulaText>
  </Card>
            {section >= 1 && (
                <div>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>
 <img src={Protegemaladie} alt="Protegemaladie" style={imageStyle} /> 
 <FormulaText>
    <strong>Se protéger avec la vaccination :</strong> Les vaccins sont de petits super-héros qui combattent les maladies. Ils nous apprennent à nous défendre contre elles. Voici quelques-unes des maladies contre lesquelles nous pouvons nous protéger grâce aux vaccins.
</FormulaText>

<FormulaText>
    <strong>1. La bronchite </strong> 
</FormulaText>

<FormulaText>
    <strong>2. La diphtérie </strong>
</FormulaText>

<FormulaText>
    <strong>3. La fièvre jaune </strong>
</FormulaText>

<FormulaText>
    <strong>4. La grippe </strong>
</FormulaText>

<FormulaText>
    <strong>5. L'hépatite </strong>
</FormulaText>

<FormulaText>
    <strong>6. La lèpre </strong>
</FormulaText>

<FormulaText>
    <strong>7. La méningite </strong>
</FormulaText>

<FormulaText>
    <strong>8. Le paludisme </strong>
</FormulaText>

<FormulaText>
    <strong>9. La rage </strong>
</FormulaText>

<FormulaText>
    <strong>10. Le rhume </strong>
</FormulaText>

<FormulaText>
    <strong>11. La rubéole </strong>
</FormulaText>

<FormulaText>
    <strong>12. La syphilis </strong>
</FormulaText>

<FormulaText>
    <strong>13. Le tétanos </strong>
</FormulaText>

<FormulaText>
    <strong>14. La tuberculose :</strong>
</FormulaText>







<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </Card>
                    <br></br>
                   
                </div>
            )}

                      
{section >= 2 && (
                <div>
                    <br></br>
                    <br></br>
                      
                    
                    <Card>   
                  
        
                    <img src={Vac} alt="Vac" style={imageStyle} /> 
       <FormulaText>             
    <strong>La vaccination offre une protection contre plusieurs maladies dangereuses.</strong>
</FormulaText>

<FormulaText>
    <strong>Un enfant qui n'est pas vacciné court plus de risques de souffrir de malnutrition, d'être handicapé ou de mourir.</strong>
</FormulaText>

<FormulaText>
    <strong>La vaccination d’un enfant doit être précoce. Tout enfant devrait recevoir tous les vaccins avant son premier anniversaire.</strong>
</FormulaText>

<FormulaText>
    <strong>Il n’y a aucun danger à vacciner un enfant malade.</strong>
</FormulaText>

<FormulaText>
    <strong>Toutes les femmes de 15 à 44 ans devraient être vaccinées contre le tétanos.</strong>
</FormulaText>

                     <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div></Card>
                </div>
            )}
            <br></br>
                    <br></br>
                      
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>

<Card>  <FormulaText> <strong>2. Les parasitoses intestinales </strong></FormulaText>    
                        <img src={parasites} alt="parasites" style={imageStyle} /> 
                        <FormulaText>
                        C'est quand des parasites, comme des vers, vivent dans l'intestin. Ils peuvent venir de l'eau ou de la nourriture contaminées.</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <Card>
    <FormulaText>  <strong>3. Le ver de Guinée </strong> </FormulaText>   
     
    <img src={Guinea} alt="Guinea" style={imageStyle} /> 
    <FormulaText>
     C'est une infection par un ver qui peut sortir de la peau. On l'attrape en buvant de l'eau qui contient des larves de ver.
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
    <FormulaText> <strong>4. La bilharziose </strong> </FormulaText>    
    <img src={bilharziose} alt="bilharziose" style={imageStyle} /> 
    <FormulaText>
   C'est une infection causée par des vers parasites dans l'eau douce. Elle peut être attrapée en nageant ou en marchant dans l'eau contaminée.
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
                    <Card>
    <FormulaText> <strong>5. Le Malaria (Paludisme) </strong></FormulaText>    
    <img src={Paludisme} alt="Paludisme" style={imageStyle} /> 
    <FormulaText>
    Le paludisme, ou malaria, est une maladie grave transmise par les piqûres de certains types de moustiques,
     les Anophèles, qui se développent dans l'eau stagnante. Les parasites du paludisme infectent d'abord les moustiques,
      qui transmettent ensuite la maladie aux humains lorsqu'ils piquent pour se nourrir de sang.</FormulaText>



   <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}



{section >= 7 && (
                <div>
                    <Card>
    <FormulaText> <strong></strong></FormulaText>    
    <img src={Protegemaladie} alt="Protegemaladie" style={imageStyle} /> 
    <FormulaText> <strong>
    Les règles d'hygiène et les modes de prévention pour le paludisme comprennent :</strong> </FormulaText>
    <FormulaText>
    <strong>Dormir sous une moustiquaire :</strong> Cela empêche les moustiques de piquer pendant la nuit.
</FormulaText>

<FormulaText>
    <strong>Pas d'eau qui stagne :</strong> Il faut vider les endroits où il y a de l'eau qui ne bouge pas pour que les moustiques ne puissent pas y pondre leurs œufs.
</FormulaText>

<FormulaText>
    <strong>Mettre du répulsif :</strong> Un produit spécial sur la peau pour que les moustiques ne s'approchent pas.
</FormulaText>

<FormulaText>
    <strong>Porter des manches longues et des pantalons :</strong> Ainsi, les moustiques ne peuvent pas piquer la peau.
</FormulaText>

<FormulaText>
    <strong>Utiliser des sprays anti-moustiques dans la maison :</strong> Pour tuer les moustiques qui sont à l'intérieur.
</FormulaText>

<FormulaText>
    <strong>Si on va quelque part où il y a beaucoup de paludisme, on peut prendre des médicaments spéciaux :</strong> Mais il faut demander à un docteur d'abord.
</FormulaText>





   <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}

{section >= 8 && (
                <div>
                    <Card>
    <FormulaText> <strong></strong></FormulaText>    
    <img src={Protegemaladie} alt="Protegemaladie" style={imageStyle} /> 
    <FormulaText>
    Pour prévenir les risques sanitaires liés à l'eau, il faut :

aménager le point d'eau pour éviter que les hommes et les animaux ne viennent le souiller,
construire et utiliser une douche et des latrines,
purifier et filtrer l'eau de boisson.
</FormulaText>



   <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}

{section >= 9 && (
                <div>
                    <QCMC1 />
                </div>
            )}



            {section < 9 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
