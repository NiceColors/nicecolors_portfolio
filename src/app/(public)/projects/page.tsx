"use client";

import { GithubIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";


interface IProject {
    title: string;
    description: string;
    short_description?: string;
    color: string;
    url: string;
    align?: "center" | "left" | "right";
    links?: {
        href: string;
        label: string;
        icon: ReactNode;
    }[];
}

const projects: IProject[] = [
    {
        title: "Empresta Aí",
        description: "Sistema para bibliotecas focado em automatizar o gerenciamento de livros, produtos e clientes, simplificando tarefas manuais.",
        short_description: "Sistema para bibliotecas",
        color: "from-purple-400 to-indigo-500",
        url: "/assets/images/projects/empresta-ai.png",
        align: "right",
        links: [
            {
                href: "https://github.com/NiceColors/Empresta-Ai-API",
                label: "API",
                icon: <GithubIcon />,
            },
            {
                href: "https://github.com/NiceColors/Empresta-Ai-API",
                label: "Repositório",
                icon: <GithubIcon />,
            }
        ]
    },
    {
        title: "Algoritmos de Busca",
        description: "Implementação dos algoritmos de busca em largura, busca em profundidade e busca A*",
        short_description: "Algoritmos de busca",
        color: "from-blue-400 to-cyan-500",
        url: "/assets/images/projects/search-algorithms.png",
        links: [
            {
                href: "https://github.com/NiceColors/I.A-UFRRJ",
                label: "Repositório",
                icon: <GithubIcon />,
            },
        ]
    },
    {
        title: "dt-money",
        description: "Aplicação de controle financeiro para desktop feita durante o curso Ignite da Rocketseat.",
        short_description: "Controle financeiro",
        color: "from-yellow-400 to-amber-500",
        url: "/assets/images/projects/dt-money.png",
        align: "center",
        links: [
            {
                href: "https://github.com/NiceColors/dt-money",
                label: "Repositório",
                icon: <GithubIcon />,
            },
        ]
    }
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
        <div className="grid gap-8 md:grid-cols-2 md:items-center h-[calc(100lvh-64px)]">
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
                <Card isFooterBlurred className="w-full h-[538px] col-span-12 sm:col-span-7">
                    <CardHeader className="absolute z-10 top-0 flex-col items-start bg-black/90">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                            {projects[currentProject].short_description}
                        </p>
                        <h4 className="text-white/90 font-medium text-xl">
                            {projects[currentProject].title}
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt={projects[currentProject].title}
                        className="z-0 w-full h-full object-cover"
                        style={{
                            objectPosition: projects[currentProject].align ?? 'center'
                        }}
                        src={projects[currentProject].url}
                        disableAnimation

                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                        <div className="flex flex-grow gap-2 items-center">
                            <div
                                className="rounded-full w-10 h-10 bg-black"
                            />
                            <div className="flex flex-col">
                                <p className="text-tiny text-white/60">
                                    {projects[currentProject].title}
                                </p>
                                <p className="text-tiny text-white/60">
                                    {projects[currentProject].short_description}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {projects[currentProject].links?.map((link, index) => (
                                <Button
                                    key={index}
                                    size="sm"
                                    className="text-white flex gap-2"
                                    variant="flat"
                                    onClick={() => {
                                        window.open(link.href, '_blank')
                                    }}
                                >
                                    {link.icon}
                                    {link.label}
                                </Button>
                            ))}
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
