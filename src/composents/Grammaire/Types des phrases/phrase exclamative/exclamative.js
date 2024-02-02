import React, { useState } from 'react';

import maitre from './images/exclamative.png';
import belle from './images/belle.jpg';
import difficile from './images/difficile.jpg';
import bavarde from './images/bavarde.jpg';
import jour from './images/jour.jpg';




import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';





// App Component
const Exclamaive = () => {
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
            <Title> La phrase exclamative  </Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                                LA PHRASE EXCLAMATIVE : elle sert à exprimer un sentiment comme
                                la joie, la peur, l’étonnement, l’admiration .Elle se termine par un point
                                d’exclamation.
                               
                                
                               

                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>



                    <SectionContainer>
                        <ImageContainer>
                            <img src={belle} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>
                                    <h4>Exemple 1:</h4>   Comme elle est belle !
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>

                        <ImageContainer>
                            <img src={difficile} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>

                                    <h4>Exemple 2:</h4>  Que c’est difficile!
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={bavarde} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>

                                    <h4>Exemple 3:</h4>   Tu dis n’ importe quoi!
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={jour} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>

                                    <h4>Exemple4 :</h4>  Quelle belle journée !
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>
                </>
            )}
        </Container>
    );
}



export default Exclamaive;