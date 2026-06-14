type LoadingSize = "xs" | "sm" | "md" | "lg" | "xl";

export default function Loading({ size = "md" }: { size?: LoadingSize }) {
  return (
    <span
      className={`loading loading-infinity loading-${size}`}
      aria-label="loading"
    />
  );
}
