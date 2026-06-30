import ProfileAnimation from "./ProfileAnimation";
import ThreeDShapes from "./ThreeDShapes";

export default function Hero() {
  return (
    <section className="mb-6 grid grid-cols-1 items-center md:grid-cols-2 lg:mb-0 lg:min-h-[calc(100vh-70px)] lg:gap-5 lg:pb-9 2xl:min-h-[calc(70vh-70px)]">
      <ProfileAnimation />
      <ThreeDShapes />
    </section>
  );
}
