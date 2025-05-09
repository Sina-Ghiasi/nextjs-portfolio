import { MeshStandardMaterial, MeshPhysicalMaterial } from "three";
export const materials = [
  // Gold
  new MeshStandardMaterial({
    color: 0xffd700,
    metalness: 1.0,
    roughness: 0.3,
    emissive: 0xaa8800,
    emissiveIntensity: 0.1,
  }),
  // Silver
  new MeshStandardMaterial({
    color: 0xc0c0c0,
    metalness: 1.0,
    roughness: 0.2,
  }),
  // Copper
  new MeshStandardMaterial({
    color: 0xb87333,
    metalness: 1.0,
    roughness: 0.4,
  }),
  //Plastic (pink)
  new MeshStandardMaterial({
    color: 0xe35778,
    metalness: 0.0,
    roughness: 0.1,
  }),
  //Plastic (light green)
  new MeshStandardMaterial({
    color: 0x8bc34a,
    metalness: 0.0,
    roughness: 0.1,
  }),
  //Plastic (orange)
  new MeshStandardMaterial({
    color: 0xff7900,
    metalness: 0.0,
    roughness: 0.1,
  }),
  //Plastic (#sky blue)
  new MeshStandardMaterial({
    color: 0x03afed,
    metalness: 0.0,
    roughness: 0.1,
  }),
  //Fabric (teal)
  new MeshStandardMaterial({
    color: 0x007c7c,
    metalness: 0.0,
    roughness: 0.7,
  }),
  // Onyx (Deep Black)
  new MeshPhysicalMaterial({
    color: 0x0f0f0f,
    metalness: 0.4,
    roughness: 0.1,
    clearcoat: 1.0,
    clearcoatRoughness: 0.2,
  }),
  // Emerald
  new MeshPhysicalMaterial({
    color: 0x086c55,
    metalness: 0.0,
    roughness: 0.05,
    transparent: true,
    opacity: 0.8,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  }),
  // Ruby (Deep Red Gemstone)
  new MeshPhysicalMaterial({
    color: 0x9b111e,
    metalness: 0.0,
    roughness: 0.05,
    transparent: true,
    opacity: 0.8,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  }),

  //Ceramic (snow white)
  new MeshPhysicalMaterial({
    color: 0xf0f4f5,
    metalness: 0.0,
    roughness: 0.3,
    clearcoat: 1.0,
    clearcoatRoughness: 0.2,
  }),
];
