function showText(text, button) {
    const infoTexts = document.querySelectorAll('.info-text');
    infoTexts.forEach((infoText) => {
        infoText.textContent = ''; // Limpiar texto previo
    });

    const targetInfoText = button.parentElement.querySelector('.info-text');
    targetInfoText.textContent = text; // Mostrar texto en la tarjeta correspondiente
}
