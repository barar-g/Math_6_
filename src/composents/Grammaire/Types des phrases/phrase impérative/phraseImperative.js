import React, { useState } from 'react';

import maitre from './images/imperative.jpg';
import affaire from './images/affaires.jpg';
import porte from './images/porte.png';
import bavarde from './images/bavarde.png';
import touche from './images/touche.jpg';




import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';





// App Component
const PhraseImperative = () => {
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
            <Title> La phrase impérative </Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                                La phrase IMPERATIVE : elle sert à donner un ordre ou à interdire quelque
                                chose. Elle se termine par un point ou un point d’exclamation.
                              
                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>



                    <SectionContainer>
                        <ImageContainer>
                            <img src={affaire} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>
                                    <h4>Exemple 1:</h4>  Viens ici .Tu dois ranger tes affaires.
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>

                        <ImageContainer>
                            <img src={porte} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>
                                    
                                    <h4>Exemple 2:</h4>  Ferme la porte.
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={bavarde} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>
                                    
                                    <h4>Exemple :</h4>  Arrête de parler pendant l'examen.
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={touche} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>
                                    
                                    <h4>Exemple :</h4>  Ne touche pas à ce bouton.
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>
                </>
            )}
        </Container>
    );
}



export default PhraseImperative;