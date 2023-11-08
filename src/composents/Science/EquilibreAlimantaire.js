import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import Lait from '../Images/Lait.png';
import teacher from '../Images/Food.png';
import Healthy from '../Images/HealthyFood.png';
import Audio from "./Audio1" ;
import {
  Container, SectionContainer, ImageContainer,FormulaText, Card, FormulaBox,BodyText,Subtitle, ContinueButton
} from '../Styles/MajorStyles'; 


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
          
            
            {section >= 1 && (
                <div>
                 
                 <Card>
                       
                        <FormulaText> <strong>  Notre corps, c'est notre maison 🏠 :
                             il faut bien manger pour la tenir solide. C'est ça, l'équilibre alimentaire </strong> </FormulaText>
                            </Card>
                 
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
                     complet car il contient: <strong> les glucides, les lipides, les protéines, les minéraux et l'eau. </strong></FormulaText></Card>
                </div>
            )}
            
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    
                </div>
            )}

            {section >= 5 && (
                <div>
                    <QCMC1 />
                </div>
            )}

            {section < 5 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
