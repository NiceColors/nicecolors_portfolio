"use client";

import { Image, Tab, Tabs, Tooltip } from "@nextui-org/react";
import { Linkedin } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

import WaveCard from "@/components/ui/wavecard";
import { GithubIcon } from "@/components/ui/icons";

interface SocialLinkType {
  url: string;
  icon: ReactNode;
}

export const SocialLink = ({ url, icon }: SocialLinkType) => {
  return (
    <a
      className=" rounded-md border-2 border-black w-12 h-12 flex flex-col items-center justify-center hover:bg-black cursor-pointer hover:text-white"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
    </a>
  );
};

const FullStackTab = () => {
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

      <div className="flex flex-wrap ">
        <WaveCard duration={2}>
          <Image height={30} src={`/assets/icons/react.svg`} width={30} />
        </WaveCard>
        <WaveCard duration={4}>
          <Image height={30} src={`/assets/icons/typescript.svg`} width={30} />
        </WaveCard>
        <WaveCard duration={6}>
          <Image height={30} src={`/assets/icons/tailwindcss.svg`} width={30} />
        </WaveCard>
        <WaveCard duration={4}>
          <Image height={30} src={`/assets/icons/node.svg`} width={30} />
        </WaveCard>
        <WaveCard duration={2}>
          <Image height={30} src={`/assets/icons/python.svg`} width={30} />
        </WaveCard>
      </div>
    </div>
  );
};

export const Hero = () => {
  const socialLinks: SocialLinkType[] = [
    {
      url: "https://www.linkedin.com/in/nicecolors/",
      icon: <Linkedin />,
    },
    {
      url: "https://github.com/nicecolors",
      icon: <GithubIcon />,
    },
  ];

  return (
    <section className="w-full flex gap-6 flex-col-reverse items-center lg:flex-row lg:items-stretch">
      <div className="flex gap-4 flex-col justify-between p-4 w-full">
        <div>
          <div className="mb-4 md:text-3xl text-xl">
            <p className="mb-2">
              <span className="font-bold">Victor Batista,</span>
            </p>
            <p className="mb-2">Desenvolvedor FullStack</p>
            <p>
              do <span className="font-bold">Brasil</span>.
            </p>
          </div>
          <p className="text-sm text-justify">
            Graduando em Sistemas de Informação pela UFRRJ, atuo como
            Desenvolvedor Front-End responsável desenvolver soluções
            tecnológicas inovadoras. Utilizo tecnologias modernas como React.js
            e Next.js, com foco na entrega de soluções eficientes e de alto
            valor para os clientes. <br />
          </p>
        </div>
        <div className="flex gap-2">
          {socialLinks.map((socialLink) => (
            <SocialLink
              key={socialLink.url}
              icon={socialLink.icon}
              url={socialLink.url}
            />
          ))}
        </div>
      </div>
      <div className="flex p-4 h-96 relative">
        <div className="absolute top-[-50px] lg:right-38">
          <FullStackTab />
        </div>
        <img
          alt="Hero image."
          className="self-end w-full lg:h-auto h-[300px]"
          src={"/assets/hero-image.svg"}
        />
      </div>
    </section>
  );
};
