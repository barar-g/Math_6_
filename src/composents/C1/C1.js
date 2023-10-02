import React, { useState } from 'react';
import C1A1 from './C1A1'; 
import C1A2 from './C1A2'; 
import C1A3 from './C1A3';
import QCMC1 from './QCMC1';
import Container from '@mui/material/Container';
import teacherImage from '../Images/Prof1.png';
import styled from 'styled-components';
import teacher from '../Images/teacher.png';


const SectionContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;
`;



const ImageContainer = styled.div`
    flex: 0 0 auto;
    width: 170px; 
    margin-right: 20px; 
    img {
        width: 100%;
        height: auto;
    }
`;

const Card = styled.div`
    background-color: #007BFF;
    padding: 10px 20px;
    border-radius: 20px; 
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
const BodyText = styled.p`
    font-family: 'Roboto', sans-serif; 
    font-size: 16px;
    line-height: 1.5;
    color: white; // texte en blanc pour le contraste avec le fond bleu
    
    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const ContinueButton = styled.button`
display: block;
margin: 15px 0;
padding: 10px 20px;
border: none;
border-radius: 5px;
background-color: #007BFF;
color: white;
cursor: pointer;
font-family: 'Roboto', sans-serif;
font-size: 16px;

&:hover {
    background-color: #0056b3;
}
`;

const Separator = styled.div`
    height: 1px;
    background-color: #ddd; /* couleur de votre choix pour la barre de séparation */
    margin: 20px 0; /* marges pour espacer la barre des sections */
`;

const C1 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container >
           
                <SectionContainer>
                    <ImageContainer>
                        <img src={teacher} alt="Teacher" />
                    </ImageContainer>
                    <Card>
                        <BodyText>
                            Salut! Aujourd'hui, on va parler d'un sujet intéressant : Les grends nombers.
                        </BodyText>
                    </Card>
                   
                </SectionContainer>
                <br/>
         
            
            {section >= 1 && (<div> 

               <SectionContainer>
                    <ImageContainer>
                    <img src={teacherImage} alt="Enseignant"  />
                    </ImageContainer>
                    <Card>
                        <BodyText>
                        Écris un nombre et découvre ses détails.
                        </BodyText>
                    </Card>
                   
                </SectionContainer>
                <br/>
            <br/>
            <br/>
            <br></br>
            <br/>
            <br/>
              
                <div style={{ marginBottom: '50px', width: '100%', height:'100%' }}>
                  
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   
                        <C1A1 />
                    </div>
                    <Separator />
                </div>
                </div> )}
            
            {section >= 2 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                        <C1A2 />
                    </div>
                    <Separator />
                </div>
            )}

            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                    <C1A3 />
                    </div>
                      <Separator />
                </div>
            )}

            {section >= 4 && (<div><QCMC1 /> 
            </div>)}

            {section < 4 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
