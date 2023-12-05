import { Product } from "../../models/models";
import { Outlet } from "react-router-dom";
import Header from "../header/Header.component";

export default function Layout() {
  return (
    <div className="bg-background">
      <Header />
      <Outlet />
      {/* <Footer /> */}
      "FOOTER"
    </div>
  );
}
