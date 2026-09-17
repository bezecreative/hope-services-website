"use client";

import { useState } from "react";
import { VIDEO } from "@/lib/site";
import s from "./VideoBlock.module.css";

const PlayIcon = () => (
  <svg className={s.play} viewBox="0 0 54 63" width="54" height="63" aria-hidden="true">
    <path d="M54 31.18 0 62.35V0Z" fill="currentColor" />
  </svg>
);

/**
 * Click-to-play video. Nothing heavy loads until the visitor presses play,
 * so the block costs nothing in Lighthouse.
 */
export default function VideoBlock() {
  const [playing, setPlaying] = useState(false);
  const inline = Boolean(VIDEO.src || VIDEO.embed);

  if (!inline) {
    return (
      <a className={s.video} href={VIDEO.link} target="_blank" rel="noopener noreferrer" aria-label={`Watch the ${VIDEO.title} (opens in a new tab)`}>
        <PlayIcon />
      </a>
    );
  }

  if (!playing) {
    return (
      <button
        type="button"
        className={s.video}
        style={VIDEO.poster ? { backgroundImage: `url(${VIDEO.poster})` } : undefined}
        onClick={() => setPlaying(true)}
        aria-label={`Play the ${VIDEO.title}`}
      >
        <PlayIcon />
      </button>
    );
  }

  return (
    <div className={s.video}>
      {VIDEO.src ? (
        <video className={s.media} src={VIDEO.src} poster={VIDEO.poster || undefined} controls autoPlay playsInline />
      ) : (
        <iframe className={s.media} src={VIDEO.embed} title={VIDEO.title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
      )}
    </div>
  );
}
