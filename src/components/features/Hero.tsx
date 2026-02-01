"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Section } from "@/components/ui/Section";

const Lantern = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
    <motion.svg
        width="100"
        height="160"
        viewBox="0 0 100 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
        <path d="M50 0L50 40" stroke="#E8C547" strokeWidth="2" />
        <path
            d="M20 40H80L90 70H10L20 40Z"
            fill="#E8C547"
            fillOpacity="0.2"
            stroke="#E8C547"
            strokeWidth="2"
        />
        <path
            d="M10 70L20 130H80L90 70"
            fill="#E8C547"
            fillOpacity="0.1"
            stroke="#E8C547"
            strokeWidth="2"
        />
        <path
            d="M20 130L50 160L80 130"
            fill="#E8C547"
            fillOpacity="0.3"
            stroke="#E8C547"
            strokeWidth="2"
        />
        <circle cx="50" cy="85" r="10" fill="#E8C547" fillOpacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
    </motion.svg>
);

export function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Background Elements */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute top-10 right-[10%] opacity-80">
                    <Lantern delay={0} />
                </div>
                <div className="absolute top-20 left-[15%] scale-75 opacity-60">
                    <Lantern delay={2} />
                </div>
                <div className="absolute top-5 right-[25%] scale-50 opacity-40">
                    <Lantern delay={4} />
                </div>

                {/* Abstract Geometry */}
                {/* <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" /> */}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-secondary-foreground/60 text-lg md:text-xl font-sans tracking-widest mb-4 uppercase">
                        Bismillah ir-Rahman ir-Rahim
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
                        Guidance for the <br />
                        <span className="text-primary relative">
                            Soul
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/70 font-sans leading-relaxed mb-10 max-w-2xl mx-auto">
                        A tranquil companion for your spiritual journey. Experience the peace of Umrah, Hajj, and the Quran.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/umrah">
                            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20 bg-emerald-600 hover:bg-emerald-600 text-white">
                                Start Journey
                            </Button>
                        </Link>
                        <Link href="/quran">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Read Quran
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2" />
                </div>
            </motion.div>
        </div>
    );
}
