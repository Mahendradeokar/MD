import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { cn } from "./Button";

type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={clsx(
          "rounded-lg border text-foreground shadow-sm",
          "transition-shadow",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

type CardTitleProps = React.ComponentPropsWithoutRef<"h3"> & {
  asChild?: boolean;
};

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";
    return (
      <Comp
        ref={ref}
        className={clsx(
          "text-lg font-semibold leading-tight tracking-tight",
          "p-0 m-0",
          className
        )}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

type CardDescriptionProps = React.ComponentPropsWithoutRef<"p"> & {
  asChild?: boolean;
};

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp
      ref={ref}
      className={clsx(
        "text-sm text-muted-foreground leading-normal",
        className
      )}
      {...props}
    />
  );
});
CardDescription.displayName = "CardDescription";

type CardContentProps = React.ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp ref={ref} className={clsx("p-4 pt-2", className)} {...props} />
    );
  }
);
CardContent.displayName = "CardContent";

type CardFooterProps = React.ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean;
};

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        className={cn("px-4 pb-4 pt-2 flex items-center gap-2", className)}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

export { Card, CardTitle, CardDescription, CardContent, CardFooter };
