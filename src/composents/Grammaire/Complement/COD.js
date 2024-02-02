import React, { useState } from 'react';
//import styled from '/styled-components';

import maitre from './Images/prof.jpg';
import chocolat from './Images/chocolat.jpg';
import livre from './Images/livre.jpg';
import voiture from './Images/voiture.jpg';
import tel from './Images/tel.jpg';
import personne from './Images/personne.jpg'

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';




// App Component
const COD = () => {
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
            <Title> Le Complément d'objet direct (COD)  </Title>
            <div></div>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            Le complément d'objet direct (COD) est un élément grammatical qui complète directement le verbe d'une phrase sans l'aide d'une préposition. Pour trouver le COD, vous pouvez poser la question "quoi?" ou "qui?" après le verbe.
                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>


                </SectionContainer>
                    <SectionContainer>

                        <ImageContainer>
                            <img src={chocolat} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p><h5>"J'aime le chocolat."</h5>

                                    Verbe : J'aime<br></br>
                                    COD : le chocolat</p>

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


                                <p><h5>"Elle lit un livre."</h5>

                                    Verbe : lit<br></br>
                                    COD : un livre
                                </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={voiture} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p> <h5>"Nous avons acheté une nouvelle voiture."</h5>

                                    Verbe : avons acheté<br></br>
                                    COD : une nouvelle voiture </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={tel} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p><h5> "Il regarde la télévision."</h5>

                                    Verbe : regarde<br></br>
                                    COD : la télévision </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>

                        <ImageContainer>
                            <img src={personne} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> <h5>"Tu connais cette personne?"</h5>

                                    Verbe : connais<br></br>
                                    COD : cette personne</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default COD;