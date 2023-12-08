import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import DownArrow from "../iconComponents/DownArrow.component";

export default function DrawerTab({
  children,
  title,
  scrollToRef,
}: {
  children: React.ReactNode;
  title: string;
  scrollToRef?: React.RefObject<HTMLDivElement>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        ref={scrollToRef || null}
        onClick={() => setOpen((prev) => !prev)}
        className="py-5 px-3 lg:px-5 hover:cursor-pointer flex justify-between border-t border-background"
      >
        <h2 className=" text-lg font-medium text-primary">{title}</h2>
        <motion.div animate={open ? { rotate: 180 } : { rotate: 0 }}>
          <DownArrow />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm overflow-hidden"
          >
            <div className="w-full lg:px-5 border-y border-background bg-gray-50 pb-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
