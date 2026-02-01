"use strict";
import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {

        const variants = {
            primary: "bg-primary text-white hover:bg-emerald-600 shadow-lg border-transparent",
            secondary: "bg-secondary text-foreground hover:opacity-80 border-transparent",
            outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
            ghost: "bg-transparent hover:bg-secondary/50 text-foreground border-transparent",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-semibold",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(
                    "relative overflow-hidden rounded-lg font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border",
                    variants[variant],
                    sizes[size],
                    className
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
                {/* Glow effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-lg opacity-0"
                    variants={{
                        hover: {
                            opacity: 1,
                            boxShadow: "0 0 15px rgba(232, 197, 71, 0.5)"
                        }
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
