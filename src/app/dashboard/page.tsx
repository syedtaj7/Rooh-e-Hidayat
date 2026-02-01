"use client";
import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { FaBookOpen, FaMosque, FaCheckCircle } from "react-icons/fa";

import { useProgress } from "@/context/progress-context";
import { umrahSteps } from "@/data/umrah-steps";
import { hajjSteps } from "@/data/hajj-steps";

const ProgressRing = ({ percentage, color, label }: { percentage: number; color: string; label: string }) => {
    // ... (same as before)
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-secondary opacity-30"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke={color}
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-foreground">{Math.round(percentage)}%</span>
                </div>
            </div>
            <span className="mt-2 font-medium text-foreground/80">{label}</span>
        </div>
    );
};

export default function DashboardPage() {
    const { visitedUmrahSteps, visitedHajjSteps, quranProgress } = useProgress();

    // Calculate percentages
    const umrahPercent = Math.min(100, Math.round((visitedUmrahSteps.length / umrahSteps.length) * 100)) || 0;
    const hajjPercent = Math.min(100, Math.round((visitedHajjSteps.length / hajjSteps.length) * 100)) || 0;

    return (
        <div className="min-h-screen pt-20 pb-20 bg-background transition-colors duration-500">
            <Section>
                {/* Welcome Header */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2"
                    >
                        Assalamu Alaikum
                    </motion.h1>
                    <p className="text-foreground/60">May Allah accept your efforts.</p>
                </div>

                {/* Progress Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <Card className="flex flex-col items-center p-8 bg-card border-border">
                        <ProgressRing percentage={umrahPercent} color="hsl(var(--primary))" label="Umrah Guide" />
                    </Card>
                    <Card className="flex flex-col items-center p-8 bg-card border-border">
                        <ProgressRing percentage={quranProgress} color="hsl(var(--accent))" label="Quran Reading" />
                    </Card>
                    <Card className="flex flex-col items-center p-8 bg-card border-border">
                        <ProgressRing percentage={hajjPercent} color="hsl(var(--destructive))" label="Hajj Prep" />
                    </Card>
                </div>

                {/* Recent Timeline */}
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Recent Activity</h2>
                    <div className="border-l-2 border-secondary pl-8 space-y-12 relative">
                        {[
                            { title: "Completed 'Surah Al-Fatiha'", time: "2 hours ago", icon: FaBookOpen },
                            { title: "Read 'Ihram' Step in Umrah Guide", time: "Yesterday", icon: FaMosque },
                            { title: "Started Hajj Preparation", time: "3 days ago", icon: FaCheckCircle },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative"
                            >
                                {/* Timeline Node */}
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-4 border-primary shadow-sm" />

                                <div className="bg-white p-6 rounded-xl border border-secondary shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4 mb-2">
                                        <item.icon className="text-primary" />
                                        <h3 className="font-bold text-foreground">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-foreground/50">{item.time}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
