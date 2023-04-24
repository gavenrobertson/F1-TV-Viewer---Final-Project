import React, { useState } from 'react';
import Sound from 'react-sound';
import f1theme from './pages/f1theme.mp3';

const SoundPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLoading = (event) => {
    console.log('Loading', event);
  };

  const handlePlaying = (event) => {
    console.log('Playing', event);
  };

  const handleFinishedPlaying = () => {
    console.log('Finished');
  };

  return (
    <div>
      <button onClick={handlePlayClick}>{isPlaying ? 'Stop' : 'Play'}</button>
      <Sound
        url={f1theme}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={300}
        onLoading={handleLoading}
        onPlaying={handlePlaying}
        onFinishedPlaying={handleFinishedPlaying}
      />
    </div>
  );
};

export default SoundPlayer;
