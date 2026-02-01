export type UmrahStep = {
    id: string;
    title: string;
    description: string;
    arabic?: string;
    transliteration?: string;
    translation?: string;
    details: string; // Long content
};

export const umrahSteps: UmrahStep[] = [
    {
        id: "ihram",
        title: "1. Ihram",
        description: "Entering the state of purity and intention.",
        arabic: "لَبَّيْكَ اللَّهُمَّ عُمْرَةً",
        transliteration: "Labbayk Allahuma Umrah",
        translation: "Here I am O Allah, making Umrah.",
        details: "Before reaching the Meeqat, perform Ghusl (ritual bath), wear the Ihram garments (two white seamless sheets for men), and make the intention (Niyyah) for Umrah. Recite the Talbiyah frequently.",
    },
    {
        id: "tawaf",
        title: "2. Tawaf",
        description: "Circumambulating the Kaaba seven times.",
        arabic: "بِسْمِ اللَّهِ، وَاللَّهُ أَكْبَرُ",
        transliteration: "Bismillahi, Allahu Akbar",
        translation: "In the name of Allah, Allah is the Greatest.",
        details: "Enter Masjid al-Haram with your right foot. Start at the Black Stone (Hajar al-Aswad). Circle the Kaaba seven times counter-clockwise. Upon finishing, pray two Rakaats behind Maqam Ibrahim.",
    },
    {
        id: "sai",
        title: "3. Sa'i",
        description: "Walking between Safa and Marwah.",
        arabic: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ",
        transliteration: "Innas-Safa wal-Marwata min sha'a'irillah",
        translation: "Indeed, Safa and Marwah are among the symbols of Allah.",
        details: "Proceed to Mount Safa. Face the Kaaba and make supplication. Walk towards Marwah. Repeat this 7 times, ending at Marwah. Men should run between the green lights.",
    },
    {
        id: "halq",
        title: "4. Halq or Taqsir",
        description: "Shaving or trimming the hair.",
        arabic: "",
        transliteration: "",
        translation: "",
        details: "After completing Sa'i, men should shave their heads (Halq) or trim their hair (Taqsir). Women should trim a fingertip's length of their hair. This concludes the Umrah.",
    },
];
