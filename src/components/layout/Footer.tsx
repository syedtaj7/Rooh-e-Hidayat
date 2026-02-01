import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-secondary/30 mt-auto border-t border-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-serif text-2xl font-bold text-foreground">
                            Islamic Guidance
                        </Link>
                        <p className="mt-4 text-sm text-foreground/70 max-w-xs leading-relaxed">
                            A spiritual companion for your journey. Peace, guidance, and reflection for every step.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { label: "Umrah Guide", href: "/umrah" },
                                { label: "Hajj Steps", href: "/hajj" },
                                { label: "Read Quran", href: "/quran" },
                                { label: "About Us", href: "/about" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-accent transition-colors" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-secondary/50 text-center text-sm text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Islamic Guidance. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
