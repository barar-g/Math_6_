import React, { useState } from 'react';
import teacherImage from '../Images/teacher.png';
import Test1 from './QCMC10';
import P2A2_1 from './P2A2-1';
import P2A2_2 from './P2A2-2';
import Audio from "./Audio10";

// Import des styles
import {
    Container,
    SectionContainer,
    ImageContainer,
    Card,
    BodyText,
    Title,
    Subtitle,
    FormulaBox,
    FormulaText,
    ContinueButton,
    SkipIcon,
    
} from '../Styles/MajorStyles';  // Ajustez le chemin si nécessaire

// ... (le reste de votre code React)





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
                        <div style={{ display: "flex", alignItems: "center" }}>
<Audio/>
</div>
                    </FormulaBox>
                    
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
                <ContinueButton  onClick={() => setSection(section + 1)}>Continuer</ContinueButton>                        )}
    </Container>
  );
}



export default App;