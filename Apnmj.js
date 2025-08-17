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
