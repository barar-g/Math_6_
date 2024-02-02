import React, { useState } from 'react';
//import styled from '/styled-components';

import conjonction from './images/prof.jpg';
import eleve from './images/eleve.png';
import travel from './images/travel.jpg';

import chat from './images/chat.jpg';
import sujet from './images/sujet.jpg';
import cadeau from './images/cadeaux.jpg';

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';
import { useNavigate } from 'react-router-dom';




// App Component
const Préposition = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true, true, true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21, setShowP2A21] = useState(false);

    const navigate = useNavigate();

    
    const handleClick = () => {
       
        navigate('/PrepEx');
      };


    return (
        <Container>
            <Title> Les prépositions </Title>
          
     <button  className="boutonVert" onClick={handleClick}>Exercices</button>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                        Les prépositions sont des mots invariables qui établissent une relation de lieu,
                         de temps, de manière, de cause, ou d'autres relations logiques entre les éléments d'une phrase.
                         Les prépositions sont généralement suivies d'un groupe nominal, d'un pronom, ou d'une clause. 
                         <h4>              
                           À,Après, Avant ,Avec ,Chez ,Dans ,De ,Depuis ,En ,Entre ,Hors,Jusque,Par ,Pour ,Sans ,Sous ,Sur ,Vers</h4>                     
                          
                          </BodyText>
            

                    </Card>
                    <ImageContainer>
                        <img src={conjonction} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={eleve} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 1:</h3>

                                <p> Je vais   <strong> à</strong> l'école.</p>

                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <br></br>
                        <ImageContainer>
                            <img src={travel} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 2:</h3>


                                <p> Il rêve  <strong> de  </strong>  voyager.    </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={chat} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 3:</h3>


                                <p>  Le chat est <strong> dans</strong>  la boîte. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={sujet} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 4 :</h3>


                                <p> Ils discutent  <strong>sur</strong>  un sujet important. </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={cadeau} alt="oiseaux" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h3>Exemple 5 :</h3>


                                <p> Le cadeau a été offert <strong> par</strong>  mon frère.    </p>
                            </BodyText>

                        </Card>

                    </SectionContainer>

                </>




            )}
        </Container>

    );
}



export default Préposition;