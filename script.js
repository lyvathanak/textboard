document.getElementById('generate').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const font = document.getElementById('font').value;
    const animation = document.getElementById('animation').value;
    const speed = document.getElementById('speed').value;
    const theme = document.getElementById('theme').value;

    const displayText = document.getElementById('displayText');
    const displayTextContainer = document.getElementById('displayTextContainer');

    displayText.textContent = text;
    displayText.style.color = color;
    displayText.style.fontFamily = font;
    displayText.style.animation = `${animation} ${speed} infinite`;
    displayTextContainer.style.backgroundColor = theme;

    document.getElementById('fullScreen').style.display = 'flex';
});

document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('fullScreen').style.display = 'none';
    document.body.style.backgroundColor = '#fff';
});
