import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React, {forwardRef} from "react";

import {cn} from "~/lib/utils";
import {createFallbackAvatar} from "~/lib/avatar";


export const AvatarContainer = forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            "bg-surface-100 dark:bg-surface-800",
            className
        )}
        {...props}
    />
));
AvatarContainer.displayName = AvatarPrimitive.Root.displayName;

export const AvatarImage = forwardRef<
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

export const AvatarFallback = forwardRef<
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


// TODO[MH]: Improve how we retrieve the first name that forms the seed for the avatar and the alt value.
export default function Avatar({ alt, src, ...props }: React.HTMLAttributes<HTMLSpanElement> & {
    src: string;
    alt: string;
}) {
    let imageURI = src;
    const isValidSrc = () => {
        if (!src) return false;
        const image = new Image();
        image.src = src;
        if (image.complete) {
            return true;
        } else {
            image.onload = () => {
                return true;
            }
            image.onerror = () => {
                return false;
            }
        }
    }

    if (!isValidSrc()) {
        imageURI = createFallbackAvatar(alt);
    }

    console.log(`URI: ${imageURI}`);
    return (
        <AvatarContainer {...props}>
            <AvatarImage src={imageURI} alt={alt} />
            <AvatarFallback>{alt}</AvatarFallback>
        </AvatarContainer>
    );
}

