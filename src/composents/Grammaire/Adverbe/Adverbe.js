import React, { useState } from 'react';
//import styled from '/styled-components';

import maitre from './images/prof.jpg';
import rapide from './images/rapide.jpg'
import chante from './images/chante.jpg';
import loin from './images/loin.jpg';
import tard from './images/tard.jpg';
import dur from './images/travail.jpg'

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';
import { useNavigate } from 'react-router-dom';




// App Component
const Adjectif = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true, true, true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21, setShowP2A21] = useState(false);
    const navigate=useNavigate();
    const handleClick = () => {
        // Avant
        // history.push('/chemin-de-navigation');
    
        // Après
        navigate('/AdverbeExercice');
      };



    return (
        <Container>
            <Title>  L'adverbe  </Title>
         
<button  className="boutonVert" onClick={handleClick}>Exercices</button>
            <div></div>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                        L'adverbe est une catégorie de mots qui modifie, précise ou complète le sens d'un verbe, d'un adjectif, ou parfois d'un autre adverbe. Les adverbes peuvent fournir des informations sur la manière, le lieu, le temps, la fréquence, l'intensité, etc. 
                        Ils jouent un rôle important dans la modification du sens des phrases.
                        </BodyText>

                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>

                </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={rapide} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p> Il court <strong>rapidement</strong>.</p>

                            </BodyText>


                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={chante} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p>Elle chante  <strong>magnifiquement.</strong>.</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={loin} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p> Nous vivons  <strong>loin </strong>de la ville. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={tard} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p> Ils arrivent   <strong>tard </strong>  à la réunion. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={dur} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> Il travaille <strong>dur</strong>  tous les jours.   </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default Adjectif;