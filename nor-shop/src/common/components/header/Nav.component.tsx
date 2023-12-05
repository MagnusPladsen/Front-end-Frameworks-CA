import { Link, NavLink } from "react-router-dom";
import CartIcon from "../../icons/CartIcon.component";
import usePath from "../../hooks/usePath/usePath";

export default function Nav() {
  const { currentPath } = usePath();
  const activeStyle = "underline underline-offset-4";
  return (
    <nav className="">
      <ul className="flex gap-4 items-center text-primary">
        <li>
          <Link to="/" className={`${currentPath && activeStyle}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <CartIcon height={20} width={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
