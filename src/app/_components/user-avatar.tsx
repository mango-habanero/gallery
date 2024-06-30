'use client';

import React, { useEffect, useState, memo } from "react";
import { createFallbackAvatar } from "~/lib/avatar";
import {Avatar, AvatarFallback, AvatarImage, type avatarVariants} from "@components/ui/avatar";
import {type VariantProps} from "cva";

interface UserAvatarProps extends VariantProps<typeof avatarVariants>{
    alt: string;
    src?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ alt, src }) => {
    const [imageURI, setImageURI] = useState<string | undefined>(src);

    useEffect(() => {
        const validateSrc = async (src: string) => {
            try {
                const response = await fetch(src);
                if (response.ok) {
                    setImageURI(src);
                } else {
                    setImageURI(createFallbackAvatar(alt));
                }
            } catch {
                setImageURI(createFallbackAvatar(alt));
            }
        };

        if (src) {
            void validateSrc(src); // Explicitly marking the promise as ignored
        } else {
            setImageURI(createFallbackAvatar(alt));
        }
    }, [src, alt]);

    return (
        <Avatar>
            <AvatarImage src={imageURI} alt={alt} />
            <AvatarFallback>{alt}</AvatarFallback>
        </Avatar>
    );
};

export default memo(UserAvatar);
