import Avatar from "@components/ui/avatar";
import React from "react";

interface ConnectedUserProps {
    avatarSrc: string,
    joinedFor: string,
    likeCount: string,
    username: string,
}

export default function ConnectedUser({ avatarSrc, joinedFor, likeCount, username }: Readonly<ConnectedUserProps>) {
    return (
        <div className="flex items-center gap-4 w-60">
            <Avatar alt={username}  className="h-11 w-11" src={avatarSrc}/>
            <div className="grid gap-1">
                <p className="text-sm font-semibold leading-none">
                    {username}
                </p>
                <p className="text-xs text-muted-foreground">
                    Joined for {joinedFor} / {likeCount} likes
                </p>
            </div>
        </div>
    )
}