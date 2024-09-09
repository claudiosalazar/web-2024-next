'use client';

import { motion } from "framer-motion";

export default function Template ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
    initial={{ y: -30, scale: 1.01 }}
    animate={{ y: 0, scale: 1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
