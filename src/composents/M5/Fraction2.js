import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Button, Container, Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import teacherImage from '../Images/Prof1.png';
import Chap10 from './Chap10';
import P2A4 from './P2A4';
import QuestionCard from './QcmFraction';

const PlayArea = styled(Box)({
  width: '100%',
  height: 300,
  border: '4px solid #4ECDC4',
  borderRadius: 15,
  boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  overflow: 'hidden',
});



const ImageBox = styled(Box)({
  position: 'absolute',
  cursor: 'pointer',
  zIndex: 10,
});



const TargetZone = styled(Box)({
  position: 'absolute',
  bottom: 10,
  height: 2,
  width: '100%',
  backgroundColor: '#FF8E53'
});

const MesurAire = () => {
  const targetZones = [
    { id: 1, x: 10, width: 50 },
    { id: 2, x: 70, width: 55 },
    { id: 3, x: 135, width: 60 },
    { id: 4, x: 205, width: 65 },
    { id: 5, x: 280, width: 70 },
  ];

  const [images, setImages] = useState(targetZones.map(zone => ({
    ...zone,
    y: Math.floor(Math.random() * 150),
    height: zone.width,
    color: ['#FF6B6B', '#4ECDC4', '#FFD166', '#8338EC', '#FF9F1C'][zone.id - 1],
  })));

  const [isCorrect, setIsCorrect] = useState(null);

  const onDragStop = (event, data, id) => {
    const newImages = images.map(img => {
      if (img.id === id) {
        return { ...img, x: data.x, y: data.y };
      }
      return img;
    });
    setImages(newImages);
  };

  const verifyOrder = () => {
    for (let i = 0; i < images.length - 1; i++) {
      if (images[i].x + images[i].width > images[i + 1].x || images[i].y + images[i].height < 250) {
        setIsCorrect(false);
        return;
      }
    }
    setIsCorrect(true);
  };

  const [section, setSection] = useState(0);
    const nextSection = () => {
      setSection(prevSection => prevSection + 1);
    };
    const [showSections, setShowSections] = useState([true, true, true, true]);




  return (
    <div> 
     <div>  {showSections[0] && (
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%', justifyContent: 'center' }}>
          <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />

          <Card sx={{
            borderRadius: 15,
            backgroundColor: '#2196F3',
            color: 'white',
            width: '70%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            mb: 1,
            display: 'flex',
            justifyContent: 'center',
            padding: 0.5,
            fontFamily: 'Comic Sans MS, sans-serif'
          }}>
            <CardContent>
              <Typography variant="body1" align="center">
                Ordonner les carrés du plus petit aire vers le plus grand sur les bars en bas.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <PlayArea>
          {targetZones.map(zone => (
            <TargetZone
              key={zone.id}
              sx={{
                left: zone.x,
                width: zone.width,
              }}
            />
          ))}
          {images.map((img) => (
            <Draggable
              key={img.id}
              defaultPosition={{ x: img.x, y: img.y }}
              onStop={(e, data) => onDragStop(e, data, img.id)}
              bounds="parent"
            >
              <ImageBox
                sx={{ width: img.width, height: img.height, backgroundColor: img.color }}
              />
            </Draggable>
          ))}
        </PlayArea>
        <Button variant="contained" color="primary" onClick={verifyOrder} sx={{ mt: 2 }}>
          Vérifier
        </Button>
        {isCorrect !== null && (
          <Box mt={2} fontSize="1.4rem" color={isCorrect ? 'green' : 'red'}>
            {isCorrect ? 'L’ordre est correct!' : 'L’ordre est incorrect. Essayez à nouveau!'}
          </Box>
        )}
      </Container>
     )}
     {section >= 1 && <Chap10 />}
            
            {section >= 2 && <P2A4 />}
            
            {section >= 3 && <QuestionCard />}
            
            {section < 3 && (  // Notez que j'ai utilisé '< 3' car vous avez 4 sections (0, 1, 2, 3)
                <Button variant="contained" color="primary" onClick={nextSection} sx={{ mt: 2, alignSelf: 'center' }}>
                    Continuer
                </Button>
            )}
      
      </div>
    </div>
  );
};

export default MesurAire;

