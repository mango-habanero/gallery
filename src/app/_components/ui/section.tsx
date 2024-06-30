import React, {forwardRef} from "react";

import type {HTMLAttributes} from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={`w-[883px] h-auto py-2.5 justify-between ${className}`}
                {...props}
            >
                {children}
            </section>
        )
    }
)
Section.displayName = "Section"

export default Section