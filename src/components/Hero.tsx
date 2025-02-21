import ProfileAnimation from "./ProfileAnimation";
import ThreeDShapes from "./ThreeDShapes";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:min-h-[calc(100vh-70px)]">
      <ProfileAnimation />
      <ThreeDShapes />
    </section>
  );
}
