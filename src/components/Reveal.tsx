import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
}

export const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [animationControls, inView]);

  return (
    <div  ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 75 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.5, delay: 0.25}}
      >
        {children}
      </motion.div>
    </div>
  );
};
