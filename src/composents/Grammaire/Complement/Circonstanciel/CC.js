import React, { useState } from 'react';
//import styled from '/styled-components';

import maitre from './images cc/prof.jpg';
import travail from './images cc/travail.jpg';
import vac from './images cc/vacances.jpg';
import attention from './images cc/attention.jpg';
import paris from './images cc/paris.jpg';
import reussi from './images cc/reussi.jpg'

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';




// App Component
const CC = () => {
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
            <Title> Le complément d'objet indirect (COI) </Title>
            <div></div>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            Le complément circonstanciel (CC) est un élément grammatical qui apporte des informations supplémentaires sur les circonstances entourant l'action du verbe dans une phrase. Contrairement aux compléments d'objet (direct ou indirect) qui complètent directement le verbe, le complément circonstanciel donne des détails sur le temps,
                            le lieu, la manière, la cause, la conséquence, etc.
                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                 </SectionContainer>



                    <SectionContainer>
                        <ImageContainer>
                            <img src={travail} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p><h5>"Il travaille souvent le week-end."</h5>

                                    CC: : souvent
                                </p>

                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={vac} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p><h5>Ils partent en vacances demain.</h5>


                                    CC:demain

                                </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={attention} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p> <h5>"Elle a étudié la leçon avec attention.</h5>
                                    CC: avec attention"
                                </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={paris} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p><h5> "Ils ont visité Paris pendant les vacances."</h5>"

                                    CC: à Paris"


                                </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={reussi} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> <h5>"Elle a réussi grâce à ses efforts."</h5>

                                    CC: grâce à ses efforts"
                                </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default CC;