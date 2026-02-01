"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { umrahSteps } from "@/data/umrah-steps";
import { FaGlobe } from "react-icons/fa";
import { useProgress } from "@/context/progress-context";
export function UmrahReader() {
    const [activeStepId, setActiveStepId] = useState<string>(umrahSteps[0].id);
    const [activeLang, setActiveLang] = useState<"en" | "ur" | "fr">("en");
    const { markUmrahStepVisited } = useProgress();

    // Intersection Observer to update active step
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveStepId(entry.target.id);
                        markUmrahStepVisited(entry.target.id); // Mark as visited
                    }
                });
            },
            { threshold: 0.6, rootMargin: "-10% 0px -50% 0px" }
        );
        // ...

        umrahSteps.forEach((step) => {
            const el = document.getElementById(step.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const activeStep = umrahSteps.find((s) => s.id === activeStepId) || umrahSteps[0];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Panel - Sticky Translation/Context */}
            <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 bg-primary/5 border-r border-secondary p-8 flex flex-col pt-24 overflow-hidden relative">

                {/* Language Dropdown (Mock) */}
                <div className="flex justify-end mb-8 relative z-10">
                    <button className="flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
                        <FaGlobe />
                        <span>English</span>
                    </button>
                </div>

                <motion.div
                    key={activeStep?.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center h-full pb-20"
                >
                    <div className="mb-6">
                        <h3 className="text-accent font-bold uppercase tracking-wider text-sm mb-2">Current Step</h3>
                        <h2 className="text-3xl font-serif font-bold text-foreground">{activeStep?.title}</h2>
                    </div>

                    {activeStep?.arabic && (
                        <div className="mb-8 p-6 bg-white/50 rounded-xl border border-secondary shadow-sm">
                            <p className="text-3xl font-serif text-right text-foreground mb-4 leading-loose font-arabic">
                                {activeStep.arabic}
                            </p>
                            <p className="text-sm text-foreground/60 italic mb-2">
                                {activeStep.transliteration}
                            </p>
                            <div className="h-px w-full bg-secondary my-3" />
                            <p className="text-lg text-primary font-medium">
                                {activeStep.translation}
                            </p>
                            {/* Glow effect syncing */}
                            <motion.div
                                className="absolute inset-0 rounded-xl shadow-[0_0_20px_rgba(168,213,186,0.3)] pointer-events-none"
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    )}

                    {!activeStep?.arabic && (
                        <div className="text-foreground/50 italic">
                            No specific supplication for this step. Focus on remembrance of Allah.
                        </div>
                    )}
                </motion.div>

                {/* Background Decor */}
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Right Panel - Scrollable Content */}
            <div className="lg:w-2/3 bg-background relative">
                <div className="max-w-3xl mx-auto px-6 py-24 lg:py-32">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Umrah Guide</h1>
                        <p className="text-xl text-foreground/70">A step-by-step spiritual journey to the House of Allah.</p>
                    </div>

                    <div className="space-y-24">
                        {umrahSteps.map((step, index) => (
                            <div key={step.id} id={step.id} className="scroll-mt-32 group">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl font-bold font-serif text-primary border border-secondary group-hover:border-accent transition-colors">
                                        {index + 1}
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {step.title}
                                    </h2>
                                </div>

                                <div className="prose prose-lg text-foreground/80 leading-relaxed pl-16">
                                    <p className="text-lg mb-4 font-medium">{step.description}</p>
                                    <p>{step.details}</p>

                                    {/* Interactive element placeholder */}
                                    <div className="mt-8 p-4 bg-secondary/30 rounded-lg border border-secondary flex items-center gap-4 hover:bg-secondary/50 transition-colors cursor-pointer">
                                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        <span className="text-sm font-medium">Tap for detailed ruling details</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="h-40" /> {/* Bottom spacer */}
                </div>
            </div>
        </div>
    );
}
