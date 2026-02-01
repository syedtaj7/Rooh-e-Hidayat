"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type ProgressContextType = {
    visitedUmrahSteps: string[];
    visitedHajjSteps: string[];
    markUmrahStepVisited: (id: string) => void;
    markHajjStepVisited: (id: string) => void;
    quranProgress: number; // percentage
    updateQuranProgress: (percent: number) => void;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
    const [visitedUmrahSteps, setVisitedUmrahSteps] = useState<string[]>([]);
    const [visitedHajjSteps, setVisitedHajjSteps] = useState<string[]>([]);
    const [quranProgress, setQuranProgress] = useState(0);

    // Load from local storage on mount
    useEffect(() => {
        const savedUmrah = localStorage.getItem("visitedUmrahSteps");
        const savedHajj = localStorage.getItem("visitedHajjSteps");
        const savedQuran = localStorage.getItem("quranProgress");

        if (savedUmrah) setVisitedUmrahSteps(JSON.parse(savedUmrah));
        if (savedHajj) setVisitedHajjSteps(JSON.parse(savedHajj));
        if (savedQuran) setQuranProgress(Number(savedQuran));
    }, []);

    const markUmrahStepVisited = (id: string) => {
        if (!visitedUmrahSteps.includes(id)) {
            const newSteps = [...visitedUmrahSteps, id];
            setVisitedUmrahSteps(newSteps);
            localStorage.setItem("visitedUmrahSteps", JSON.stringify(newSteps));
        }
    };

    const markHajjStepVisited = (id: string) => {
        if (!visitedHajjSteps.includes(id)) {
            const newSteps = [...visitedHajjSteps, id];
            setVisitedHajjSteps(newSteps);
            localStorage.setItem("visitedHajjSteps", JSON.stringify(newSteps));
        }
    };

    const updateQuranProgress = (percent: number) => {
        setQuranProgress(percent);
        localStorage.setItem("quranProgress", percent.toString());
    };

    return (
        <ProgressContext.Provider
            value={{
                visitedUmrahSteps,
                visitedHajjSteps,
                markUmrahStepVisited,
                markHajjStepVisited,
                quranProgress,
                updateQuranProgress,
            }}
        >
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error("useProgress must be used within a ProgressProvider");
    }
    return context;
}
