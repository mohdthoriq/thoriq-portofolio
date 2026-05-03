import React from 'react';
import { motion } from 'motion/react';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-2"
      >
        <div className="h-[1px] w-12 bg-blue-500" />
        <span className="text-blue-500 text-sm font-bold uppercase tracking-widest">{subtitle}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500"
      >
        {children}
      </motion.h2>
    </div>
  );
}
