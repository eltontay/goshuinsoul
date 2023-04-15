interface NavbarItems {
  activeOnUrls: string[];

  href: string;

  label: string;
}

export const navbarItems: NavbarItems[] = [
  {
    label: "My Collection",
    href: "/collection",
    activeOnUrls: ["/tokens"],
  },/* 
  {
    label: "Create",
    href: "/create-item",
    activeOnUrls: ["/tokens"],
  }, */
];
