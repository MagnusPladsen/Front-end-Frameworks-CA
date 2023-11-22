import { Product } from "../../models";
import { Outlet } from "react-router-dom";
import Header from "../header/Header.component";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      "FOOTER"
    </>
  );
}
