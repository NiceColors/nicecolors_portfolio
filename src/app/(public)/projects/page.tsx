"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    {
        title: "Biblioteca ",
        description:
            "Ensure that your audio maintains consistent relative loudness across one or many recordings.",
        color: "from-purple-400 to-indigo-500",
    },
    {
        title: "Speech isolation",
        description:
            "Isolate and boost voices, using neural networks trained to distinguish speech from external noise.",
        color: "from-yellow-400 to-orange-500",
    },

];

export default function ScrollableAudioFeatures() {
    const containerRef = useRef<HTMLDivElement>(null);

    const [currentProject, setCurrentProject] = useState(0);

    const handleScrollToFeature = (index: number) => {
        const target = containerRef.current;
        if (target) {
            const featureOffset = (index / projects.length) * target.scrollHeight;
            target.scrollTo({ top: featureOffset, behavior: "smooth" });
            setCurrentProject(index);
        }
    };

    const scrollContainer = cn(
        "space-y-4 overflow-auto h-[540px] md:pr-4 pr-0 relative md:order-1 order-2",
        "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
    );

    return (
        <div className="grid max-w-7xl gap-8 md:grid-cols-2 md:items-center h-[calc(100lvh-64px)]">
            <div
                ref={containerRef}
                className={scrollContainer}
            >
                {projects.map((feature, index) => (
                    <motion.div
                        key={index}
                        className={`p-4 rounded-3xl cursor-pointer ${currentProject === index
                            ? "dark:bg-white/10 bg-black/10 scale-100"
                            : "dark:bg-white/5 bg-black/5 opacity-50 scale-95"
                            } transition-transform duration-300`}
                        onClick={() => handleScrollToFeature(index)}
                    >
                        <h2 className="text-2xl font-bold dark:text-white">{feature.title}</h2>
                        <p className="mt-2 dark:text-gray-300 text-gray-900">{feature.description}</p>
                    </motion.div>
                ))}
            </div>

            <div className="flex items-start justify-center md:order-2 order-1">
                <motion.div
                    key={currentProject}
                    transition={{ duration: 0.5 }}
                    className={`aspect-square w-full md:h-full h-[450px] rounded-3xl bg-gradient-to-br ${projects[currentProject].color}`}
                />
            </div>
        </div>
    );
}
