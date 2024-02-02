import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import Lait from '../../Images/Lait.png';
import teacher from '../../Images/Food.png';
import Healthy from '../../Images/HealthyFood.png';
import glucides from  '../../Images/glucides .png';
import lipidesSource from '../../Images/lipides.png';
import proteines from '../../Images/proteines.png';
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
         <FormulaText><strong>Chapitre 1 : Equilibre Alimantaire</strong></FormulaText>
             
                  <img src={teacher} alt="Teacher" style={imageStyle} /> 
                  <Card>
                       
                       <FormulaText> <strong>  Notre corps, c'est notre maison 🏠 :
                            il faut bien manger pour la tenir solide. C'est ça, l'équilibre alimentaire </strong> </FormulaText>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>

                        <FormulaText> <strong>  Pour fonctionner, le corps humain a besoin de  glucides , de lipides
                             et de protéines. 
                             mais aussi de sels minéraux, de vitamines et d'eau. </strong> </FormulaText>
                        <FormulaText>

                        <img src={Healthy} alt="Healthy"  style={{ ...imageStyle, width: '220%' }} /> 
                       

                            
    <strong>glucides :</strong> sucres et féculents
</FormulaText>

<FormulaText>
    <strong>lipides :</strong>graisses animales et végétales
</FormulaText>

<FormulaText>
    <strong>protéines :</strong> viandes, poissons, œufs et légumes secs
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
                      
                      <img src={Lait} alt="Lait" style={imageStyle} /> 
                    <Card> <FormulaText> Le lait est considéré comme un aliment 
                     complet car il contient: <strong> les glucides, les lipides, les protéines, les minéraux et l'eau. </strong></FormulaText>
                     <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div></Card>
                </div>
            )}
            <br></br>
                    <br></br>
                      
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>

<Card>  <FormulaText><strong>Les differnet Source des glucides</strong></FormulaText>    
                        <img src={glucides} alt="glucides" style={imageStyle} /> 
                    <FormulaText><strong>Céréales et produits céréaliers :</strong> pain, riz, pâtes, céréales, quinoa, avoine.<br></br>
<strong>Tubercules : </strong> pommes de terre, patates douces, manioc.<br></br>
<strong>Légumineuses : </strong> pois, lentilles, haricots.<br></br>
<strong>Fruits :</strong> bananes, pommes, baies, oranges, mangues.<br></br>
<strong>Sucres naturels : </strong>miel, sirop d'érable, sirop d'agave.<br></br>
<strong>Produits laitiers : </strong>lait, yaourt.<br></br>
<strong>Légumes : </strong> les carottes, le maïs et les betteraves contiennent plus de glucides que d'autres.<br></br>
<strong>Sucreries et desserts : </strong>gâteaux, biscuits, bonbons.</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <Card>
    <FormulaText><strong>Les differnet Sources de lipides </strong></FormulaText>    
    <img src={lipidesSource} alt="Sources de lipides" style={imageStyle} /> 
    <FormulaText>
        <strong>Huiles  :</strong> arachide, dattier du désert.<br></br>
        <strong>Produits laitiers :</strong> formage, , crème, beurre, lait entier.<br></br>
        <strong>Viandes :</strong> chameau, mouton, chèvre.<br></br>
        <strong>Poissons </strong> <br></br>
        <strong>Noix et graines :</strong> amandes, arachides.<br></br>
        <strong>Huiles  :</strong> olives, huile d'olive.<br></br>
        <strong>Fritures :</strong> beignets locaux.<br></br>
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
    <FormulaText><strong>Les différentes sources de protéines</strong></FormulaText>    
    <img src={proteines} alt="protéines" style={imageStyle} /> 
    <FormulaText>
        <strong>Viandes :</strong> chameau, mouton, chèvre.<br></br>
        <strong>Volailles :</strong> poulet, dinde.<br></br>
        <strong>Poissons et fruits de mer :</strong> saumon, thon, crevettes.<br></br>
        <strong>Produits laitiers :</strong> lait, fromage, yaourt.<br></br>
        <strong>Œufs :</strong> source complète de protéines.<br></br>
        <strong>Légumineuses :</strong> lentilles, pois, haricots.<br></br>
        <strong>Noix et graines :</strong> amandes, noix.<br></br>
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
