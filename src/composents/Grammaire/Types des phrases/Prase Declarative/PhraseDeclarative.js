import React, { useState } from 'react';

import maitre from '../Prase Declarative/Images1/declarative.PNG';

import Stylo from '../Prase Declarative/Images1/stylo.jpg';

import soleil from '../Prase Declarative/Images1/soleil.png';
import fini from '../Prase Declarative/Images1/fini.jpg';
import sale from '../Prase Declarative/Images1/sale.jpg';

import horrible from '../Prase Declarative/Images1/horrible.jpg';




import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';


// App Component
const PhraseDeclarative = () => {
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
            <Title> La phrase Déclarative </Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                                La phrase Déclarative :elle sert à énoncer quelque chose, un fait, une opinion.
                                Elle sert aussi à décrire, à raconter. Elle se termine par un point.
                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={maitre} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={Stylo} alt="stylo" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 1 :</h4>
                                <p> J’ai perdu mon stylo.
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={soleil} alt="stylo" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 2:</h4>
                                <p> Le soleil se lève à l'est. </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={fini} alt="stylo" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 3 :</h4>
                                <p>Elle a fini son travail.
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={sale} alt="stylo" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 4:</h4>
                                <p> Cette homme est sale .
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={horrible} alt="stylo" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 5 :</h4>
                                <p> Ce film est horrible.
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>
                </>
            )}
        </Container>
    );
}



export default PhraseDeclarative;