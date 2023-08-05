// Kangaroo.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import kangarooImg from './kangaro.png';
import MessageBubble from './MessageBubble'; // N'oubliez pas d'importer la nouvelle composante

function Kangaroo({ position, numJumps, jumpDistance, showMessage }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = useSpring({
    from: { transform: `translate3d(0px, 0, 0)` },
    to: {
      transform: `translate3d(${Math.min(
        position * 100,
        windowWidth - 100
      )}px, ${50 * Math.sin(position * Math.PI)}px, 0)`,
    },
    config: {
      tension: 170,
    },
  });

  const message = `J'ai sauté ${numJumps} fois, et dans chaque saut, j'ai parcouru ${jumpDistance} mètres. Donc, la distance totale parcourue est ${numJumps} multiplié par ${jumpDistance} métres  ce qui donne   ${position} mètres.`;

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
            width: '100px',
            marginBottom: '10px',
            marginRight: '50px', // Ajout de la marge entre le kangourou et le message
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
            <MessageBubble message={message} />
          </animated.div>
        )}
      </div>
    </>
  );
}

export default Kangaroo;




