'use client';

import React from 'react';
import ConnectedUser from "@components/connected-user";
import NavLink from "@components/nav-link";
import {Button, buttonVariants} from "@components/ui/button";

export default function NavBar() {
    const isLoggedIn = false;

    return (
        <nav className="flex flex-col h-screen w-64 bg-primary text-white rounded-r-2xl min-w-[297px]">
            <div className="flex-grow flex flex-col items-center justify-center space-y-4">
                <NavLink href={`#`} name={`Community`} />
                <NavLink href={`#`} name={`My Store`} />
            </div>
            <div className="flex flex-col items-center justify-between py-6">
                {isLoggedIn ? (
                    <ConnectedUser username={`Placeholder Username`} joinedFor={`10h`} likeCount={`+100`} avatarSrc={``} />
                ) : (
                    <Button className={buttonVariants({ variant: "accent"})}>
                        Sign In
                    </Button>
                )}
            </div>
        </nav>
    );
}
