import { Link } from "react-router-dom";
import CartIcon from "../common/icons/CartIcon.component";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <li>
          <Link to="/">Home</Link>
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
