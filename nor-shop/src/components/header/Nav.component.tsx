import { Link } from "react-router-dom";
import usePath from "../../common/hooks/usePath/usePath";
import CartIcon from "../iconComponents/CartIcon.component";
import { motion } from "framer-motion";

export default function Nav() {
  const { currentPath } = usePath();
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="">
      <ul className="flex gap-4 items-center text-primary">
        <motion.li whileHover={{ scale: 1.1, opacity: 0.6 }}>
          <Link to="/" className={`${currentPath && activeStyle}`}>
            Home
          </Link>
        </motion.li>
        <li>
          <Link to="/cart">
            <CartIcon height={20} width={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
