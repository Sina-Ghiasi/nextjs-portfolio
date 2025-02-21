"use client";
import { useEffect, useState } from "react";

export default function useSound(address: string) {
  const [knockSound, setKnockSound] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setKnockSound(new Audio(address));
  }, [address]);

  return knockSound;
}
