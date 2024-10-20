export interface SiteConfig {
  name: string;
  description: string;
  navItems: Array<{ label: string; href: string }> | [];
  links: {
    twitter: string;
    discord: string;
    github: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "",
  navItems: [
    {
      label: "Página Inicial",
      href: "/",
    },
    {
      label: "Projetos",
      href: "/projects",
    },
    // {
    //   label: "About",
    //   href: "/about",
    // }
  ],
  description: "",
  links: {
    twitter: "https://x.com/NiceCollors",
    discord: "",
    github: "https://github.com/NiceColors",
  },
};
