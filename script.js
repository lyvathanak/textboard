
document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('color-picker');
    const selectedColor = colorPicker.querySelector('.selected-color');
    const colorDropdown = colorPicker.querySelector('.color-dropdown');
    const selectedColorBox = document.getElementById('selected-color-box');
    const selectedColorName = document.getElementById('selected-color-name');

    selectedColor.addEventListener('click', () => {
        colorDropdown.style.display = colorDropdown.style.display === 'none' ? 'block' : 'none';
    });
    colorDropdown.addEventListener('click', (event) => {
        const colorOption = event.target.closest('.color-option');
        if (colorOption) {
            const colorName = colorOption.getAttribute('data-color');
            selectedColorBox.style.backgroundColor = colorName.toLowerCase();
            selectedColorName.textContent = colorName;
            colorDropdown.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!colorPicker.contains(event.target)) {
            colorDropdown.style.display = 'none';
        }
    });
});

document.getElementById('generate-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const font = document.getElementById('font-select').value;
    const color = document.getElementById('selected-color-name').textContent.toLowerCase();
    const animation = document.getElementById('animation-select').value.toLowerCase().replace(/\s+/g, '-');
    const speed = document.getElementById('speed-select').value.toLowerCase();
    const theme = document.getElementById('theme-select').value.toLowerCase();

    const displayText = document.getElementById('display-text');
    displayText.textContent = text;
    displayText.style.fontFamily = font;
    displayText.style.color = color;
    displayText.className = `text-5xl ${animation} ${speed}`;

    if (animation === 'led') {
        displayText.classList.add('led');
    } else {
        displayText.classList.remove('led');
    }

    const displaySection = document.getElementById('display-section');
    displaySection.classList.remove('hidden');
    displaySection.className = theme === 'dark' ? 'fixed inset-0 flex items-center justify-center bg-gray-800 text-white' : 'fixed inset-0 flex items-center justify-center bg-gray-100';

    document.querySelector('.container').classList.add('hidden');
});


document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('display-section').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
});