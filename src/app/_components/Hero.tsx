import ProfileAnimation from "./ProfileAnimation";
import ThreeDShapes from "./ThreeDShapes";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center lg:min-h-[calc(100vh-70px)] 2xl:min-h-[calc(70vh-70px)] mb-6 lg:mb-0">
      <ProfileAnimation />
      <ThreeDShapes />
    </section>
  );
}
