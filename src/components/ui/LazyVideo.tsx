'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps {
  src: string;
  /** Quando false, pausa e não carrega (ex.: slides laterais da vitrine). */
  enabled?: boolean;
  className?: string;
}

export default function LazyVideo({ src, enabled = true, className = '' }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!enabled) {
      video.pause();
      return;
    }

    const ensureSource = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;
      // Garante muted (propriedade + atributo) para a política de autoplay
      video.defaultMuted = true;
      video.muted = true;
      video.setAttribute('muted', '');
      video.src = src;
      video.load();
      video.play().catch(() => {});
    };

    // Sem IntersectionObserver: carrega direto
    if (typeof IntersectionObserver === 'undefined') {
      ensureSource();
      return;
    }

    // Carrega só quando perto da viewport; pausa quando sai
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ensureSource();
          videoRef.current?.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: '250px 0px', threshold: 0.01 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src, enabled]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      tabIndex={-1}
      aria-hidden
      onLoadedData={() => setVisible(true)}
      onPlaying={() => setVisible(true)}
      onCanPlay={() => {
        const v = videoRef.current;
        if (v && v.paused) v.play().catch(() => {});
      }}
      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    />
  );
}
