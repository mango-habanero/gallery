import React, { memo } from 'react';
import Header from "@components/ui/header";
import Section from "@components/ui/section";
import NavBar from "@components/ui/nav-bar";

const Home: React.FC = () => {
    return (
        <div className="flex flex-row h-screen">
            <NavBar/>
            <main className="flex flex-col gap-[20px] p-[50px]">
                <Header title="Gallery" subtitle="Community Gallery" />
                <Section>placeholder</Section>
                <Section>placeholder</Section>
            </main>
        </div>
    );
};

export default memo(Home);
