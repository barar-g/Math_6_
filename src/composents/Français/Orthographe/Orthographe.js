import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import maitre from '../../Images/Prof1.png'

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../Styles/MajorStyles';

// App Component
const Orthographe = () => {
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
      
        navigate('/ExamenOrthographe');
    };

   
    return (
        <Container>
            <div>
                <Title> Orthographes</Title>

            </div>

            {showSections[0] && (
                <><SectionContainer>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                    <Card>

                        <BodyText>
                            Dans cette partie on va aborder des  exercices extraites à partir des examens des années précédentes.
                        </BodyText>
                    </Card>
                   
                </SectionContainer>

                


<br></br>
<div> <button className="boutonVert" onClick={handleClick}>Commencer</button></div>
 

                    
                </>

            )}
        </Container>

    );
}



export default Orthographe;