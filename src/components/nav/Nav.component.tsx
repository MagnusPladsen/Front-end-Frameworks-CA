import useCart from "../../common/hooks/useCart/useCart";
import usePath from "../../common/hooks/usePath/usePath";
import AddToCartNotification from "../notifications/AddToCartNotification.component";
import DesktopNav from "./DesktopNav.component";
import MobileNav from "./MobileNav.componen";

export default function Nav() {
  const { currentPath } = usePath();
  const { getCartQuantity, getCartTotal, showNotification } = useCart();
  const activeStyle = "underline underline-offset-4";
  const pages = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="relative">
      <div className="hidden lg:block">
        <DesktopNav
          activeStyle={activeStyle}
          currentPath={currentPath}
          cartQuantity={getCartQuantity()}
          cartTotal={getCartTotal()}
          pages={pages}
        />
      </div>
      <div className="block lg:hidden ">
        <MobileNav
          activeStyle={activeStyle}
          currentPath={currentPath}
          cartQuantity={getCartQuantity()}
          cartTotal={getCartTotal()}
          pages={pages}
        />
      </div>
      <AddToCartNotification show={showNotification} />
    </nav>
  );
}
