import React, { useState } from 'react';
import teacherImage from '../Images/teacher.png';
import owl1 from '../Images/owl1.png';
import owl2 from '../Images/owl2.png';
import owl3 from '../Images/owl3.png';
import owl4 from '../Images/owl4.png';
import tree from '../Images/tree.png';
import Test2 from './QCMC12';
import P2A3_1 from './P2A3-1';
import P2A3_2 from './P2A3-2';
import Audio from "./Audio12" ;

import {
    Container,
    SectionContainer,
    ImageContainer,
    Card,
    BodyText,
    Title,
    SkipIcon,
    Subtitle,
    FormulaBox,
    FormulaText,
    ContinueButton
} from '../Styles/MajorStyles';  




// App Component
const P2A1B = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true,true,true,true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21, setShowP2A21] = useState(false);

    
    

    return (
        <Container>
            <Title>🛍️ les multiples et les diviseurs. 🛍️</Title>

            {showSections[0] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={owl2} alt="Teacher" />
                    </ImageContainer>
                    <Card>
                    
                        <BodyText>
                        Salut tout le monde ! Aujourd'hui, explorons un concept mathématique clé : les multiples et les diviseurs. 

                        Commençons par définir ces termes :
                        </BodyText>
                    </Card>
                    <SkipIcon onClick={() => toggleSection(0)}> {showSections[0] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}
{section >= 1 && showSections[1] && (
<Subtitle>❎Les multiples❎</Subtitle>)}
            {section >= 1 && showSections[1] && (
                
                <SectionContainer>    
                    <ImageContainer>
                        <img src={owl4} alt="Teacher" />
                    </ImageContainer>
                    <div>
                        <Card>
                        
                        <img src={tree} alt="Teacher" style ={{width:"100px", postion:"absolute"}} />
                  
                    <BodyText>
                            Un multiple résulte de la multiplication d'un nombre par un entier. 
                            </BodyText>
                           
                        </Card>
                    </div>
                    <SkipIcon onClick={() => toggleSection(1)}> {showSections[1] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}
            {section >= 2 && showSections[2] && (
                <Subtitle>➗les diviseurs➗</Subtitle>)}

            {section >= 2 && showSections[2] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={owl3} alt="Teacher" />
                    </ImageContainer>
                    <div>
                        <Card>
                            <BodyText>
                            Un diviseur est un nombre permettant une division exacte d'un autre, sans reste. Si un nombre est divisible par un autre, ce dernier en est un diviseur. 
                            </BodyText>
                        </Card>
                    </div>
                    <SkipIcon onClick={() => toggleSection(2)}> {showSections[2] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}
                    {section >= 3 && showSections[3] && (
                <Subtitle>💡 Exemples 💡</Subtitle>)}

            {section >= 3 && showSections[3] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={owl1} alt="Teacher" />
                    </ImageContainer>
                    <div>
                        
                        <Card>
                            <BodyText>
                            Pour les multiples de 3 : 3 (1 * 3), 6 (2 * 3), 9 (3 * 3), etc...
                            </BodyText>
                            <BodyText>
                            Pour les diviseurs du nombre 12 : 1, 2, 3, 4, 6 et 12 permettent une division sans reste.
                            </BodyText>
                        </Card>
                    </div>
                    <SkipIcon onClick={() => toggleSection(3)}> {showSections[3] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}
             

            {section >= 4 && showSections[4] &&  (
                <SectionContainer>
                    <FormulaBox>
                        <Subtitle>🔍 Formules Clés 🔍</Subtitle>
                        <FormulaText><strong>Multiple</strong> =Un nombre obtenu en multipliant un nombre donné par un autre nombre entier.</FormulaText>
                        <FormulaText><strong>Diviseur</strong> = Un nombre par lequel un autre nombre peut être divisé de manière exacte, sans reste.</FormulaText>
                    </FormulaBox>
                    <SkipIcon onClick={() => toggleSection(4)}> {showSections[4] ? "^" : "v"}</SkipIcon>
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
                <Subtitle>QCM</Subtitle>)}

              {section >= 5 && showSections[5] && (
            <div>
            <Test2 />
            </div>
            
      )}
       {section >= 6 && showSections[6] && (
                <Subtitle>Activites</Subtitle>)}


      
{section >= 6 && showSections[6] && (
            <div>
            <P2A3_1 />
            </div>
            
      )}
      {section >= 7 && showSections[7] && (
            <div>
            <P2A3_2 />
            </div>
            
      )}
            {section < 7 && (
       <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>            
       )}
            <br></br>
          <br></br>

 
   
    </Container>
  );
}



export default P2A1B;