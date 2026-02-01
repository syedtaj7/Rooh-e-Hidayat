import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    fullWidth?: boolean;
}

export function Section({ className, children, fullWidth = false, ...props }: SectionProps) {
    return (
        <section
            className={cn(
                "py-16 md:py-24 relative overflow-hidden",
                className
            )}
            {...props}
        >
            <div className={cn(
                "mx-auto px-4 sm:px-6 lg:px-8",
                !fullWidth && "max-w-7xl"
            )}>
                {children}
            </div>
        </section>
    );
}
