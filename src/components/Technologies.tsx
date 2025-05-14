export default function Technologies({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="badge badge-info badge-sm pt-2.5 pb-2 px-2.5"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
