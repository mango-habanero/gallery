import React, { memo } from "react";
import { Button } from "@components/ui/button";

interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = memo(({ title, subtitle }) => {
    return (
        <header className="flex items-center justify-between h-[86px] px-0 py-[14px] w-[883px]">
            <div className="flex flex-col gap-[5px] h-[58px] w-[144px]">
                <h1 className="font-bold leading-[33.89px] text-[28px]">{title}</h1>
                <span className="font-normal leading-[19.36px] text-[16px] text-accent">{subtitle}</span>
            </div>
            <Button className="h-[45px] w-[130px] rounded-[10px]" variant="secondary" aria-label="Add Picture">
                Add Picture
            </Button>
        </header>
    );
});
Header.displayName = "Header";

export default Header;
