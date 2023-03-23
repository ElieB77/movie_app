export interface LinkType {
  icon: string;
  href: string;
  alt: string;
  id: string;
}

export interface LogoType {
  src: string;
  width: number;
  height: number;
  alt: string;
  href: string;
}

export interface MenuType {
  links: LinkType[];
  logo: LogoType;
  iconWidth: number;
  iconHeight: number;
}
