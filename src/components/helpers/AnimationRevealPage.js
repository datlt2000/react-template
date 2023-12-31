import React from "react";
import { useRef } from "react";
/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion, useInView } from "framer-motion";

export default function AnimationRevealPage(props) {
  return (
    <div className="font-display min-h-screen text-secondary-500 p-8 overflow-hidden">
      <AnimationReveal {...props} />
    </div>
  );
}

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>
      {children}
    </>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  const x = { target: "0%" };

  if (direction === "left") x.initial = "-150%";
  else x.initial = "150%";

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: x.initial }}
        animate={{
          x: isInView && x.target,
          transitionEnd: {
            x: isInView && 0
          }
        }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}
