"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaKaaba, FaQuran, FaMosque, FaUser } from "react-icons/fa";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const features = [
    {
        title: "Umrah Guide",
        desc: "Step-by-step guidance for your spiritual journey.",
        icon: FaKaaba,
        href: "/umrah",
        color: "text-primary",
    },
    {
        title: "Hajj Steps",
        desc: "Complete rituals and manasik of Hajj explained.",
        icon: FaMosque,
        href: "/hajj",
        color: "text-accent",
    },
    {
        title: "Read Quran",
        desc: "Immersive reading experience with translation.",
        icon: FaQuran,
        href: "/quran",
        color: "text-emerald-500",
    },
    {
        title: "Tracking",
        desc: "Monitor your progress and spiritual habits.",
        icon: FaUser,
        href: "/dashboard",
        color: "text-blue-500",
    },
];

export function NavigationGrid() {
    return (
        <Section>
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    Begin Your Journey
                </h2>
                <p className="text-foreground/60 max-w-2xl mx-auto">
                    Explore the pillars of faith and find guidance for every step of your path.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, i) => {
                    const Icon = feature.icon;
                    return (
                        <Link key={i} href={feature.href} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <Card className="h-full group-hover:border-primary/50 transition-colors flex flex-col items-center text-center p-8">
                                    <div className={`w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`text-3xl ${feature.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif mb-2 text-foreground group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-foreground/60 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </Card>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </Section>
    );
}
