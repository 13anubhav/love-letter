
document.addEventListener('DOMContentLoaded', () => {
    // Music toggle logic
    const audio = new Audio('meine-chode-hai-saare-raste.mp3');
    const musicButton = document.getElementById('music-toggle');
    let isPlaying = false;

    musicButton.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            musicButton.textContent = '▶';
        } else {
            audio.play();
            musicButton.textContent = '⏸';
        }
        isPlaying = !isPlaying;
    });

    // Interactive Heart Explosion on Click
    document.querySelector('.card').addEventListener('click', createHeartExplosion);

    // Mouse Move Heart Trail
    document.addEventListener('mousemove', createHeartTrail);

    function createHeartExplosion(event) {
        const heartCount = 20;
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.classList.add('js-heart');
            document.body.appendChild(heart);

            // Random starting point
            heart.style.left = `${event.clientX}px`;
            heart.style.top = `${event.clientY}px`;

            // Random explosion direction
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 200;
            const duration = Math.random() * 1000 + 1000;

            heart.animate([
                { 
                    transform: `rotate(45deg) translate(0, 0)`,
                    opacity: 1
                },
                { 
                    transform: `rotate(45deg) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
            }).onfinish = () => {
                heart.remove();
            };
        }
    }

    function createHeartTrail(event) {
        const heart = document.createElement('div');
        heart.classList.add('js-heart');
        document.body.appendChild(heart);

        heart.style.left = `${event.clientX}px`;
        heart.style.top = `${event.clientY}px`;

        heart.animate([
            { 
                transform: 'rotate(45deg) scale(1)',
                opacity: 0.5
            },
            { 
                transform: 'rotate(45deg) scale(0)',
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            heart.remove();
        };
    }
});
