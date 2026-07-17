// A list of sweet messages. You can add as many as you want here!
const messages = [
    "Laialy, your smile lights up the whole room! ✨",
    "You are stronger and braver than you know.",
    "Just a reminder: I am so incredibly lucky to have you. ❤️",
    "Whenever you feel sad, remember I'm always here cheering for you.",
    "You are an absolute masterpiece, Laialy Samy. 🎨",
    "Take a deep breath. You're doing great, beautiful.",
    "I love you more than words can say! 🌸",
    "Your laugh is my absolute favorite sound in the world.",
    "Even on cloudy days, you are my sunshine. ☀️",
    "You make the world a better place just by being in it."
];

const btn = document.getElementById('smileBtn');
const messageText = document.getElementById('messageText');

// When the button is clicked, run this code
btn.addEventListener('click', () => {
    // 1. Pick a random message that isn't currently showing
    let randomMsg;
    do {
        randomMsg = messages[Math.floor(Math.random() * messages.length)];
    } while (randomMsg === messageText.innerText);

    // 2. Fade text out, change it, and fade it back in
    messageText.style.opacity = 0;
    setTimeout(() => {
        messageText.innerText = randomMsg;
        messageText.style.opacity = 1;
    }, 400); // Wait 400ms for the fade out

    // 3. Create a burst of floating emojis
    createFloatingElements();
});

// Function to generate the floating hearts and stars
function createFloatingElements() {
    const emojis = ['💖', '✨', '🌸', '🦋', '🥰', '🎈'];
    
    // Create 8 emojis per click
    for (let i = 0; i < 8; i++) {
        const item = document.createElement('div');
        
        // Pick a random emoji
        item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        item.classList.add('floating-item');
        
        // Randomize the starting position (left to right)
        item.style.left = Math.random() * 100 + 'vw';
        
        // Randomize how fast they float up (between 3 and 6 seconds)
        item.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        // Add it to the screen
        document.body.appendChild(item);

        // Remove it from the HTML after 6 seconds so the browser doesn't lag
        setTimeout(() => {
            item.remove();
        }, 6000);
    }
}