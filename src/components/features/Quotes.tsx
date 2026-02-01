"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { FaQuoteLeft } from "react-icons/fa";

const quotes = [
    { text: "Verily, with hardship comes ease.", source: "Quran 94:6" },
    { text: "Allah does not burden a soul beyond that it can bear.", source: "Quran 2:286" },
    { text: "The best among you is the one who does not harm others with his tongue and hands.", source: "Prophet Muhammad (PBUH)" },
    { text: "And He found you lost and guided [you].", source: "Quran 93:7" },
];

export function Quotes() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section className="bg-secondary/20">
            <div className="flex flex-col items-center justify-center text-center p-8">
                <FaQuoteLeft className="text-4xl text-primary/20 mb-6" />
                <div className="h-32 md:h-24 relative w-full max-w-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <h3 className="text-xl md:text-2xl font-serif text-foreground italic mb-2">
                                &ldquo;{quotes[index].text}&rdquo;
                            </h3>
                            <p className="text-sm md:text-base text-primary font-medium tracking-wide">
                                — {quotes[index].source}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
}
