// Kangaroo.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import kangarooImg from '../Images/kangaro.png';
import MessageBubble from '../MessageBubble'; // N'oubliez pas d'importer la nouvelle composante

function Kangaroo({ position, numJumps, jumpDistance, showMessage }) {
  

 

  const styles = useSpring({
    from: { transform: `translate3d(0, 0, 0)` },
    to: {
      transform: `translate3d(${Math.min(

        position * (7.5),
        100 - 7.5
      )}vw, ${7.5 * Math.sin(position * Math.PI)}vh, 0)`,

    },
    config: {
      tension: 170,
    },
  });
  



  return (
    <>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <animated.img
          style={{
            ...styles,
            width: '40px',
            marginBottom: '10px',
            marginRight: '50px', 
            marginLeft:'-25px'
          }}
          src={kangarooImg}
          alt="kangaroo"
        />
        {showMessage && (
          <animated.div
            style={{
              ...styles,
              marginTop: '-40px',
              position: 'absolute',
              left: '-230px', // Placer le message à gauche du kangourou
              zIndex: 1, // Assurer que le message est au-dessus du kangourou
            }}
          >
            
          </animated.div>
        )}
      </div>
    </>
  );
}

export default Kangaroo;




