'use client'


import { Tab, Tabs, Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import WaveCards from "./wave-cards";

export default function FullStackTab() {
    const [selected, setSelected] = useState("web");
    const tabs = ["fullstack", "frontend", "backend"];

    useEffect(() => {
        const handleNextLoop = () => {
            const next = tabs.indexOf(selected) + 1;

            setSelected(tabs[next === tabs.length ? 0 : next]);
        };

        const interval = setInterval(handleNextLoop, 6000);

        return () => clearInterval(interval);
    }, [selected]);

    return (
        <div>
            <div className="rounded-md shadow-lg animate-wave-8 h-fit">
                <Tabs
                    aria-label="Tabs sizes"
                    className="contents"
                    selectedKey={selected}
                    size="sm"
                    onSelectionChange={(key) => {
                        setSelected(key as string);
                    }}
                >
                    <Tab
                        key="frontend"
                        title={
                            <Tooltip
                                showArrow
                                content="3 anos de experiência"
                                isOpen={selected === "frontend"}
                                placement="top"
                                size="sm"
                            >
                                <div>Frontend</div>
                            </Tooltip>
                        }
                    />
                    <Tab
                        key="backend"
                        title={
                            <Tooltip
                                showArrow
                                content="2 anos de experiência"
                                isOpen={selected === "backend"}
                                placement="top"
                                size="sm"
                            >
                                <div>Backend</div>
                            </Tooltip>
                        }
                    />
                    <Tab
                        key="fullstack"
                        title={
                            <Tooltip
                                showArrow
                                content="2 anos de experiência"
                                isOpen={selected === "fullstack"}
                                placement="top"
                                size="sm"
                            >
                                <div>FullStack</div>
                            </Tooltip>
                        }
                    />
                </Tabs>
            </div>

            <WaveCards />
        </div>
    );
};