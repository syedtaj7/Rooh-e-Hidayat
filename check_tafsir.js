

async function checkUrdu() {
    // 818: Tazkir ul Quran (Maulana Wahiduddin Khan, likely concise)
    // 159: Bayan ul Quran
    // 168: Ma'arif al-Qur'an (likely long)
    const ids = [818, 159, 168];
    for (const id of ids) {
        try {
            const res = await fetch(`https://api.quran.com/api/v4/tafsirs/${id}/by_ayah/2:255`);
            const data = await res.json();
            console.log(`\n--- ID ${id}: ${data.tafsir.resource_name} ---`);
            console.log("Length:", data.tafsir.text.length);
            console.log("Preview:", data.tafsir.text.substring(0, 100)); // Urdu might need substring care, but bytes are fine
        } catch (e) {
            console.log(id, "Failed");
        }
    }
}
checkUrdu();
