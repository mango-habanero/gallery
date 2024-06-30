import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React, {forwardRef} from "react";

import {cn} from "~/lib/utils";
import {cva, type VariantProps} from "cva";


export const avatarVariants = cva(
    "relative flex shrink-0 overflow-hidden rounded-full transition-all",
    {
        variants: {
            size: {
                default: "h-[45px] w-[45px]",
                small: "h-[25px] w-[25px]",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface AvatarProps extends
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
    transitionDuration?: string;
}

const Avatar = forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(
    (
        { className, size, transitionDuration = "0.3s", ...props },
        ref
    ) => (
        <AvatarPrimitive.Root
            ref={ref}
            className={cn(
                avatarVariants({ size }),
                className
            )}
            style={{
                transitionDuration,
            }}
            {...props}
        />
    )
);

Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Image>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Fallback>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full bg-secondary",
            className
        )}
        {...props}
    />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };