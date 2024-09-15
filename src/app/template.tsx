'use client';

import { motion } from "framer-motion";
import Footer from "./components/Footer";

export default function Template ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <motion.div
        /*initial={{ y: -30, scale: 1.01 }}
        animate={{ y: 0, scale: 1 }}*/ initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
        {children}
      </motion.div>
      <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, ease: "easeOut" }}>
        <Footer />
      </motion.div>
    </>
  )
}
