import React, { useState } from 'react';
//import styled from '/styled-components';

import conjonction from './images/conjonction.png';
import chocolat from './images/chocolat.jpg';
import café from './images/thé.jpg';
import travel from './images/travel.jpg';
import educate from './images//educate.jpg';
import pluit from './images/pluit.jpg';

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';




// App Component
const Coordination = () => {
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
            <Title>Les conjonctions </Title>
            <div></div>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                        Les conjonctions de coordination sont des mots qui servent à relier des 
                        éléments de même nature dans une phrase, tels que des mots, des groupes de mots ou des propositions
                         indépendantes. Les conjonctions de coordination sont souvent utilisées pour établir des relations de coordination, 
                        d'addition, d'opposition, ou encore de conséquence.                       
                          
                          </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={conjonction} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={chocolat} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p> Il aime le chocolat <strong> et</strong> les fraises. .</p>

                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <br></br>
                        <ImageContainer>
                            <img src={café} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p> Tu peux choisir le thé  <strong> ou</strong> le café. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={travel} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p>  Elle veut étudier à l'étranger, <strong> mais</strong> elle hésite sur le pays. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={educate} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p> Il a bien travaillé, <strong>car</strong> il a obtenu de bonnes notes.  .</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={pluit} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> Il pleut, <strong> donc</strong>  nous devrions prendre un parapluie.  </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default Coordination;