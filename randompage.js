function goToRandomPage() {
    const links = [
        "https://garrett3705.github.io/cis3020lab/index.html",
        "https://garrett3705.github.io/cis3020lab/NPCs.html",
        "https://garrett3705.github.io/cis3020lab/Events.html",
        "https://garrett3705.github.io/cis3020lab/Bosses.html",
        "https://garrett3705.github.io/cis3020lab/Biomes.html",
        "https://garrett3705.github.io/cis3020lab/QandA.html"
    ];

    const randomIndex = Math.floor(Math.random() * links.length);

    window.location.href = links[randomIndex];
}
