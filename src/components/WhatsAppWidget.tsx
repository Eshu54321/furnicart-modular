"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppWidget() {
  const phoneNumber = "919867032565";
  const message = encodeURIComponent(
    "Hello Furnicart Modular, I am interested in getting a modular furniture consultation. Please connect with me."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[24px] right-[24px] z-45 bg-[#25D366] text-white h-[48px] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.35)] flex items-center px-4.5 space-x-2.5 border border-white/10 hover:bg-[#20ba59] transition-all duration-300 cursor-pointer select-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        className="w-[18px] h-[18px] fill-white shrink-0 -translate-y-[0.5px]"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 2c-5.514 0-9.99 4.477-9.99 9.99 0 1.763.459 3.418 1.258 4.869L2 22l5.314-1.395c1.4.753 2.99 1.185 4.67 1.185 5.514 0 9.99-4.477 9.99-9.99C22.02 6.477 17.545 2 12.031 2zm0 16.5c-1.488 0-2.883-.418-4.085-1.14l-.292-.176-3.04.798.812-2.96-.192-.306A8.204 8.204 0 014.5 12c0-4.542 3.69-8.231 8.23-8.231 4.543 0 8.232 3.69 8.232 8.231 0 4.542-3.69 8.23-8.23 8.23zm4.512-6.164c-.247-.123-1.463-.72-1.69-.803-.226-.083-.39-.123-.556.123-.165.247-.64.803-.784.966-.145.165-.29.185-.537.062-.247-.123-1.042-.384-1.986-1.226-.734-.654-1.23-1.462-1.374-1.71-.145-.246-.015-.38.109-.502.11-.11.247-.288.37-.432.124-.144.165-.247.248-.412.083-.165.04-.309-.02-.432-.062-.124-.556-1.338-.763-1.833-.2-.484-.403-.418-.556-.426-.145-.008-.31-.008-.475-.008-.165 0-.432.062-.659.309-.226.247-.865.844-.865 2.057 0 1.213.885 2.387 1.01 2.55.124.165 1.74 2.657 4.215 3.722.589.254 1.05.405 1.41.519.59.187 1.127.16 1.552.097.473-.071 1.463-.597 1.669-1.173.206-.576.206-1.07.144-1.173-.062-.102-.227-.164-.474-.287z" />
      </svg>
      <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-white leading-none -translate-y-[0.5px]">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
      </span>
    </motion.a>
  );
}
