import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import dysenterie from '../../Images/dysenterie.png';
import EauEtSante from '../../Images/EauEtSante.png';
import Paludisme from '../../Images/Paludisme.png';
import parasites from  '../../Images/parasites.png';
import Guinea from '../../Images/Guinea.png';
import bilharziose from '../../Images/bilharziose.png';
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
         <FormulaText><strong>Chapitre 5 : L'eau et la Santé</strong></FormulaText>
             
                  <img src={EauEtSante} alt="EauEtSante" style={imageStyle} /> 
                  <Card>
                       
                  <FormulaText> 
                    <strong>  L'eau est essentielle à la vie et avoir accès à de l'eau propre est crucial pour la santé. 
                    La pollution de l'eau peut entraîner des maladies et affecter l'écosystème. 
                    Il est important de préserver la qualité de notre eau pour notre propre bien-être et celui de la planète.</strong> 
                </FormulaText>    </Card>
            {section >= 1 && (
                <div>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>
 <img src={inestine} alt="inestine" style={imageStyle} /> 
 <FormulaText>
    <strong>Les maladies liées à l'eau </strong> L'eau est source de vie, mais elle peut aussi transporter des maladies si elle n'est pas propre. Voici quelques maladies courantes liées à l'eau insalubre.
</FormulaText>

<FormulaText>
    <strong>1. La diarrhée (dysenterie) </strong>
</FormulaText>

<FormulaText>
    <strong>2. Les parasitoses intestinales </strong> 
</FormulaText>

<FormulaText>
    <strong>3. Le ver de Guinée </strong>
</FormulaText>

<FormulaText>
    <strong>4. La bilharziose :</strong> 
</FormulaText>
<FormulaText>
    <strong>5. Le Malaria (Paludisme) :</strong> 
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
        <strong> 1. La diarrhée (dysenterie) </strong> </FormulaText>
                    <br></br>
                    <img src={dysenterie} alt="dysenterie" style={imageStyle} /> 
                    <FormulaText>
                    Cette maladie provoque des douleurs d'estomac et des selles liquides fréquentes. Elle est souvent causée par l'eau contaminée.
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
    <img src={inestine} alt="inestine" style={imageStyle} /> 
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
    <img src={inestine} alt="inestine" style={imageStyle} /> 
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
