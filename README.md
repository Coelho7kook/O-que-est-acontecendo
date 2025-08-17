https://github.com/Coelho7kook/O-que-est-acontecendo.git

// Movimento aleatório do botão "Não"
noBtn.addEventListener("mouseover", () => {
    // Cálculo considerando a largura/altura do container e o tamanho do botão
    const container = questionContainer.getBoundingClientRect();
    const button = noBtn.getBoundingClientRect();
    
    const maxX = container.width - button.width;
    const maxY = container.height - button.height;
    
    // Garante que o botão não saia dos limites
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    // Aplica as novas posições
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Ação do botão "Sim"
yesBtn.addEventListener("click", () => {
    // Mostra o loader
    heartLoader.style.display = "block";
    
    setTimeout(() => {
        // Esconde o loader e mostra o resultado
        heartLoader.style.display = "none";
        resultContainer.style.display = "block";
        
        // Inicia a animação (ajuste conforme seu elemento)
        if(gifResult) gifResult.play();
    }, 3000);
});

// Aumenta o botão "Sim" quando clicado
yesBtn.addEventListener("click", function() {
    this.style.transform = "scale(1.1)";
});

// Efeito de pulso no coração
heartLoader.innerHTML = '❤️';
heartLoader.style.animation = "pulse 1s infinite";

// Adicione no CSS:
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
