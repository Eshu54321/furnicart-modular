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
      className="fixed bottom-[24px] right-[24px] z-50 bg-[#25D366] text-white w-[56px] h-[56px] rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.3)] flex items-center justify-center border border-white/10 hover:bg-[#22c35e] transition-all duration-300 whatsapp-pulse cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        className="w-7 h-7 fill-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.205 1.488 4.815 1.489 5.425.002 9.837-4.407 9.84-9.84.002-2.633-1.02-5.107-2.88-6.97C16.243 1.97 13.782.946 11.16.945c-5.43 0-9.84 4.41-9.843 9.843-.002 1.83.476 3.619 1.386 5.17l-.956 3.49 3.585-.94.315.188zm11.838-4.71c-.3-.149-1.77-.873-2.045-.973-.272-.1-.471-.149-.669.149-.198.3-.769.972-.942 1.171-.173.199-.347.223-.647.074-.3-.149-1.267-.467-2.415-1.493-.893-.797-1.496-1.78-1.672-2.08-.176-.3-.019-.462.13-.61.135-.133.3-.347.45-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.77-.724 2.017-1.424.248-.699.248-1.299.173-1.424-.075-.124-.272-.198-.57-.347z" />
      </svg>
    </motion.a>
  );
}
