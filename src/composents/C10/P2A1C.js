import React, { useState } from 'react';
import styled from 'styled-components';
import teacherImage from '../Images/teacher.png'; // Assurez-vous que ce chemin d'accès est correct.
import Test1 from './Test1';
import P2A2_1 from './P2A2-1'; // Assurez-vous que le chemin est correct.
import P2A2_2 from './P2A2-2';


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
        height: auto;
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
    margin: 15px 0;
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
const App = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true, true, true,true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21,] = useState(false);

    
    

    return (
        <Container>
            <Title>🛍️ Calcul du Prix 🛍️</Title>

            {showSections[0] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={teacherImage} alt="Teacher" />
                    </ImageContainer>
                    <Card>
                        <BodyText>
                            Salut! Aujourd'hui, on va parler d'un sujet intéressant : comment calculer le prix de vente, la perte et le bénéfice.
                        </BodyText>
                    </Card>
                    <SkipIcon onClick={() => toggleSection(0)}> {showSections[0] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}

            {section >= 1 && showSections[1] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={teacherImage} alt="Teacher" />
                    </ImageContainer>
                    <div>
                        <Subtitle>🤓 Les Bases 🤓</Subtitle>
                        <Card>
                            <BodyText>
                                Le <strong>prix de vente</strong> est le montant pour lequel tu vends quelque chose. Simple, non? 😉
                            </BodyText>
                        </Card>
                    </div>
                    <SkipIcon onClick={() => toggleSection(1)}> {showSections[1] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}

            {section >= 2 && showSections[2] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={teacherImage} alt="Teacher" />
                    </ImageContainer>
                    <div>
                        <Subtitle>💰 Bénéfice 💰</Subtitle>
                        <Card>
                            <BodyText>
                                Le bénéfice est la différence entre ce que ça t'a coûté d'avoir ton produit  et ce que tu as reçu en le vendant. 
                            </BodyText>
                        </Card>
                    </div>
                    <SkipIcon onClick={() => toggleSection(2)}> {showSections[2] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}

            {section >= 3 && showSections[3] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={teacherImage} alt="Teacher" />
                    </ImageContainer>
                    <div>
                        <Subtitle>😞 Perte 😞</Subtitle>
                        <Card>
                            <BodyText>
                                Si tu vends ton produit moins cher que ce qu'il t'a coûté, alors tu es en perte. 
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
                        <FormulaText><strong>Bénéfice</strong> = Prix de vente - Prix d'achat</FormulaText>
                        <FormulaText><strong>Perte</strong> = Prix d'achat - Prix de vente</FormulaText>
                    </FormulaBox>
                    <SkipIcon onClick={() => toggleSection(4)}> {showSections[4] ? "^" : "v"}</SkipIcon>
                </SectionContainer>
            )}

          
            <br></br>
          <br></br>
          {section >= 5 && showSections[5]  && (
                <div>
                    <Test1 />
                </div>
            )}

            {section >= 6 && showSections[6]  && (
                <div>
                    <P2A2_1 />
                </div>
            )}

            {section >= 7 && showSections[7]  && (
                <div>
                    <P2A2_2 />
                </div>
            )}

            {section < 7 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
    </Container>
  );
}



export default App;