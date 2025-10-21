"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Variant definitions
 */
const labelVariants = cva(
  "flex items-center gap-2 leading-none select-none uppercase",
  {
    variants: {
      size: {
        xs: "text-[10px]",
        md: "text-sm",
        lg: "text-base",
      },
      color: {
        default: "text-foreground",
        muted: "text-muted-foreground",
        primary: "text-primary",
        danger: "text-destructive",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "md",
      color: "default",
      weight: "medium",
    },
  }
);

/**
 * Use a distinct prop type name to avoid collision with Radix's LabelProps
 */
export type AppLabelProps = React.ComponentPropsWithoutRef<
  typeof LabelPrimitive.Root
> &
  VariantProps<typeof labelVariants> & {
    className?: string;
  };

/**
 * ForwardRef Label component
 */
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, AppLabelProps>(
  ({ className, size, color, weight, ...props }, ref) => {
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants({ size, color, weight }), className)}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export { Label, labelVariants };
