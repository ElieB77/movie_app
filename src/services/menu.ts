import { MenuType } from "@/types/menu";

export const menu: MenuType = {
  links: [
    {
      icon: "/images/icon-nav-home.svg",
      href: "/",
      alt: "Home Icon",
      id: "HOME",
    },
    {
      icon: "/images/icon-nav-movies.svg",
      href: "/movies",
      alt: "Movies Icon",
      id: "MOVIES",
    },
    {
      icon: "/images/icon-nav-tv-series.svg",
      href: "/tv_shows",
      alt: "TV Shows Icon",
      id: "TV_SHOWS",
    },
    {
      icon: "/images/icon-nav-bookmark.svg",
      href: "/bookmark",
      alt: "Bookmark Icon",
      id: "BOOKMARK",
    },
  ],
  logo: {
    src: "/images/logo.svg",
    width: 32,
    height: 25,
    alt: "Logo",
    href: "/",
  },
  iconWidth: 20,
  iconHeight: 20,
};
