import React, { useState } from 'react';
import styled from 'styled-components';
import owl2 from '../Images/owl2.png';
import owl4 from '../Images/owl4.png';
import pizza from '../Images/pizza.png'; 
import pizza1 from '../Images/pizza1.png';
import pizza3 from '../Images/pizza3.png';
import candy from '../Images/candy.png';
import exemple from '../Images/exemple.png';
import exemple1 from '../Images/exemple1.png';
import exemple2 from '../Images/exemple2.png';
import Test3 from './QCMC9';
import P2A1A_1 from './P2A1A-1';
import Audio from "./Audio09" ;

import { Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton } from '../../Styles/MajorStyles';





// App Component
const P2A1A = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true,true,true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21, setShowP2A21] = useState(false);

    
    

    return (
        <Container>
            <Title>➗La Division des nombres➗</Title>

            {showSections[0] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={owl2} alt="Teacher" />
                    </ImageContainer>
                    <Card>
                    
                        <BodyText>
                        Salut à tous ! Aujourd'hui, nous allons plonger dans un autre sujet passionnant : la division.
                        </BodyText>
                    </Card>
                </SectionContainer>
            )}
{section >= 1 && showSections[1] && (
    <Subtitle>💡Definition💡</Subtitle>
)}
            {section >= 1 && showSections[1] && (

        
                <SectionContainer>   
                    
                    
                    
                         <br></br>           
                    <ImageContainer>
                        <img src={owl4} alt="Teacher"  />
               </ImageContainer>
                    <div>
                        <Card>
                                   
                    <BodyText>
                    La division est une operation qui nous permet de partager les quantités équitablement, comme partager une pizza entre amis ! 😉
                            </BodyText>
                           
                        </Card>
                    </div>
            
                  
                </SectionContainer>
            )}
           
{section >= 2 && showSections[2] && (
    <Subtitle>Exemple de division</Subtitle>
)}
            {section >= 2 && showSections[2] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={pizza} alt="Teacher"  />
                        <br></br>
                    <h3>Avant la division</h3><br></br>
                    <ImageContainer>
                        <img src={pizza3} alt="Teacher" />
                    </ImageContainer>
                    </ImageContainer>
                    
                    <div><h1>&#8594;</h1><h1>&#8594;</h1></div>

                   
                    <ImageContainer>
                        <img src={pizza1} alt="Teacher" style={{marginLeft:"10px"}}/>
                        <h3 style={{marginTop:"26px"}}>Aprés la division</h3><br></br>
                        <div>
                        <Card>
                            <BodyText>
                            Partage de pizza de 9 pieces sur 4 personnes, 2 pieces pour chaqun. Le Rest est un piece.
                            </BodyText>

                        </Card>
                    </div>
                    </ImageContainer>
                    
                </SectionContainer>

            )}
                                           <SectionContainer>
                                            
                           </SectionContainer>
                           {section >= 3 && showSections[3] && (
    <Subtitle>Exemple Numerique de la division</Subtitle>
)}

            {section >= 3 && showSections[3] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={candy} alt="Teacher" />
                        <br></br>
                        <br></br>
                        <h3>Solution</h3>
                        <br></br>
                        <ImageContainer>
                        <img src={exemple1} alt="Teacher" style ={{width:"170px",marginTop:"20px"}}/>
                    </ImageContainer>
                    <br></br>
                    <ImageContainer>
                        <img src={exemple2} alt="Teacher" style ={{width:"170px",marginTop:"40px"}}/>
                    </ImageContainer>
                    <br></br>
                    <ImageContainer>
                        <img src={exemple} alt="Teacher" style ={{width:"170px",marginTop:"40px"}}/>
                    </ImageContainer>

                    </ImageContainer>
                    <div>
                        <Card>
                            <BodyText>
                            Partagez équitabtement 141 bonbons entre 8 enfants. Combien en auront-ils chacun ? Combien en restera-t-il dans le sac ?"
                            </BodyText>


                        </Card>
                        <br></br>
                        <FormulaBox>
                            <FormulaText>
                            <strong>1er etape</strong> :chercher combien de 8 dans le premiere 2 nombre de 141(14),14 contient 8 seulment 1 fois. metter 1 dans le quotion et le resultat (8 x 1=8) dans le 2eme cas<br></br> 
                            <strong>2eme etape</strong>
                            :Soustraction 8 de 14, le resultat est 6, deplacer le 3 eme nombre restant de notre dividende 141(1) et combiner avec 6, deplacer le resultat (61) vers le 3eme cas,
                            <br></br>
                            <strong>3eme etape</strong> :De meme chercher combien de 8 dans 61, 61 contient  8 exactement 7 fois,metter 7 dans le quotion  et le resultat (8 x 7=56) dans le dernier cas<br></br>
                            comme le nombre restant de la soustraction de 61 et 56 inferieur a 8, arreter l operation et
                            voila votre resultat de division. 
                            </FormulaText>


                        </FormulaBox>
                    </div>
                </SectionContainer>
            )}
                       {section >= 4 && showSections[4] && (
    <Subtitle>Formule clés</Subtitle>
)}
            {section >= 4 && showSections[4] &&  (
                <SectionContainer>
                    <FormulaBox>
                        
                       <FormulaText><strong>Dividende</strong> = Signifie le  nombre que tu divises.</FormulaText>
                        <FormulaText><strong>Diviseur</strong> = Signifie le nombre par lequel tu divises.</FormulaText>
                        <FormulaText><strong>Quotient</strong> = Signifie le résultat de la division</FormulaText>
                        <FormulaText><strong>Rest</strong> = Signifie le rest de la division</FormulaText>
                    </FormulaBox>
                    
                </SectionContainer>
            )}
              {section >= 4 && showSections[4] && (
            <SectionContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>

            </SectionContainer>
             )}

{section >= 5 && showSections[5] && (
    <Subtitle>Activité</Subtitle>
)}
                          {!showP2A21 && section >= 5  && showSections[5] && (
            <div>
            <P2A1A_1 />
            </div>
            
      )}
      <br></br>
            {section >= 6 && showSections[6] && (
    <Subtitle>QCM</Subtitle>
)}
              {section >= 6  && showSections[6] && (
            <div>
            <Test3 />
            </div>
            
      )}


            {section < 6 && (
 <ContinueButton  onClick={() => setSection(section + 1)}>Continuer</ContinueButton>            )}

    </Container>
  );
}



export default P2A1A;