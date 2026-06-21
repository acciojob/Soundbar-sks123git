const buttons = document.querySelectorAll(".btn");
const stopBtn = document.querySelector(".stop");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll("audio").forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        const audio = document.getElementById(button.dataset.sound);
        audio.play();
    });
});

stopBtn.addEventListener("click", () => {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
});