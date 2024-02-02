import React, { useState } from 'react';

import maitre from './images/prof.jpg'
import tapis from './images/tapis.jpg'
import voiture from './images/voiture.jpg'

import ecoute from './images/ecoute.jpg'


import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';





// App Component
const Définis = () => {
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
            <Title> Les articles définis</Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>"Le, la, les"</strong>

                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>

               <SectionContainer>
               <ImageContainer>
                        <img src={tapis} alt="Teacher" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Le chat dort sur le toit.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>


                <SectionContainer>
               <ImageContainer>
                        <img src={voiture} alt="voiture" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>La voiture est garée devant la maison.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>
                

                <SectionContainer>
               <ImageContainer>
                        <img src={ecoute} alt="voiture" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Les élèves écoutent attentivement.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>




                </>
            )}
        </Container>
    );
}



export default Définis;

