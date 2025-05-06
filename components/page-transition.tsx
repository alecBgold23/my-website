"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  // Main page transition - slide horizontally
  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={pathname}
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        exit={{ x: -20 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.15, // 150ms duration
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        className="page-content-wrapper"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
