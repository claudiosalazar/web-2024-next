'use client';

const VideoInicio: React.FC = () => {
  return (
    <video autoPlay loop muted>
      <source src='/video/fondo-video-inicio.mp4' type='video/mp4' />
    </video>
  );
};

export default VideoInicio;