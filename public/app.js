window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#20c8ee',
        '#e8841a',
        '#e0f710',
        '#3653fa',
        '#dc1783',
        '#9bd01f',
    ];

    // Create a functions that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';

        bubble.addEventListener('animationend', function removeBubbleEle() {
            visual.removeChild(this);
        });
    };

    // Lets get going with the sound
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function clickNPlay() {
            // Reset the audio time
            sounds[index].currentTime = 0;

            // Play the audio
            sounds[index].play();

            createBubbles(index);
        });
    });
});
