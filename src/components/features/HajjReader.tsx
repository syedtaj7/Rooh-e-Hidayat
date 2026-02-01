"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { hajjSteps } from "@/data/hajj-steps";
import { Carousel } from "@/components/ui/Carousel";
import { FaGlobe } from "react-icons/fa";
import { useProgress } from "@/context/progress-context";

export function HajjReader() {
    const [activeStepId, setActiveStepId] = useState<string>(hajjSteps[0].id);
    const { markHajjStepVisited } = useProgress();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveStepId(entry.target.id);
                        markHajjStepVisited(entry.target.id);
                    }
                });
            },
            { threshold: 0.6, rootMargin: "-10% 0px -50% 0px" }
        );
        hajjSteps.forEach((step) => {
            const el = document.getElementById(step.id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const activeStep = hajjSteps.find((s) => s.id === activeStepId) || hajjSteps[0];

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Panel - Sticky Context & Translation */}
            <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 bg-primary/5 border-r border-secondary p-8 flex flex-col pt-24 overflow-hidden relative">
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
                        <h3 className="text-fuchsia-600 font-bold uppercase tracking-wider text-sm mb-2">Hajj Day {activeStep?.id === 'ihram-hajj' ? '8' : '9-13'}</h3>
                        <h2 className="text-3xl font-serif font-bold text-foreground">{activeStep?.title}</h2>
                    </div>

                    {activeStep?.arabic ? (
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
                        </div>
                    ) : (
                        <div className="p-6 bg-white/50 rounded-xl border border-secondary text-foreground/60 italic">
                            Follow the guidance of your group leader and maintain patience.
                        </div>
                    )}
                </motion.div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
            </div>

            {/* Right Panel - Steps & Tools */}
            <div className="lg:w-2/3 bg-background relative">
                <div className="max-w-3xl mx-auto px-6 py-24 lg:py-32">
                    <div className="mb-12 flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Hajj Guide</h1>
                            <p className="text-xl text-foreground/70">The journey of a lifetime.</p>
                        </div>
                    </div>



                    <div className="space-y-24">
                        {hajjSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                id={step.id}
                                className="scroll-mt-32 group relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Vertical Line Connector */}
                                {index !== hajjSteps.length - 1 && (
                                    <div className="absolute left-6 top-16 bottom-[-96px] w-px bg-secondary group-hover:bg-accent/50 transition-colors" />
                                )}

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xl font-bold font-serif text-accent border border-secondary group-hover:bg-accent group-hover:text-white transition-all shadow-sm z-10">
                                        {index + 1}
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                                        {step.title}
                                    </h2>
                                </div>

                                <div className="prose prose-lg text-foreground/80 leading-relaxed pl-16">
                                    <p className="text-lg mb-4 font-medium">{step.description}</p>
                                    <p>{step.details}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="h-40" />
                </div>
            </div>
        </div>
    );
}
