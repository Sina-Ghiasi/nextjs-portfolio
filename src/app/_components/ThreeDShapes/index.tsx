"use client";
import { Mesh, Material, BufferGeometry } from "three";
import { Canvas, ThreeEvent } from "@react-three/fiber";
import { ContactShadows, Float, Environment, Html } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { geometries } from "./geometries";
import { materials } from "./materials";
import useSound from "@/hooks/useSounds";
import { suspend } from "suspend-react";
import Loading from "@/components/Loading";
const bridgeHDRI = () =>
  import("@pmndrs/assets/hdri/bridge.exr").then((module) => module.default);

export default function ThreeDShapes() {
  return (
    <div className="h-[300px] md:h-full max-h-[500px]">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 21], fov: 30, near: 1, far: 40 }}
      >
        <Suspense
          fallback={
            <Html>
              <Loading size="lg" />
            </Html>
          }
        >
          <Geometries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment files={suspend(bridgeHDRI)} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Geometries() {
  return geometries.map(({ geometry, position, rate }, index) => (
    <Geometry
      key={JSON.stringify({ position, index })}
      geometry={geometry}
      materials={materials}
      position={[position[0] * 2, position[1] * 2, position[2] * 2]}
      rate={rate}
    />
  ));
}

function Geometry({
  geometry,
  materials,
  position,
  rate,
}: {
  geometry: BufferGeometry;
  materials: Material[];
  position: [number, number, number];
  rate: number;
}) {
  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);
  const playKnockSound = useSound("/sounds/knock.ogg");
  const [initialMaterial] = useState(() => gsap.utils.random(materials));

  useGSAP(
    () => {
      setVisible(true);
      if (meshRef.current) {
        gsap.from(meshRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.5,
          delay: 0.3,
          ease: "elastic.out(1, 0.3)",
        });
      }
    },
    { scope: meshRef },
  );

  function getRandomMaterial() {
    return gsap.utils.random(materials);
  }

  function handleClick(e: ThreeEvent<MouseEvent>) {
    playKnockSound();

    if (e.object instanceof Mesh) {
      gsap.to(e.object.rotation, {
        x: `+=${gsap.utils.random(0, 2)}`,
        y: `+=${gsap.utils.random(0, 2)}`,
        z: `+=${gsap.utils.random(0, 2)}`,
        duration: 1.3,
        ease: "elastic.out(1, 0.3)",
        yoyo: true,
      });
      e.object.material = getRandomMaterial();
    }
  }

  const handleMouseOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseOut = () => {
    document.body.style.cursor = "default";
  };

  return (
    <group position={position} ref={meshRef}>
      <Float
        speed={5 * rate}
        rotationIntensity={6 * rate}
        floatIntensity={5 * rate}
      >
        <mesh
          geometry={geometry}
          material={initialMaterial}
          visible={visible}
          onClick={handleClick}
          onPointerOver={handleMouseOver}
          onPointerOut={handleMouseOut}
        />
      </Float>
    </group>
  );
}
