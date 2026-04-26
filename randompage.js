function goToRandomPage() {
    const links = [
        "Biomes.html",
        "Bosses.html",
        "Events.html",
        "Lab.html",
        "NPCs.html",
        "QandA.html"
    ];

    const randomIndex = Math.floor(Math.random() * links.length);

    window.location.href = links[randomIndex];
}
