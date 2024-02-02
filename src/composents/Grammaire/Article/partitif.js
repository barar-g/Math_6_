import React, { useState } from 'react';

import maitre from './images/prof.jpg'
import pain from './images/pain.jpg'
import limonade from './images/limonade.jpg'

import etudiant from './images/etudiants.jpg'


import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';





// App Component
const Partitif = () => {
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
            <Title> Les articles partitifs</Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Du", "de la", "de l'", "des"</strong>

                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>

               <SectionContainer>
               <ImageContainer>
                        <img src={pain} alt="Teacher" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Je voudrais du pain, s'il vous plaît.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>


                <SectionContainer>
               <ImageContainer>
                        <img src={limonade} alt="voiture" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Elle boit de la limonade.</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>
                

                <SectionContainer>
               <ImageContainer>
                        <img src={etudiant} alt="voiture" />
                    </ImageContainer>

                    <Card>

                        <BodyText>
                            <p>
                               <strong>Il y a des étudiants dans la classe</strong>

                            </p>

                        </BodyText>
                    </Card>
                    
                </SectionContainer>




                </>
            )}
        </Container>
    );
}



export default Partitif;