"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate auth
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => router.push("/dashboard"), 1000);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md px-4"
            >
                <Card className="bg-white/90 backdrop-blur-xl border-secondary p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-serif font-bold text-foreground">Welcome Back</h1>
                        <p className="text-foreground/60 mt-2">Sign in to continue your journey</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground ml-1">Email</label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground ml-1">Password</label>
                            <div className="relative group">
                                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-secondary bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <Button
                            variant="primary"
                            className="w-full py-3 relative overflow-hidden"
                            disabled={loading || success}
                        >
                            {loading ? (
                                <motion.div
                                    className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full mx-auto"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                            ) : success ? (
                                <motion.span
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex items-center justify-center gap-2"
                                >
                                    Success! ✨
                                </motion.span>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-secondary"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-foreground/50">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button className="flex items-center gap-2 px-6 py-2 border border-secondary rounded-lg hover:bg-secondary/20 transition-colors">
                                <FaGoogle className="text-foreground" />
                                <span className="text-sm font-medium">Google</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-foreground/60">Don't have an account? </span>
                        <Link href="/signup" className="text-primary hover:underline font-medium">
                            Sign up
                        </Link>
                    </div>
                </Card>
            </motion.div>
        </div>
    );
}
