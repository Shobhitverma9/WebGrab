"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import styles from "./WhatsAppWidget.module.css";

export const WhatsAppWidget = () => {
  const pathname = usePathname();
  const phoneNumber = "+919870126712";
  const message = "Hello! I'm interested in your services.";
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show the tooltip shortly after loading to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    // Hide it again after a few seconds unless hovered
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Hide the widget on specific pages
  if (pathname === "/demo/doctor") {
    return null;
  }

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={styles.widgetContainer}>
      {/* Tooltip bubble */}
      <AnimatePresence>
        {(showTooltip || isHovered) && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 10, scale: 0.9, filter: "blur(2px)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={styles.tooltip}
          >
            <div className={styles.tooltipContent}>
              <span className={styles.pingDotContainer}>
                <span className={styles.pingDot}></span>
                <span className={styles.solidDot}></span>
              </span>
              Chat with us! 👋
            </div>
            {/* Tooltip tail */}
            <div className={styles.tooltipTail}></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9, rotate: 0 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className={styles.mainButton}
        aria-label="Contact us on WhatsApp"
      >
        {/* Subtle shine effect on hover */}
        <motion.div
          className={styles.shine}
          animate={{
            translateX: isHovered ? ["-100%", "200%"] : "-100%",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={styles.icon}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </motion.button>
    </div>
  );
};
