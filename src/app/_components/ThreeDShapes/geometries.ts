import {
  OctahedronGeometry,
  DodecahedronGeometry,
  IcosahedronGeometry,
  CapsuleGeometry,
  TorusGeometry,
} from "three";
export const geometries = [
  {
    geometry: new OctahedronGeometry(2.5),
    position: [0, 0, 0],
    rate: 0.3,
  },
  {
    geometry: new DodecahedronGeometry(1.5),
    position: [1.4, 1.5, -3],
    rate: 0.6,
  },

  {
    geometry: new IcosahedronGeometry(0.8),
    position: [-0.8, -0.75, 3],
    rate: 0.6,
  },
  {
    geometry: new CapsuleGeometry(0.5, 1, 4, 16),
    position: [1, -0.75, 3],
    rate: 0.6,
  },

  {
    geometry: new TorusGeometry(1, 0.4, 16, 32),
    position: [-1.7, 1, -3],
    rate: 0.6,
  },
];
