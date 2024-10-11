'use client';

import { WorkflowIcon } from "lucide-react";
import { useTheme } from "next-themes";

interface TitleliProp {
    title?: string;
    list?: string[];
    direction?: "left" | "right";
}

export const Titleli = ({
    title,
    list = [],
}: TitleliProp) => {
    const { theme } = useTheme();
    const bgColor = theme === "dark" ? "#4073b9" : "#f3f4f6";
    return (
        <div className="flex flex-col flex-wrap items-start justify-start">
            {title && (
                <span
                    className="inline px-2 font-bold"
                    style={{
                        background: `linear-gradient(180deg, rgba(0,0,0,0) 66%, ${bgColor} 33%)`,
                    }}
                >
                    {title.toLocaleUpperCase()}
                </span>
            )}
            <div className="flex flex-col flex-1 gap-2 p-2 w-[500px]">
                {list.map((item) => (
                    <div className="flex items-center gap-1" key={item}>
                        <WorkflowIcon size={12} />
                        <span className="text-sm">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};