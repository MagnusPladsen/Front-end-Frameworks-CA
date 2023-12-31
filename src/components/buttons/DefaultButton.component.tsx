import { motion } from "framer-motion";

export default function DefaultButton({
  text = "Buy",
  className,
  onClick,
  disabled = false,
  secondary = false,
  type = "button",
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  secondary?: boolean;
  type?: "button" | "submit";
}) {
  if (disabled) {
    return (
      <button
        disabled={disabled}
        className={`text-gray-400 bg-gray-100 py-2 px-4 rounded border border-gray-400 shadow w-fit mx-auto`}
      >
        {text}
      </button>
    );
  }

  if (secondary) {
    return (
      <motion.button
        onClick={onClick}
        className={`${className} text-primary bg-white py-2 px-4 rounded border border-primary  hover:text-white transition-all hover:cursor-pointer hover:bg-primary shadow w-fit mx-auto`}
        type={type}
      >
        {text}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${className} text-white bg-primary py-2 px-4 rounded border border-primary  hover:text-primary transition-all hover:cursor-pointer hover:bg-white shadow w-fit mx-auto`}
      type={type}
    >
      {text}
    </motion.button>
  );
}
