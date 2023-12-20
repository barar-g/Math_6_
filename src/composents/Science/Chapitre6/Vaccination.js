import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import Vac from '../../Images/Vac.png';

import Paludisme from '../../Images/Paludisme.png';
import parasites from  '../../Images/parasites.png';
import Guinea from '../../Images/Guinea.png';
import bilharziose from '../../Images/bilharziose.png';
import Protegemaladie from '../../Images/Protegemaladie.png';
import Audio from "./Audio1" ;
import Vaccination from '../../Images/Vaccination.png';
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
                <div>
                    <QCMC1 />
                </div>
            )}



            {section < 3 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
