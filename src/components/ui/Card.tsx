"use strict";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, hoverEffect = true, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-secondary/50",
                    className
                )} // Reduced opacity for cleaner look, handled glassmorphism
                initial={hoverEffect ? { y: 0 } : undefined}
                whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" } : undefined}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
