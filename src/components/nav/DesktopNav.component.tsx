import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FormatPrice from "../formatters/FormatPrice.component";
import CartIcon from "../iconComponents/CartIcon.component";

export default function DesktopNav({
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
  const whileHover = {
    opacity: 0.6,
    textDecorationLine: "underline",
    textUnderlineOffset: "2px",
  };
  return (
    <ul className="flex gap-8 items-baseline text-primary">
      {pages.map((page) => (
        <motion.li whileHover={whileHover} transition={{ duration: 0.2 }} key={page.name}>
          <Link
            to={page.path}
            className={`${currentPath === page.path && activeStyle}`}
          >
            {page.name}
          </Link>
        </motion.li>
      ))}
      <motion.li whileHover={whileHover} transition={{ duration: 0.2 }}>
        <Link
          to="/cart"
          className={`${currentPath === "/cart" && activeStyle}`}
        >
          <div className="flex gap-3">
            <FormatPrice price={cartTotal} />
            <CartIcon height={20} width={20} />
            {cartQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
                {cartQuantity}
              </span>
            )}
          </div>
        </Link>
      </motion.li>
    </ul>
  );
}
