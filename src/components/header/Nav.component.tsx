import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useCart from "../../common/hooks/useCart/useCart";
import usePath from "../../common/hooks/usePath/usePath";
import CartIcon from "../iconComponents/CartIcon.component";
import FormatPrice from "../formatters/FormatPrice.component";
import AddToCartNotification from "../notifications/AddToCartNotification.component";

export default function Nav() {
  const { currentPath } = usePath();
  const { getCartQuantity, getCartTotal, showNotification } = useCart();
  const activeStyle = "underline underline-offset-4";
  return (
    <>
      <nav className="relative">
        <ul className="flex gap-8 items-baseline text-primary">
          <motion.li
            whileHover={{
              opacity: 0.6,
              textDecorationLine: "underline",
              textUnderlineOffset: "2px",
            }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className={`${currentPath === "/" && activeStyle}`}>
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{
              opacity: 0.6,
              textDecorationLine: "underline",
              textUnderlineOffset: "2px",
            }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/cart"
              className={`${currentPath === "/cart" && activeStyle}`}
            >
              <div className="flex gap-3">
                <FormatPrice price={getCartTotal()} />
                <CartIcon height={20} width={20} />
                {getCartQuantity() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
                    {getCartQuantity()}
                  </span>
                )}
              </div>
            </Link>
          </motion.li>
        </ul>
      </nav>
      <AddToCartNotification show={showNotification} />
    </>
  );
}
