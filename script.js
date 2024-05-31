document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const fontSelect = document.getElementById('font-select');
    const colorSelect = document.getElementById('color-select');
    const animationSelect = document.getElementById('animation-select');
    const speedSelect = document.getElementById('speed-select');
    const themeGrid = document.getElementById('theme-grid');
    const themeSelect = document.getElementById('theme-select');
    const generateButton = document.getElementById('generate-button');
    const displaySection = document.getElementById('display-section');
    const displayText = document.getElementById('display-text');
    const backButton = document.getElementById('back-btn');

    const animations = {
        'Still': '',
        'Left to Right': 'animate-left-right',
        'Right to Left': 'animate-right-left',
        'Up': 'animate-up'
    };

    const speeds = {
        'Slow': 'animation-slow',
        'Medium': 'animation-medium',
        'Fast': 'animation-fast'
    };

    themeGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('theme-option')) {
            // Remove 'selected' class from all images
            document.querySelectorAll('.theme-option').forEach(img => img.classList.remove('selected'));
            // Add 'selected' class to the clicked image
            event.target.classList.add('selected');
            // Update the hidden input value with the selected theme
            themeSelect.value = event.target.getAttribute('data-theme');
        }
    });

    generateButton.addEventListener('click', () => {
        const text = textInput.value;
        const font = fontSelect.value;
        const color = colorSelect.value.toLowerCase();
        const animation = animations[animationSelect.value];
        const speed = speeds[speedSelect.value];
        const theme = themeSelect.value;

        displayText.textContent = text;
        displayText.style.fontFamily = font;
        displayText.style.color = color;
        displayText.className = `${animation} ${speed}`;

        displaySection.style.backgroundImage = `url(${theme})`;
        displaySection.classList.remove('hidden');
    });

    backButton.addEventListener('click', () => {
        displaySection.classList.add('hidden');
    });
});
// theme
 
   // Get the dropdown button, theme grid, and hidden input
   const dropdownButton = document.getElementById('dropdown-button');
   const themeGrid = document.getElementById('theme-grid');
   const themeSelect = document.getElementById('theme-select');
   const themeOptions = document.querySelectorAll('.theme-option');
   const dropdownText = document.querySelector('.dropdown-text');

   // Toggle the dropdown content
   dropdownButton.addEventListener('click', () => {
       themeGrid.classList.toggle('hidden');
   });

   // Add event listeners to all theme-option images
   themeOptions.forEach(option => {
       option.addEventListener('click', () => {
           // Update the hidden input field with the selected theme
           themeSelect.value = option.dataset.theme;
           
           // Update the dropdown button to display the selected theme image
           dropdownText.textContent = '';
           dropdownText.style.backgroundImage = `url(${option.src})`;
           dropdownText.style.backgroundSize = 'cover';
           dropdownText.style.width = '50px';
           dropdownText.style.height = '50px';
           dropdownText.style.display = 'inline-block';
           dropdownText.style.marginRight = '8px';

           // Hide the dropdown content
           themeGrid.classList.add('hidden');
       });
   });

   // Close the dropdown if clicked outside
   document.addEventListener('click', (event) => {
       if (!event.target.closest('.relative')) {
           themeGrid.classList.add('hidden');
       }
   });