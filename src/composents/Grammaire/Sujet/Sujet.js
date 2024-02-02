import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import './sujet.css'

import maitre from './Images/prof.jpg';
import chat from './Images/chat dort.jpg';
import enfants from './Images/enfants jouent.jpg';
import prepare from './Images/preparent.jpg';
import oiseaux from './Images/oiseaux.jpg';
import loup from './Images/loup.jpg';



import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';
import ExerciceSujet from './ExerciceSujet';




// App Component
const Sujet = () => {
  const navigate = useNavigate();


    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true, true, true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21, setShowP2A21] = useState(false);

    const [afficherNouveauComposant, setAfficherExercises] = useState(false);

    const handleClicBouton = () => {
        // Mettez à jour l'état pour afficher le nouveau composant
        setAfficherExercises(true);
    };


    const handleClick = () => {
        // Avant
        // history.push('/chemin-de-navigation');
    
        // Après
        navigate('/ExSuj');
      };

    return (
        <Container>
            <div>
                <Title> Le sujet </Title>
                <button  className="boutonVert" onClick={handleClick}>Exercices</button>
                
               
                
            </div>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            Le sujet d'une phrase est celui qui fait l'action ou sur lequel l'action est effectuée
                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>


                    <div>



                        {/* Affichez le nouveau composant en fonction de l'état */}
                        {/*  {afficherNouveauComposant && <ExerciceSujet data={DataSujet} />}  */}
                    </div>




                    <SectionContainer>
                        <ImageContainer>
                            <img src={chat} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p> <strong> Le chat</strong> dort.</p>

                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <br></br>
                        <ImageContainer>
                            <img src={enfants} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p> <strong> Les enfants</strong> jouent dans le parc.</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={prepare} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p>  <strong> ils </strong> préparent le dîner. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={oiseaux} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p> <strong> Les oiseaux et les abeilles</strong>  butinent les fleurs.</p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={loup} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> Dans la forêt, marchaient <strong> des loups affamés</strong>  </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default Sujet;