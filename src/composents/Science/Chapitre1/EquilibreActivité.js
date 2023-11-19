import React, { useState } from 'react';
import PatesImage from '../../Images/pates.png';
import RizImage from '../../Images/Riz.png';
// Continuez à importer d'autres images ici

function FoodQuiz() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hovered, setHovered] = useState(null);

  const images = [
    { src: PatesImage, name: 'Pâtes', isHighInCarbs: true },
    { src: RizImage, name: 'Riz', isHighInCarbs: true },
    // Ajoutez d'autres images ici
  ];

  const handleSelect = (image) => {
    setSelectedAnswer(image.name);
    setIsAnswered(true);
    setIsCorrect(image.isHighInCarbs);
  };

  const imageStyle = (isHovered) => ({
    cursor: 'pointer',
    margin: '10px',
    width: isHovered ? '110px' : '100px',
    height: isHovered ? '110px' : '100px',
    transition: 'all 0.3s ease',
  });

  const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  return (
    <div>
      <h2>Lequel de ces éléments est une source très riche en glucides ?</h2>
      <div style={imageContainerStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.name}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleSelect(image)}
            style={imageStyle(hovered === index)}
          />
        ))}
      </div>
      {isAnswered && (
        <p>
          Votre réponse : {selectedAnswer} - {isCorrect ? 'Correcte' : 'Incorrecte'}
        </p>
      )}
    </div>
  );
}

export default FoodQuiz;
