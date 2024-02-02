import React, { useState } from 'react';
//import styled from '/styled-components';

import maitre from './images/prof.jpg';
import fleur from './images/fleur.jpg'
import rouge from './images/rouge.jpg';
import idé from './images/idé.jpg';
import montagne from './images/montagne.jpg';
import etoilé from './images/etoilé.jpg';

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
        navigate('/AdjectiveExercice');
      };

      


    return (
        <Container>
            <Title> L'adjectif  </Title>
            <button  className="boutonVert" onClick={handleClick}>Exercices</button>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            L'adjectif est une catégorie de mots qui qualifie ou précise un nom (substantif) en apportant des informations sur ses caractéristiques, ses propriétés ou ses qualités. Les adjectifs peuvent exprimer des aspects tels que la couleur,
                            la taille, la forme, l'âge, l'origine, l'état, etc.
                        </BodyText>

                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>

                </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={fleur} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p>La <strong>belle</strong> fleur a éclos dans le jardin.</p>

                            </BodyText>


                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={rouge} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p>Il porte un manteau <strong>rouge</strong>.</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={idé} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p> C'est une idée <strong>intéressante</strong>. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={montagne} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p> La montagne est <strong>haute</strong> et <strong>majestueuse.</strong> </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={etoilé} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> Le ciel était <strong>étoilé</strong> la nuit dernière. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default Adjectif;