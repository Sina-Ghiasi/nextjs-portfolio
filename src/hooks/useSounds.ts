"use client";
import { useEffect } from "react";

const audioCache: Record<string, HTMLAudioElement> = {};

export default function useSound(address: string) {
  useEffect(() => {
    if (!address) return;

    if (!audioCache[address]) {
      const newAudio = new Audio(address);
      newAudio.load();
      audioCache[address] = newAudio;
    }
  }, [address]);

  const play = () => {
    if (!address || !audioCache[address]) return;

    const soundClone = audioCache[address].cloneNode(true) as HTMLAudioElement;

    soundClone.play().catch((err) => console.warn(err));
  };

  return play;
}
