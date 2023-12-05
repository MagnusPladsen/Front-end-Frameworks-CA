import Logo from "../../icons/LogoIcon.component";
import Nav from "./Nav.component";

export default function Header() {
  return (
    <header className="w-full bg-white px-3 py-5 lg:px-0 shadow-lg fixed z-50">
      <div className="flex justify-between lg:w-[90vw] 2xl:w-[1500px] lg:mx-auto">
        <div className="flex gap-4 items-center">
          <Logo height={30} width={30} />
          <h1 className="text-xl text-primary">NorShop</h1>
        </div>
        <Nav />
      </div>
    </header>
  );
}
