import { motion } from "framer-motion";

export default function DefaultButton({
  text = "Buy",
  className,
  onClick,
  disabled = false,
}: {
  text?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  if (disabled) {
    return (
      <button
        disabled={disabled}
        className={`text-gray-400 bg-gray-100 py-2 px-4 rounded border border-gray-400 shadow-lg `}
      >
        {text}
      </button>
    );
  }

  return (
    <motion.button
      disabled={disabled}
      onClick={onClick}
      className={`${className} text-white bg-primary py-2 px-4 rounded border border-primary  hover:text-primary transition-all hover:cursor-pointer hover:bg-white shadow-lg `}
    >
      {text}
    </motion.button>
  );
}
