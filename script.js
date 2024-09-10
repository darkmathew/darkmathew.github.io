const ctaText = document.getElementById('cta-text');
const phrases = [
    "Prepare-se para uma nova experiência!",
    "O universo dos jogos está prestes a mudar.",
    "Em breve, algo épico está chegando.",
    "Sinta a energia da MEGARI!",
    "Onde os sonhos se tornam realidade."
];

let phraseIndex = 0;

function changePhrase() {
    ctaText.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 6000);

// Inicia com a primeira frase
changePhrase();
