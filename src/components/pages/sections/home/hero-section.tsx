
import { Linkedin } from "lucide-react";
import { ReactNode } from "react";

import FullStackTab from "@/components/ui/fullstack-tab";
import { GithubIcon } from "@/components/ui/icons";

interface SocialLinkType {
  url: string;
  icon: ReactNode;
}


const SocialLink = ({ url, icon }: SocialLinkType) => {
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



export default async function Hero() {

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
          src={"/assets/images/hero-image.svg"}
        />
      </div>
    </section>
  );
};
