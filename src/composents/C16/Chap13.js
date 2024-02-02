import React, { useState } from 'react';
import Fraction from './Fraction'; 
import Fraction1 from './Fraction1'; 
import Fraction3 from './Fraction3';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import teacherImage from '../Images/Prof1.png';
import QCMC16 from './QCMC16';
import Bande from './Bande';
import styled from 'styled-components';
import {ContinueButton} from '../Styles/MajorStyles';





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

            {section >= 3 && <QCMC16 />}

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










