interface NavLink {
  id: number;
  title: string;
  link: string;
}

const NavLinks: NavLink[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Web Shop",
    link: "/shop",
  },
  {
    id: 3,
    title: "Contact Us",
    link: "/contact",
  },
];

export default NavLinks;
