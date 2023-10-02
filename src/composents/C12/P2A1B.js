import React, { useState } from 'react';
import styled from 'styled-components';
import teacherImage from '../Images/teacher.png';
import owl1 from '../Images/owl1.png';
import owl2 from '../Images/owl2.png';
import owl3 from '../Images/owl3.png';
import owl4 from '../Images/owl4.png';
import tree from '../Images/tree.png';  // Assurez-vous que ce chemin d'accès est correct.
import Test2 from './Test2';
import P2A3_1 from './P2A3-1'; // Assurez-vous que le chemin est correct.
import P2A3_2 from './P2A3-2';


// Styles
const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
`;

const SectionContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;
`;



const ImageContainer = styled.div`
    flex: 0 0 auto;
    width: 170px; 
    margin-right: 20px; 
    img {
        width: 100%;
        height: "auto";
        
    }
`;

const Card = styled.div`
    background-color: #007BFF;
    padding: 10px 20px;
    border-radius: 20px; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
const BodyText = styled.p`
    font-family: 'Roboto', sans-serif; 
    font-size: 16px;
    line-height: 1.5;
    color: white; // texte en blanc pour le contraste avec le fond bleu
    
    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #222;
    
    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

const SkipIcon = styled.span`
    position: absolute;
    right: 10px;
    top: 240px; 
    cursor: pointer;
    font-size: 24px;
    color: #888;
    &:hover {
        color: #666;
    }
`;



const Subtitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #444;
    
    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

const FormulaBox = styled.div`
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 20px;
    background-color: #f9f9f9;
`;

const FormulaText = styled(BodyText)`
    color: black; // Ici nous définissons la couleur en noir
`;


const ContinueButton = styled.button`
    display: block;
    margin: 0px 0;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

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