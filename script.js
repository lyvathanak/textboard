document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const backBtn = document.getElementById('back-btn');
    const displaySection = document.getElementById('display-section');
    const displayText = document.getElementById('display-text');

    generateBtn.addEventListener('click', () => {
        const textInput = document.getElementById('text-input').value;
        const fontSelect = document.getElementById('font-select').value;
        const colorSelect = document.getElementById('color-select').value;
        const animationSelect = document.getElementById('animation-select').value;
        const speedSelect = document.getElementById('speed-select').value;
        const themeSelect = document.getElementById('theme-select').value;

        displayText.textContent = textInput;
        displayText.style.fontFamily = fontSelect;
        displayText.style.color = colorSelect.toLowerCase();

        displayText.className = `${animationSelect.toLowerCase()} ${speedSelect.toLowerCase()}`;
        displaySection.className = `fixed inset-0 flex items-center justify-center ${themeSelect.toLowerCase()}`;
        displaySection.classList.remove('hidden');
    });

    backBtn.addEventListener('click', () => {
        displaySection.classList.add('hidden');
    });
    
});