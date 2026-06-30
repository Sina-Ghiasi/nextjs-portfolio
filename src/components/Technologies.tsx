export default function Technologies({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="badge px-2.5 pt-2.5 pb-2 badge-sm badge-info"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
