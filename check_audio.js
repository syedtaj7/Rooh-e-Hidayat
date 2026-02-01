
const BASE_URL = "https://api.quran.com/api/v4";

async function checkAudio() {
    // Checking Chapter 1
    const res = await fetch(`${BASE_URL}/recitations/7/by_chapter/1`);
    const data = await res.json();
    console.log("Count:", data.audio_files.length);
    console.log("First URL:", data.audio_files[0].url);
    console.log("First Segments:", JSON.stringify(data.audio_files[0].segments)); // Check if segments exist
    if (data.audio_files.length > 1) {
        console.log("Second URL:", data.audio_files[1].url);
    }

    // Check chapter_recitations endpoint
    // Reciter 7 might not be in chapter_recitations or has different ID.
    // Common ID for Mishary Full is 7? or maybe different. 
    // Let's list chapter recitations.
    const res2 = await fetch(`${BASE_URL}/resources/chapter_recitations`); // Hypothetical or check recitations?
    // Actually simpler: try fetching from chapter_recitations/7/1

    const res3 = await fetch(`${BASE_URL}/chapter_recitations/7/1`);
    if (res3.ok) {
        const data3 = await res3.json();
        console.log("Chapter Recitation Response:", JSON.stringify(data3, null, 2));
    } else {
        console.log("Chapter Recitation 7 failed");
    }
}

checkAudio();
