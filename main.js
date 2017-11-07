class VideoGreenScreen {

    constructor() {
        this.video = document.getElementById("video");
        this.c1 = document.getElementById("c1");
        this.ctx1 = this.c1.getContext("2d");
        this.c1.width = this.video.videoWidth / 2;
        this.c1.height = this.video.videoHeight / 2;

        this.video.addEventListener("play", () => {
            this.timerCallback();
            
        }, false);

        this.video.addEventListener("seeked", () => {
            this.computeFrame();
        }, false);

        document.querySelector('.play').addEventListener("click", () => {
            this.video.play();
        });

        document.querySelector('.pause').addEventListener("click", () => {
            this.video.pause();
        })
    }

    timerCallback() {
        if (this.video.paused || this.video.ended) {
            return;
        }

        window.requestAnimationFrame((timestamp) => {
            this.computeFrame();
            this.timerCallback();
        });
    }

    computeFrame() {
        this.ctx1.drawImage(this.video, 0, 0, this.c1.width, this.c1.height);
    }
};

export function init() {
    let videoScreen = new VideoGreenScreen();
}
