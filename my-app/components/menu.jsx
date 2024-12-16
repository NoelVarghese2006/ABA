"use client";

import {Link} from "@nextui-org/link";

import {Button} from "@nextui-org/button";

import '@styles/menu.css';

// export const ABALogo = () => {
//   return (
//     <h1 className="Logo">ABA</h1>
//   );
// };

const menuLinks = [
  {path: "/", label: "Home"},
  {path: "/about", label: "About"}
];

export default function Menu() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/"><h1>ABA</h1></Link>
      </div>
      <div className="menuChoices">
        <Link href="/about">About</Link>
        <Link href="/meetings">Meetings</Link>
        <Link href="/beliefs">We Believe</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </header>
  );
}
