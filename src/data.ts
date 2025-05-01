export const navLinks = [
  { id: 1, title: "Home" },
  { id: 2, title: "About" },
  {
    id: 3,
    title: "Services",
    imageM: "/down.svg",
    imageD: "/searchBlack.svg",
    submenu: [
      { id: 1, title: "Web Design" },
      { id: 2, title: "Web Development" },
      { id: 3, title: "Mobile App" },
      { id: 4, title: "Digital Marketing" },
    ],
  },
  {
    id: 4,
    title: "Shop",
    imageM: "/down.svg",
    imageD: "/searchBlack.svg",
    submenu: [
      { id: 5, title: "Privacy Policy" },
      { id: 6, title: "About Company" },
      { id: 7, title: "Payment Gateway" },
      { id: 8, title: "Terms & Conditions" },
    ],
  },
  { id: 9, title: "Testimonials" },
];

export const footerNav = [
  {
    title: "Company",
    links: ["About", "Features of SHOP.CO", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
      "FAQ",
    ],
  },
  {
    title: "Account",
    links: ["Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

///Category image array
export const imgSrc = [
  { name: "Casual", src: "/casual.png", isWide: false },
  { name: "Formal", src: "/formal.png", isWide: true },
  { name: "Party", src: "/party.png", isWide: true },
  { name: "Gym", src: "/gym.png", isWide: false },
];
