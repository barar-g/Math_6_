import React, { useState } from 'react';

import maitre from './images/prof.jpg'
import Article1 from './Article1';

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';





// App Component
const Article = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true, true, true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21, setShowP2A21] = useState(false);




    return (
        <Container>
            <Title> Les articles </Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                                Les articles sont des mots courts qui déterminent ou précisent un nom en indiquant 
                                son genre (masculin ou féminin) et son nombre (singulier ou pluriel).<br></br>
                                En français, il existe trois types d'articles : <strong>définis, indéfinis et partitifs.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>


                    <div><Article1 /></div>







                </>
            )}
        </Container>
    );
}



export default Article;

