import { Product } from "../../models";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* <Header /> */}
      "HEADER"
      <Outlet />
      {/* <Footer /> */}
      "FOOTER"
    </>
  );
}
