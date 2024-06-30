import React, { memo } from "react";
import UserAvatar from "@components/user-avatar";
import { calculateElapsedTime } from "~/lib/user";

interface ConnectedUserProps {
    alt: string;
    src?: string;
    userId?: string;
}

const ConnectedUser: React.FC<ConnectedUserProps> = memo(({ alt, src, userId }) => {
    // TODO[MH]: Implement user creation date and total likes
    const userCreatedAt = Date.now()
    const totalLikes = Math.floor(Math.random() * 1000);

    return (
        <div className="flex flex-row gap-2.5 items-center justify-center h-[95px] py-[25px] px-0 w-[257px]">
            <UserAvatar alt={alt} src={src} />
            <div className="flex flex-col gap-[5px] h-[44px] w-[179px]">
                <div className="font-semibold leading-[21.78px] text-[18px] w-fit">{alt}</div>
                <div className="font-normal leading-[16.96px] truncate text-[14px] w-fit">
                    Joined {calculateElapsedTime(userCreatedAt)} / +{totalLikes} likes
                </div>
            </div>
        </div>
    );
});

ConnectedUser.displayName = "ConnectedUser";

export default ConnectedUser;
