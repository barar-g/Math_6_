import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import styled from 'styled-components';

const StyledText = styled.div`
box-sizing: border-box;
width: 100%; 
height: 80%; 
transition: background-color 0.4s, transform 0.3s;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 1em;
font-family: 'Comic Sans MS', sans-serif;
&:hover {
    transform: scale(1.05);
}
`;

const AngleActivity = () => {
    const [{ angle }, setSpring] = useSpring(() => ({ angle: 8 }));
    const [message, setMessage] = useState("");
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const bind = useDrag(({ movement: [mx], down }) => {
        const maxAngle = 180;
        const newAngle = Math.min(Math.max(0, (mx / (isSmallScreen ? 300 : 500)) * 180), maxAngle);
        setSpring({ angle: newAngle });

        if (!down) {
            let typeAngle = "";
            if (newAngle <= 80) {
                typeAngle = "aigu";
            } else if (newAngle >= 85 && newAngle <= 95) {
                typeAngle = "droit";
            } else if (newAngle >= 100) {
                typeAngle = "obtus";
            }
            setMessage(`Vous avez formé un angle ${typeAngle}.`);
        }
    });

    const resetAngle = () => {
        setSpring({ angle: 8 });
        setMessage("");
    };

    const segmentStyle = {
        position: 'absolute',
        bottom: isSmallScreen ? '35%' : '50%', 
        left: '50%',
        width: '4px',
        height: isSmallScreen ? '150px' : '250px',
        borderRadius: '2px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        transformOrigin: 'bottom',
        transition: '0.2s',
        backgroundColor: '#2193b0'  // Couleur bleue uniforme pour tous les segments
    };

    const circleStyle = {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '16px',
        height: '16px',
        backgroundColor: '#2193b0',
        borderRadius: '50%',
    };

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '80%', maxWidth: '600px', height:'310%', margin: '50px auto', position: 'relative' }}>
                <CardContent style={{ backgroundColor: '#2193b0', color: '#fff', marginBottom: '20px', textAlign: 'center' }}>
                    <StyledText>Formez un angle et découvrez s'il est aigu, droit ou obtus!</StyledText>
                </CardContent>
                <div style={{ position: 'relative', width: '100%', height: isSmallScreen ? '300px' : '500px', margin: '0 auto' }}>
                    <div style={{ ...segmentStyle }}></div>
                    <animated.div {...bind()} style={{
                        ...segmentStyle,
                        transform: angle.to(a => `rotate(${a}deg)`),
                        cursor: 'ew-resize'
                    }}>
                        <div style={circleStyle}></div>
                    </animated.div>
                </div>
                <Button 
    startIcon={<ReplyIcon style={{ fontSize: '24px' }} />} 
    variant="contained" 
    color="primary" 
    onClick={resetAngle} 
    style={{
        position: 'absolute', // positionnement absolu
        right: '5px',  // positionnement à droite
        borderRadius: '50%',
       marginLeft : '80px'
    }}
></Button>
<CardContent></CardContent>

            </Card>
            <StyledText>{message}</StyledText>
        </div>
    );
}

export default AngleActivity;