'use client';

import React, { memo } from 'react';
import { NavLinks } from "@components/nav-links";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@components/ui/button";
import ConnectedUser from "@components/connected-user";

const NavBar: React.FC = memo(() => {
    const { data: session } = useSession();
    const image = session?.user?.image ?? undefined;
    const justify = session ? "" : "justify-between";

    return (
        <nav className={`bg-primary flex flex-col gap-0 min-h-[832px] ${justify} py-0 px-5 rounded-r-[20px] rounded-bl-0 w-[297px]`}>
            <div className="flex flex-col flex-grow gap-2.5 h-[737px] items-center justify-center w-[257px]">
                <NavLinks
                    links={[
                        { href: "#", label: "Community" },
                        { href: "#", label: "My Store" },
                    ]}/>
                {session && <Button variant="secondary" onClick={() => signOut()}> Logout </Button>}
            </div>
            {session ? (
                <ConnectedUser alt={session.user?.name ?? "Guest"} src={image} />
            ) : (
                <div className="h-[95px] justify-between py-[25px] px-0 w-[257px]">
                    <NavLinks
                        links={[
                            { href: "/sign-in", label: "Sign In", variant: "accent" },
                        ]}/>
                </div>
            )}
        </nav>
    );
});

NavBar.displayName = "NavBar";

export default NavBar;
