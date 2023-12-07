import { Outlet } from "react-router-dom";
import Header from "../header/Header.component";

export default function Layout() {
  return (
    <div className="bg-background ">
      <Header />
      <div className="pt-[68px] flex flex-col h-full justify-between min-h-[calc(100vh-5rem)] lg:min-h-[100vh] ">
        <Outlet />
        {/* <Footer /> */}
        <div className="border border-blue-500">FOOTER</div>
      </div>
    </div>
  );
}
