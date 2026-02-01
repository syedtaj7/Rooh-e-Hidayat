"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaFilePdf } from "react-icons/fa";
import { cn } from "@/lib/utils";

const documents = [
    { title: "Hajj Guide PDF", size: "2.4 MB" },
    { title: "Dua Book", size: "1.1 MB" },
    { title: "Map of Mina", size: "3.5 MB" },
];

export function Carousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % documents.length);
    const prev = () => setIndex((prev) => (prev - 1 + documents.length) % documents.length);

    return (
        <div className="relative w-full max-w-sm mx-auto h-64 bg-secondary/20 rounded-2xl p-4 overflow-hidden border border-secondary group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />

            <div className="relative z-10 h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-secondary flex flex-col items-center gap-4 text-center w-64"
                    >
                        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                            <FaFilePdf size={32} />
                        </div>
                        <div>
                            <h3 className="font-bold text-foreground">{documents[index].title}</h3>
                            <p className="text-sm text-foreground/50">{documents[index].size}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-foreground shadow-sm transition-colors opacity-0 group-hover:opacity-100"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-foreground shadow-sm transition-colors opacity-0 group-hover:opacity-100"
            >
                <FaChevronRight />
            </button>

            {/* Glow Effect on Swipe/Change - Simulated by key change */}
            <motion.div
                key={`glow-${index}`}
                className="absolute inset-x-0 bottom-0 h-1 bg-accent/50 blur-sm"
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: 1, opacity: 0 }}
                transition={{ duration: 0.6 }}
            />
        </div>
    );
}
