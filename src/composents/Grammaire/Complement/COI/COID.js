import React, { useState } from 'react';
//import styled from '/styled-components';

import maitre from './images/prof.jpg';
import cadeau from './images/cadeaux.jpg';
import livre from './images/livre.png';
import lettre from './images/lettre.jpg';
import fleur from './images/fleur.jpg';
import question from './images/question.jpg'

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';




// App Component
const COI = () => {
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
                            Le complément d'objet indirect (COI) est un élément grammatical qui complète le verbe d'une phrase en indiquant à qui ou à quoi l'action du verbe est destinée. Pour trouver le COI, on peut poser les questions "à qui ?" ou "à quoi ?" après le verbe
                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>
                    <SectionContainer>

                        <ImageContainer>
                            <img src={cadeau} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p><h5>"Il a donné un cadeau à sa sœur."</h5>

                                    Verbe : a donné <br></br>
                                    COI : à sa sœur</p>

                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={livre} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p><h5>Elle a prêté son livre à son ami."</h5>

                                    Verbe : a prêté<br></br>
                                    COI : à son ami
                                </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={lettre} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p> <h5>"Nous écrivons une lettre à nos grands-parents."</h5>



                                    Verbe : écrivons <br></br>
                                    COI : à nos grands-parents </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={fleur} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p><h5> "Tu as offert des fleurs à ta mère?"</h5>



                                    Verbe : as offert <br></br>
                                    COI : à ta mère</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={question} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> <h5>"Elle a répondu à la question."</h5>

                                    Verbe : a répondu <br></br>
                                    COI : à la question</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default COI;