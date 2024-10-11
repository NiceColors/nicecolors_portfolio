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
  navItems: [],
  description: "",
  links: {
    twitter: "https://x.com/NiceCollors",
    discord: "",
    github: "https://github.com/NiceColors",
  },
};
