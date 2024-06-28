'use client';

import Link from "next/link";
import {type ButtonProps, buttonVariants} from "@components/ui/button";
import React from "react";


interface NavLinkProps extends ButtonProps {
    href: string;
    name: string;
}

export default function NavLink({ href, name, variant} : Readonly<NavLinkProps>) {
    return (
        <Link className={buttonVariants({ variant })} href={href}>{name}</Link>
    );
}