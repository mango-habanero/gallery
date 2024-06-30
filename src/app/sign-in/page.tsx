'use client';

import React, { useEffect, memo } from "react";
import { Button } from "@components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]);

    return (
        <div className="flex flex-col gap-2.5 h-screen p-[10px] items-center justify-center rounded-[10px] text-center">
            <div className="flex flex-col gap-[20px] h-[139px] w-[297px] p-[20px]">
                <h1 className="font-normal leading-[33.89px] text-[28px]">Sign In</h1>
                <Button
                    className="h-[45px] w-[257px]"
                    variant="secondary"
                    onClick={() => signIn("discord", { callbackUrl: "/" })}
                    aria-label="Sign in with Discord"
                >
                    Continue with Discord
                </Button>
            </div>
        </div>
    );
};

export default memo(SignIn);
