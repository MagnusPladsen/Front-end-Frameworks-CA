import { motion } from "framer-motion";

export default function BuyButton({ text = "Buy" }: { text?: string }) {
  return (
    <motion.button
      className="text-white bg-green-800 py-2 px-5 rounded border border-green-800 hover:text-green-800 transition-all hover:cursor-pointer hover:bg-white shadow-lg"
    >
      {text}
    </motion.button>
  );
}
