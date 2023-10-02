import React, { useState } from 'react';
import Fraction from './Fraction'; 
import Fraction1 from './Fraction1'; 
import Fraction3 from './Fraction3';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import teacherImage from '../Images/Prof1.png';
import QcmFraction from './QcmFraction';
import Bande from './Bande';
import styled from 'styled-components';

const ContinueButton = styled.button`
    display: block;
    margin: 0px 0;
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

const Chap13 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container maxWidth="md" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
            
            {section >= 0 && <Bande />}
            
            {section >= 1 && (
                <Card style={{ marginBottom: '20px', width: '100%' }}>
                    <CardContent>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                            <Fraction />
                        </div>
                    </CardContent>
                </Card>
            )}
            
            {section >= 2 && (
                <Card style={{ marginBottom: '20px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                        <Fraction1 />
                    </div>
                </Card>
            )}

            {section >= 3 && <QcmFraction />}

            {section >= 4 && (
                <Card style={{ marginBottom: '20px', width: '100%' }}>
                    <CardContent>
                        <Fraction3 />
                    </CardContent>
                </Card>
            )}

            {section < 4 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default Chap13;










