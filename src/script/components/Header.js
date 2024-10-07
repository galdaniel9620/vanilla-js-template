import Button from "../ui/Button";
import Navbar from "../ui/NavBar";

export default function Header() {
    return `
      <header>
        ${Navbar()}
      </header>
    `;
  }