"use client";
import { useEffect, useState } from "react";

export default function useSound(address: string) {
  const [sound, setSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setSound(new Audio(address));
  }, [address]);

  return sound;
}
