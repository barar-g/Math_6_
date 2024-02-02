import React, { useState } from 'react';
import QCMC1 from './QCMC3';
import Desert from '../../Images/Desert.png';
import Desert2 from '../../Images/Desert2.png';
import Kiddesert from '../../Images/Kiddesert.png';
import plant from '../../Images/plant.png';
import peace from '../../Images/peace.png';
import Audio from "./Audio3" ;
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
         <FormulaText><strong>Chapitre 3 : La Desertification</strong></FormulaText>
             
                  <img src={Desert} alt="Teacher" style={imageStyle} /> 
                  <Card>
                       
                       <FormulaText> <strong>  Notre terre, c'est notre maison 🏠 :
                            il faut bien le proteger  contre la desertification </strong> </FormulaText>
                           </Card>
            
            {section >= 1 && (
                <div>
                
              
                 
                            <br></br>
                    <br></br>           
 <Card>
 <img src={Desert2} alt="Healthy"  style={{ ...imageStyle, width: '220%' }} /> 

                        <FormulaText> <strong>  La désertification est la dégradation des terres arables et des écosystèmes dans les régions sèches, due à des facteurs tels que la déforestation, la surutilisation des sols et le changement climatique, transformant les zones fertiles en déserts. </strong> </FormulaText>



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
                      
                      
                    <Card> <FormulaText><strong>Les Causes de la  desertification</strong></FormulaText>
                    <img src={Kiddesert} alt="Lait" style={imageStyle} /> <FormulaText>
        <strong>Sécheresse </strong> Variation climatique réduit l'eau, entrave la croissance, contribue à la désertification.<br></br>
        <strong>Dégradation des sols:</strong> Érosion, compaction, perte de matière organique, salinisation affaiblissent le sol.<br></br>
        <strong>Déforestation :</strong>  Coupe d'arbres pour agriculture, bois de chauffage, dégrade les écosystèmes.<br></br>
        <strong>Changements climatiques : </strong> Augmentation des températures, variations de précipitations exacerbe la désertification.<br></br>
        <strong>Migration démographique:</strong> Migration vers zones vulnérables entraîne utilisation non durable des terres et ressources.<br></br>
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

<Card>  <FormulaText><strong>Lutter contre la desertification</strong></FormulaText>    
                        <img src={peace} alt="glucides" style={imageStyle} /> 
                    <FormulaText>
<strong>Gestion de l'eau :</strong>Améliorer l'efficacité de l'irrigation, réduire la surexploitation des ressources en eau.<br></br>

<strong>Conservation des sols :</strong> Prévenir l'érosion, maintenir la fertilité, favoriser la couverture végétale.<br></br>

<strong>Afforestation et reboisement:</strong> Planter des arbres pour restaurer les écosystèmes dégradés.<br></br>

<strong>Pratiques agricoles durables :</strong> Encourager l'agroécologie, réduire l'utilisation de pesticides et d'engrais chimiques.<br></br>

<strong>Sensibilisation:</strong>  Éduquer sur la gestion responsable des ressources, promouvoir la durabilité.<br></br>

<strong>Planification urbaine :</strong>  Planifier l'expansion urbaine de manière durable pour préserver les terres agricoles.<br></br>

<strong>Adaptation aux changements climatiques :</strong>S'adapter aux nouvelles conditions climatiques pour atténuer l'impact sur les ressources naturelles.<br></br>

<strong>Gestion des migrations :</strong> Gérer la migration et la pression démographique pour éviter la surexploitation des terres.<br></br>




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
    <FormulaText><strong>Le ceinture verre </strong></FormulaText>    
    <img src={plant} alt="Sources de lipides" style={imageStyle} /> 
    <FormulaText>
        Une ceinture verte est une zone périurbaine ou rurale qui est délibérément conçue et aménagée pour promouvoir l'agriculture, la préservation de la nature et la qualité de vie. Les ceintures vertes sont généralement situées autour des zones urbaines et servent de transition entre les environnements urbains denses et les zones agricoles ou naturelles.
    </FormulaText>
    <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}


{section >= 5 && (
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
