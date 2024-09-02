'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubePlayerAPIReady: () => void;
    ytPlayer: any;
  }
}

const VideoInicio: React.FC = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Definir la variable global ytPlayer
    window.ytPlayer = null;

    // Cargar la API de YouTube Player
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Inicializar el reproductor cuando la API esté lista
    window.onYouTubePlayerAPIReady = () => {
      window.ytPlayer = new window.YT.Player(playerRef.current, {
        videoId: 'RV9l-pVc_FE',
        playerVars: {
          autoplay: 1,
          controls: 0,
          autohide: 1,
          wmode: 'transparent',
          showinfo: 0,
          loop: 1,
          mute: 1,
          modestbranding: 1,
          enablejsapi: 1,
          progressBar: false,
          rel: 0, // Evita mostrar videos relacionados al final
          iv_load_policy: 3, // Oculta las anotaciones del video
          fs: 0, // Deshabilita el botón de pantalla completa
          disablekb: 1, // Deshabilita los controles del teclado
          playsinline: 1, // Reproduce el video en línea en dispositivos móviles
          cc_load_policy: 0, // Oculta los subtítulos
          branding: 0, // Oculta el logo de YouTube
          playlist: 'RV9l-pVc_FE' // Añadir el mismo video a la lista de reproducción para el bucle infinito
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          },
        }
      });
    };
  }, []);

  return (
    <div className="yt-embed">
      <div ref={playerRef}  data-id="6lK0rl1TnKc" id="yt-embed-player" className="yt-embed-player"></div>
      <div className="yt-embed-overlay"></div>
    </div>
  );
};

export default VideoInicio;