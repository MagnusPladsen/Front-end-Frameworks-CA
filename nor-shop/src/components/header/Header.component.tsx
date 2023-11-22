import Logo from "../common/Logo.componen";
import Nav from "./Nav.component";

export default function Header() {
  return (
    <header>
      <div className="flex gap-4">
        <p> NorShop</p>
        <Logo />
      </div>
      <Nav />
    </header>
  );
}
