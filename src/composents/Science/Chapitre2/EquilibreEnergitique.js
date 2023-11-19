import React, { useState } from 'react';
import QCMC1 from './QCMC2';
import Lait from '../../Images/Lait.png';
import teacher from '../../Images/Food.png';
import Healthy from '../../Images/HealthyFood.png';
import glucides from  '../../Images/glucides .png';
import lipidesSource from '../../Images/lipides.png';
import proteines from '../../Images/proteines.png';
import balance from '../../Images/balance.png';
import apple from '../../Images/apple.png';
import man from '../../Images/man.png';


import Audio from "./Audio2" ;
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
         <FormulaText><strong>Chapitre 2 : Equilibre Energitique</strong></FormulaText>
             
                  <img src={man} alt="Teacher" style={imageStyle} /> 
                  <Card>
                       
                       <FormulaText> <strong>  L'équilibre énergétique de notre nutrition est essentiel : nous devons consommer les bonnes quantités d'énergie pour maintenir notre bien-être. C'est là le secret d'une alimentation équilibrée.</strong> </FormulaText>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>

                        <FormulaText> <strong>  Pour Avoir l'energie necessaire dans le journée ,On a besoin de  3 plats necessaire, Le petit dejeuné, le repas et le dinné. </strong> </FormulaText>
                        <FormulaText>

                        <img src={Healthy} alt="Healthy"  style={{ ...imageStyle, width: '220%' }} /> 
                       

                            
    <strong>Le petit dejeuné :</strong> Le plus important plats pour commencer le journé 
</FormulaText>
<FormulaText>
    <strong>Le repas:</strong>Un moment pour recharger ses énergies au milieu de la journée.
</FormulaText>
<FormulaText>
    <strong>Le dinner :</strong>  Un repas plus léger pour clôturer la journée en douceur.
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
                    <Card><FormulaText><strong>La consommation d'énergie</strong></FormulaText>  
                    <br></br>
                    <br></br>
                      
                      <img src={balance} alt="Lait" style={imageStyle} /> 
                     <FormulaText>La consommation d'énergie pour un enfant est la quantité d'énergie nécessaire pour le bon fonctionnement de son corps, provenant des calories des aliments, et joue un rôle crucial dans sa santé globale.</FormulaText>
                     <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div></Card>
                </div>
            )}
            <br></br>
                    <br></br>


                    {section >= 3 && (
                <div>
                    <Card>
    <FormulaText><strong>La concept des calories (KJ)</strong></FormulaText>    
    <img src={apple} alt="protéines" style={imageStyle} /> 
    <FormulaText>
    Les calories sont une unité de mesure d'énergie dérivée des aliments que le corps utilise pour ses fonctions vitales et ses activités quotidiennes.
    </FormulaText>
    <FormulaText>
    Voici le total de calories que le different elements contiennent
    </FormulaText>
    <FormulaText>
        <strong>1 gramme de glicide :</strong> 17 KJ.<br></br>
        <strong>1 gramme de protein :</strong> 17 KJ.<br></br>
        <strong>1 gramme de lipides :</strong> 37 KJ.<br></br><br></br>
        <strong>100 gramme de viande:</strong> 250 KJ.<br></br>
        <strong>un Œuf :</strong>70 KJ.<br></br>
        <strong>100 grammes de poissons</strong>200 KJ.<br></br>
        <strong>100 grammes de macarouni :</strong>150 KJ.<br></br>
    </FormulaText>

   <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}
                        <br></br>
                    <br></br>
            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>

<Card>  <FormulaText><strong>L'importance de consommer suffisamment de calories </strong></FormulaText>    
                        <img src={glucides} alt="glucides" style={imageStyle} /> 
                    <FormulaText>Les enfants ont besoin de consommer suffisamment de calories pour leur croissance, leur activité physique, le bon fonctionnement de leur corps, leur système immunitaire, leur cerveau et leur concentration.</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>
            )}
            

            {section >= 5 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <Card>
    <FormulaText><strong>L'importance d'une alimentation équilibrée  </strong></FormulaText>    
    <img src={lipidesSource} alt="Sources de lipides" style={imageStyle} /> 
    <FormulaText>
    Il est essentiel que les enfants choisissent des aliments nutritifs pour satisfaire leurs besoins énergétiques. Les parents ont un rôle crucial à jouer en veillant à ce que leurs enfants adoptent une alimentation équilibrée pour favoriser une croissance saine et un développement harmonieux.
    </FormulaText>
    <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}

            

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
