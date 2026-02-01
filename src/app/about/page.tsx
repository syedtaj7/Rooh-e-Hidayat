"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/ui/Section";

export default function AboutPage() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div className="min-h-screen">
            {/* Hero / Tribute */}
            <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-foreground">
                <motion.div style={{ y }} className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-20" />
                    {/* Simple Particle Effect (CSS) */}
                    <div className="stars-container" />
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-32 h-32 mx-auto bg-secondary/20 rounded-full mb-8 flex items-center justify-center shadow-2xl shadow-accent/20"
                    >
                        {/* Candle flame abstract */}
                        <div className="w-4 h-16 bg-accent rounded-full blur-md animate-pulse" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">dedication</h1>
                    <p className="text-secondary/80 text-lg leading-relaxed italic">
                        "To those who seek the light, may your journey be blessed with peace and clarity."
                    </p>
                </div>
            </div>

            <Section>
                <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
                    <h2 className="font-serif text-3xl text-foreground">Our Mission</h2>
                    <p>
                        Islamic Guidance was built to serve the Ummah by providing a modern, accessible, and beautiful platform to learn about the sacred journeys of Umrah and Hajj, and to connect with the Holy Quran.
                    </p>
                    <p>
                        We believe that technology should enhance our spiritual experience, not distract from it. Every animation, color, and interaction is designed to evoke a sense of tranquility (Sakinah).
                    </p>

                    <div className="my-12 p-8 bg-secondary/20 rounded-2xl border border-secondary text-center">
                        <p className="font-serif text-2xl text-primary font-bold mb-4">
                            Sadqa Jariyah
                        </p>
                        <p className="text-foreground/70">
                            This project is intended as a continuous charity. Please keep the developers and contributors in your duas.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
