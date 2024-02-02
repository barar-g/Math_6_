import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import biodegradable from '../../Images/biodegradable.png';
import Pollution from '../../Images/Pollution.png';
import Recyclage from '../../Images/Recyclage.png';
import DechargeSauvage from  '../../Images/DechargeSauvage.png';
import Environement from '../../Images/Environement.png';
import Polluer from '../../Images/Polluer.png';
import inestine from '../../Images/inestine.png';
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
         <FormulaText><strong>Chapitre 4 : La Pollution </strong></FormulaText>
             
                  <img src={Pollution} alt="Teacher" style={imageStyle} /> 
                  <Card>
                       
                       <FormulaText> <strong>  Pour bien vivre, il faut pas polluer. La pollution, 
                        c'est quand tout devient sale. Ça fait mal à la nature et à nous. Il faut faire attention et garder tout propre.</strong> </FormulaText> 
            </Card>
            {section >= 1 && (
                <div>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>
 <img src={inestine} alt="inestine" style={imageStyle} /> 
                        <FormulaText> <strong> Nous vivons dans un monde où notre interaction avec l'environnement peut être 
                            bénéfique ou nuisible. Comprendre ces termes clés nous aide à choisir des actions qui protègent notre environnement  </strong> </FormulaText>
                        <FormulaText>
    <strong>1. Biodégradable </strong> 
</FormulaText>

<FormulaText>
    <strong>2. Décharge sauvage </strong>
</FormulaText>

<FormulaText>
    <strong>3.Environnement </strong> 
</FormulaText>

<FormulaText>
    <strong>4. Polluer </strong> 
</FormulaText>

<FormulaText>
    <strong>5. Recyclage </strong> 
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
                  
        <FormulaText>
                    <strong>Biodégradable </strong></FormulaText>
                    <br></br>
                    <img src={biodegradable} alt="biodegradable" style={imageStyle} /> 
                    <FormulaText>  Ce qui peut être décomposé par des organismes naturels comme les bactéries,
     rendant le produit capable de se mélanger de nouveau avec la terre.
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

<Card>  <FormulaText><strong>Décharge sauvage</strong></FormulaText>    
                        <img src={DechargeSauvage} alt="gluDechargeSauvagecides" style={imageStyle} /> 
                        <FormulaText>
    <strong></strong> Un lieu où les déchets sont jetés illégalement, causant de la pollution et nuisant à l'environnement.
</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <Card>
    <FormulaText>  <strong>Environnement </strong> </FormulaText>   
     
    <img src={Environement} alt="Sources de lipides" style={imageStyle} /> 
    <FormulaText>
  Tout ce qui nous entoure, y compris l'air, l'eau, les plantes et les animaux. Il est essentiel pour la santé de la planète.
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
    <FormulaText> <strong>Polluer </strong></FormulaText>    
    <img src={Polluer} alt="Polluer" style={imageStyle} /> 
    <FormulaText>
    L'acte de contaminer l'environnement avec des substances nuisibles ou des déchets.
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
    <FormulaText> <strong>Recyclage </strong></FormulaText>    
    <img src={Recyclage} alt="Recyclage" style={imageStyle} /> 
    <FormulaText>
    Le processus de conversion des déchets en nouveaux produits pour réduire la pollution et l'utilisation des ressources naturelles.
</FormulaText>



   <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}

{section >= 7 && (
                <div>
                    <Card>
    <FormulaText> <strong>Conclusion </strong></FormulaText>    
    <img src={inestine} alt="inestine" style={imageStyle} /> 
    <FormulaText>
    La pollution est causée par le rejet de déchets de la vie quotidienne dans l'environnement, comme les décharges sauvages, les émissions des usines et des voitures. Cela endommage le paysage, crée des odeurs désagréables et peut être dangereux.
     Il est possible de réduire les déchets en les enfouissant, les brûlant, les triant ou les recyclant.
</FormulaText>



   <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}

{section >= 8 && (
                <div>
                    <QCMC1 />
                </div>
            )}



            {section < 8 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
