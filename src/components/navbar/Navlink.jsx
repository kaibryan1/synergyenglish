import styles from "./Navlink.module.scss";
import { useEffect, useState, useRef } from "react";
// Framer motion
import { motion } from "framer-motion";

// Components

export default function Navlink({ link, isActive, onClick }) {
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength()); // Get actual path length
    }
  }, []);

  return (
    <motion.div
      initial={{ color: "var(--color-dark)" }}
      animate={{
        color: isActive ? "var(--color-brand)" : "var(--color-dark)",
      }}
      whileHover={{ color: "var(--color-brand)" }}
      className={styles.navLink}
      onClick={onClick}
    >
      <svg
        width="98"
        height="51"
        viewBox="0 0 98 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          ref={pathRef}
          initial={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
            opacity: 0,
          }}
          animate={{
            strokeDasharray: isActive ? 220 : pathLength,
            strokeDashoffset: isActive ? 0 : pathLength,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          d="M58.8142 41.4672C48.4715 44.7456 37.7365 48.1587 26.5287 48.9363C19.1018 49.4515 9.01003 49.0585 4.52753 43.5027C-6.04638 30.397 17.0389 17.2052 29.5648 12.2639C42.1683 7.29208 56.4829 3.29318 70.6594 2.5912C78.5449 2.20073 87.0215 2.2441 92.126 7.65467C97.954 13.8322 96.9077 22.7963 92.6178 29.3216C89.5604 33.9723 84.6939 37.3022 79.4256 40.3906C76.1507 42.3105 72.2502 44.0488 68.1364 44.4952C62.0423 45.1566 55.0926 44.9845 49.5562 42.6784C47.5097 41.826 45.0917 41.2687 43.4198 39.9532"
          stroke="#FF6835"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <a href={link.ref} className="title">
        {link.label}
      </a>
    </motion.div>
  );
}
