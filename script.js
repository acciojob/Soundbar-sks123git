const btns = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

let currentAudio = null;

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const sound = btn.dataset.sound;

        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play();
    });
});

stopBtn.addEventListener("click", () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});