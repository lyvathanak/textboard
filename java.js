
        function animateRightToLeft() {
            const box = document.getElementById('animatedBox');
            box.style.transform = 'translateX(100%)';
            box.classList.remove('animate-down-to-up');
            void box.offsetWidth; // Trigger reflow to restart the animation
            box.classList.add('animate-right-to-left');
        }

        function animateDownToUp() {
            const box = document.getElementById('animatedBox');
            box.style.transform = 'translateY(100%)';
            box.classList.remove('animate-right-to-left');
            void box.offsetWidth; // Trigger reflow to restart the animation
            box.classList.add('animate-down-to-up');
        }
        function updateLEDText(value) {
            const ledText = document.querySelector('.led-text');
            ledText.textContent = value;
        }



