const ctaText = document.getElementById('cta-text');
const phrases = [
    "Prepare-se para uma nova experiência!",
    "O universo dos jogos está prestes a mudar.",
    "Em breve, algo épico está chegando.",
    "Sinta a energia da MEGARI!",
    "Onde os sonhos se tornam realidade."
];

let phraseIndex = 0;

// Função que muda a frase
function changePhrase() {
    // Aplica o fade out
    ctaText.classList.remove('fade-in');
    ctaText.classList.add('fade-out');
    
    // Aguarda o tempo da transição do fade-out (2 segundos)
    setTimeout(() => {
        // Muda o texto após o fade-out
        ctaText.textContent = phrases[phraseIndex];
        
        // Aplica o fade-in
        ctaText.classList.remove('fade-out');
        ctaText.classList.add('fade-in');
        
        // Atualiza o índice para a próxima frase
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }, 2000); // Tempo do fade-out
}

// Troca a frase a cada 6 segundos
setInterval(changePhrase, 6000);

// Inicia com a primeira frase
changePhrase();
