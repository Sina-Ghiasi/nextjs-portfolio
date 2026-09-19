import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once globally for the application
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
