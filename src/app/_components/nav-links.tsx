import { buttonVariants } from "@components/ui/button";
import Link from "next/link";
import React, { memo } from "react";
import { type VariantProps } from "cva";

interface NavLinkItem extends VariantProps<typeof buttonVariants> {
    href: string;
    label: string;
}

export interface NavLinksProps extends React.HTMLAttributes<HTMLDivElement> {
    links: NavLinkItem[];
}

const NavLinks: React.FC<NavLinksProps> = memo(({ links, className, ...props }) => {
    return (
        <div {...props} className={className}>
            {links.map(({ href, label, variant }) => (
                <Link
                    key={href}
                    className={buttonVariants({ variant })}
                    href={href}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
});
NavLinks.displayName = "NavLinks";

export { NavLinks };
