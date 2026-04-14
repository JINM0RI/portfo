import { cn } from "../../lib-utils";

export function Card({ className, ...props }) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-stroke bg-surface shadow-glass backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}
