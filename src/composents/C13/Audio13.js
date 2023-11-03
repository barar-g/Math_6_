import React from 'react';
import  AudioPlayer  from '../Audio/AudioPlayer';
import {
  Container,
} from '../Styles/MajorStyles';

const audio = {
  url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
};

const App = () => {
  return (
    <Container>
      <div
      >
        <AudioPlayer 
          url={audio.url}
        />
      </div>
    </Container>
  );
};

export default App;
