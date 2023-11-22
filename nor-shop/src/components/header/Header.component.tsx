import Logo from "../common/icons/LogoIcon.component";
import Nav from "./Nav.component";

export default function Header() {
  return (
    <header className="px-5 py-4 flex justify-between bg-white rounded">
      <div className="flex gap-4 items-center">
        <Logo height={30} width={30} />
        <p className="text-xl">NorShop</p>
      </div>
      <Nav />
    </header>
  );
}
