import React, { useState } from 'react';

import maitre from '../Images/maitre.PNG';


import { Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton } from '../../Styles/MajorStyles';





// App Component
const Etre = () => {
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
            <Title> Le verbe "être" </Title>

            {showSections[0] && (
                <SectionContainer>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                    <Card>
                    
                        <BodyText>
                        Le verbe "être" est l'un des verbes les plus fondamentaux et polyvalents de la langue française. 
                        Il est essentiel pour exprimer l'existence, l'identification, l'état
                        </BodyText>
                    </Card>
                </SectionContainer>
            )}
    </Container>
  );
}



export default Etre;