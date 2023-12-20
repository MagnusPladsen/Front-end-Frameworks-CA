import { AnimatePresence, motion } from "framer-motion";

export default function AddToCartNotification({ show }: { show: boolean }) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute bg-white border rounded text-primary border-primary py-2 px-4 top-[80px] right-2"
        >
          Added to cart
        </motion.div>
      )}
    </AnimatePresence>
  );
}
