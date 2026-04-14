import { cn } from "../../lib-utils";

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(146,170,205,0.35)] bg-[rgba(42,63,95,0.5)] px-3 py-1 text-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
