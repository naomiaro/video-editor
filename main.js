class VideoGreenScreen {

    constructor() {
        this.video = document.getElementById("video");
        this.c1 = document.getElementById("c1");
        this.ctx1 = this.c1.getContext("2d");
        this.c2 = document.getElementById("c2");
        this.ctx2 = this.c2.getContext("2d");

        this.video.addEventListener("play", () => {
            this.timerCallback();
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

        setTimeout(() => {
            this.timerCallback();
        }, 0);
    }

    //rgb(43,213,66) - green screen
    computeFrame() {
        this.ctx1.drawImage(this.video, 0, 0, 320, 192);
        let frame = this.ctx1.getImageData(0, 0, 320, 192);
        let l = frame.data.length / 4;
        let i, r, g, b;

        for (i = 0; i < l; i++) {
            r = frame.data[i * 4 + 0];
            g = frame.data[i * 4 + 1];
            b = frame.data[i * 4 + 2];

            if (r > 39 && r < 128 && g > 130 && b < 175) {
                frame.data[i * 4 + 3] = 0;
            }
        }

        this.ctx2.putImageData(frame, 0, 0);
    }
};

export function init() {
    let videoScreen = new VideoGreenScreen();
}
