class VideoGreenScreen {

    constructor() {
        this.video = document.getElementById("video");
        this.c1 = document.getElementById("c1");
        this.ctx1 = this.c1.getContext("2d");

        this.video.addEventListener("play", () => {
            this.timerCallback();
            this.c1.width = this.video.videoWidth;
            this.c1.height = this.video.videoHeight;
            console.log(this.video.videoWidth);
            console.log(this.video.videoHeight);
            console.log(this.video.width);
            console.log(this.video.height);
        }, false);

        this.video.addEventListener("seeked", () => {
            this.computeFrame();
        }, false);
    }

    timerCallback() {
        if (this.video.paused || this.video.ended) {
            return;
        }

        this.computeFrame();

        window.requestAnimationFrame(() => {
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
