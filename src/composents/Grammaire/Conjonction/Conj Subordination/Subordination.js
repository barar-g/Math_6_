import React, { useState } from 'react';
//import styled from '/styled-components';

import maitre from './images/prof.jpg';
import fatigué from './images/fatigué.jpg'
import dispo from './images/dispo.png';
import argent from './images/argents.jpg';
import travail from './images/travail.jpg';
import attendre from './images/attendre.jpg'

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';




// App Component
const Subordination = () => {
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
            <Title>  Conjonctions de subordination  </Title>
            <div></div>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                        Les conjonctions de subordination sont des mots qui introduisent des propositions subordonnées, 
                        dépendantes d'une proposition principale. Ces conjonctions indiquent la nature de la relation entre la 
                        proposition principale et la proposition subordonnée. 
                        </BodyText>

                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>

                </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={fatigué} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p> Il est fatigué <strong>parce qu</strong>' il a travaillé toute la journée. .</p>

                            </BodyText>


                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={dispo} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p>Il viendra <strong>à condition que </strong> tu sois disponibl.</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={argent} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p> Ils économisent de l'argent <strong>pour que </strong> leurs enfants puissent aller à l'université.   </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={travail} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p> il rentrera à la maison <strong>après que </strong>  son travail sera terminé.     </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={attendre} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> <strong>Même si</strong> tu es en retard, nous t'attendrons.    </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default Subordination;