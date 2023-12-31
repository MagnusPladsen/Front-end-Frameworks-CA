import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormatPrice from "../formatters/FormatPrice.component";
import CartIcon from "../iconComponents/CartIcon.component";
import HamburgerIcon from "../iconComponents/HamburgerIcon.component";
import { motion } from "framer-motion";

export default function MobileNav({
  activeStyle,
  currentPath,
  cartTotal,
  cartQuantity,
  pages,
}: {
  activeStyle: string;
  currentPath: string;
  cartTotal: number;
  cartQuantity: number;
  pages: { name: string; path: string }[];
}) {
  const navigate = useNavigate();

  const goToCartHandler = () => {
    setIsDropdownOpen(false);
    navigate("/cart");
  };
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className=" flex gap-5 relative">
      <div
        className="flex gap-3 relative text-primary"
        onClick={() => goToCartHandler()}
      >
        <FormatPrice price={cartTotal} />
        <CartIcon height={20} width={20} />
        {cartQuantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
            {cartQuantity}
          </span>
        )}
      </div>

      <motion.div
        animate={{ rotate: isDropdownOpen ? 90 : 0 }}
        onClick={toggleDropdown}
        className="text-primary"
      >
        <HamburgerIcon height="h-7" width="w-7" />
      </motion.div>
      {isDropdownOpen && (
        <ul className="absolute top-12 -right-3 bg-white border rounded shadow-md py-8 w-screen h-screen flex flex-col gap-8 items-center z-50">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className={`${
                currentPath === page.path && activeStyle
              } text-primary`}
            >
              <li onClick={() => toggleDropdown()}>{page.name}</li>
            </Link>
          ))}
          <Link
            to={"/cart"}
            className={`${currentPath === "/cart" && activeStyle} text-primary`}
          >
            <li onClick={() => toggleDropdown()}>Cart</li>
          </Link>
        </ul>
      )}
    </div>
  );
}
