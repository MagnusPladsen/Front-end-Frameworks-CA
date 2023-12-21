import { Outlet } from "react-router-dom";
import Header from "../header/Header.component";
import Footer from "../footer/Footer.component";

export default function Layout() {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-between">
      <Header />
      <div className="pt-[68px] h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
