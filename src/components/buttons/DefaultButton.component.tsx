import { motion } from "framer-motion";

export default function DefaultButton({
  text = "Buy",
  className,
  onClick,
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`${className} text-white bg-primary py-2 px-4 rounded border border-primary  hover:text-primary transition-all hover:cursor-pointer hover:bg-white shadow-lg `}
    >
      {text}
    </motion.button>
  );
}
