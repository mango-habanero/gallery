import React, {forwardRef} from "react";

import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "~/lib/utils"

const buttonVariants = cva([
    "h-[45px]",
    "w-[257px]",
    "inline-flex",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    "rounded-[10px]",
    "text-base",
    "text-light",
    "font-normal",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-1",
    "focus-visible:ring-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50"
  ],
  {
    variants: {
      variant: {
          default: "bg-primary hover:bg-secondary/80 active:bg-secondary/90",
          secondary: "bg-secondary hover:bg-primary/80",
          accent: "bg-accent hover:bg-accent/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  })

export interface ButtonProps extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"


export { Button, buttonVariants }
