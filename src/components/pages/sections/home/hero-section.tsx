'use client'

import { Linkedin } from "lucide-react"
import { ReactNode } from "react"
import FullStackTab from "@/components/ui/fullstack-tab"
import { GithubIcon } from "@/components/ui/icons"

interface SocialLinkType {
  url: string
  icon: ReactNode
  label: string
}

const SocialLink = ({ url, icon, label }: SocialLinkType) => {
  return (
    <a
      className="rounded-md border-2 border-black w-12 h-12 flex flex-col items-center justify-center hover:bg-black cursor-pointer hover:text-white transition-colors duration-200"
      href={url}
      rel="noreferrer"
      target="_blank"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

export default function Hero() {
  const socialLinks: SocialLinkType[] = [
    {
      url: "https://www.linkedin.com/in/nicecolors/",
      icon: <Linkedin />,
      label: "LinkedIn Profile"
    },
    {
      url: "https://github.com/nicecolors",
      icon: <GithubIcon />,
      label: "GitHub Profile"
    },
  ]

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
            Desenvolvedor Front-End responsável por desenvolver soluções
            tecnológicas inovadoras. Utilizo tecnologias modernas como React.js
            e Next.js, com foco na entrega de soluções eficientes e de alto
            valor para os clientes.
          </p>
        </div>
        <div className="flex gap-2">
          {socialLinks.map((socialLink) => (
            <SocialLink
              key={socialLink.url}
              icon={socialLink.icon}
              url={socialLink.url}
              label={socialLink.label}
            />
          ))}
        </div>
      </div>
      <div className="flex p-4 h-96 relative">
        <div className="absolute top-[-50px] lg:right-38">
          <FullStackTab />
        </div>
        <img
          alt="Ilustração representando um desenvolvedor"
          className="self-end w-full lg:h-auto h-[300px]"
          src="/assets/images/hero-image.svg"
        />
      </div>
    </section>
  )
}