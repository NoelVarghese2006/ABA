import {Link} from "@nextui-org/link";

import {Button} from "@nextui-org/button";

import '@styles/menu.css';

// export const ABALogo = () => {
//   return (
//     <h1 className="Logo">ABA</h1>
//   );
// };

export default function Menu() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>ABA</h1>
      </div>
      <div className="menuChoices">
        <div>About</div>
        <div>Meetings</div>
        <div>We Believe</div>
        <div>Contact Us</div>
      </div>
    </header>
  );
}
