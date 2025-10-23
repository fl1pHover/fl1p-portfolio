import { Variants } from "framer-motion";

export const fadeIn = (delay = 1, duration = 1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeInOut",
    },
  },
});
