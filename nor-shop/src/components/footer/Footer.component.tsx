import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoIcon from "../iconComponents/LogoIcon.component";

export default function Footer() {
  return (
    <footer className="bg-white mt-20 w-full px-3 py-10 lg:px-0 shadow-lg z-50">
      <div className="flex lg:w-[90vw] 2xl:w-[1500px] flex-col lg:flex-row lg:mx-auto lg:items-center justify-between gap-10 lg:gap-5">
        <div className="flex gap-5 items-center justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.1, opacity: 0.6 }}
              className="flex gap-4 items-center hover:cursor-pointer"
            >
              <LogoIcon height={30} width={30} />
            </motion.div>
          </Link>
          <p className="text-xs text-primary">- We got what you need...</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-end gap-2 lg:gap-5">
          <p className="text-xs text-primary">Phone: +47 98 76 54 32</p>
          <p className="text-xs text-primary">Email: contact@norshop.no</p>
        </div>
      </div>
    </footer>
  );
}
