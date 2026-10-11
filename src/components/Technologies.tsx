import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

interface TechnologiesProps extends HTMLAttributes<HTMLElement> {
  technologies: string[];
}

export default function Technologies({
  technologies,
  className,
  ...rest
}: TechnologiesProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...rest}>
      {technologies.map((technology) => (
        <span
          key={technology}
          className="badge pt-0.5 badge-xs badge-info md:badge-sm"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
