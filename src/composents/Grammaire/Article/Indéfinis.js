import React, { useState } from 'react';

import maitre from './images/prof.jpg'
import voile from './images/voile.jpg'
import livre from './images/livre.jpg'

import chien from './images/chien.jpg'


import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';





// App Component
const InDéfinis = () => {
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
            <Title> Les articles Indéfinis</Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>"Un, une, des"</strong>

                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>

               <SectionContainer>
               <ImageContainer>
                        <img src={livre} alt="Teacher" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>J'ai un livre intéressant à lire.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>


                <SectionContainer>
               <ImageContainer>
                        <img src={voile} alt="voiture" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Elle a acheté une voile rouge.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>
                

                <SectionContainer>
               <ImageContainer>
                        <img src={chien} alt="voiture" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Ils ont des chiens adorables.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>




                </>
            )}
        </Container>
    );
}



export default InDéfinis;

