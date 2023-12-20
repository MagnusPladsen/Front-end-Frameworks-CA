import { Link } from "react-router-dom";
import LogoIcon from "../iconComponents/LogoIcon.component";
import Nav from "./Nav.component";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full bg-white px-3 py-5 lg:px-0 shadow-lg fixed z-50">
      <div className="flex justify-between lg:w-[90vw] 2xl:w-[1500px] lg:mx-auto">
        <Link to="/">
          <motion.div
            whileHover={{
              opacity: 0.6,
            }}
            transition={{ duration: 0.2 }}
            className="flex gap-4 items-center hover:cursor-pointer"
          >
            <LogoIcon height={30} width={30} />
          </motion.div>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
