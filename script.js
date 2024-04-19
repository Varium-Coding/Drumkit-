document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll(".key") 
    const sounds = document.querySelectorAll(".drumkitSounds audio") // Grabs all drumkit items -> specifically audio
    function playSound(soundName) {// sets the core item that my code will use (Sound name) so that it can use the established linked audio files
        const sound = Array.from(sounds).find(audio => audio.classList.contains(soundName)) 
        sound.currentTime = 0
        sound.play()
    }
    keys.forEach(key => {
        key.addEventListener("click", () => { // looks for a click
            const soundName = key.classList[1] // uses the previous established code to make the sounds link to clicks
            playSound(soundName)  // does exactly what it says on the tin, plays the audio
        })
    })
    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();   // makes it so that if someone has capslock on, doesnt break my code!
        const keyElement = document.querySelector(`.key.${key}`); // Looks for a key press
        if (keyElement) {
            const soundName = keyElement.classList[1]; // same as the click one, links the soundname to classlists so boom = boom etc.
            playSound(soundName);
        } else {
            console.error(`Key not found: ${key}`);
        }
    });
    
})
