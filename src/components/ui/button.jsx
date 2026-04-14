import { cva } from "class-variance-authority";
import { cn } from "../../lib-utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-gradient-to-r from-accent to-[#56e4c3] px-4 py-2 text-[#072020] shadow-[0_8px_20px_rgba(49,208,170,0.35)] hover:-translate-y-0.5",
        ghost:
          "border-stroke bg-transparent px-4 py-2 text-text hover:-translate-y-0.5"
      }
    },
    defaultVariants: {
      variant: "ghost"
    }
  }
);

function Button({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";
  return <Comp className={cn(buttonVariants({ variant, className }))} {...props} />;
}

export { Button, buttonVariants };
