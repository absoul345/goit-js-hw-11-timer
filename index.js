class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;

        this.daysRef = document.querySelector(`${this.selector} [data-value="days"]`);
        this.hoursRef = document.querySelector(`${this.selector} [data-value="hours"]`);
        this.minsRef = document.querySelector(`${this.selector} [data-value="mins"]`);
        this.secsRef = document.querySelector(`${this.selector} [data-value="secs"]`);
        this.timerFace = document.getElementById("timer-1");
    }

    start() {
        const x = setInterval(() => {
            const currentTime = Date.now();
            const diffTime = this.targetDate - currentTime;
            const timeComp = this.getTimeCount(diffTime);
            this.updateCountText(timeComp);
            if (diffTime < 0) {
                clearInterval(x);
                this.timerFace.textContent = "EXPIRED";
            }
            console.log(timeComp);
        }, 1000)
    }
    getTimeCount(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }
    pad(value) {
        return String(value).padStart(2, "0");
    }

    updateCountText({ days, hours, mins, secs }) {
        this.daysRef.textContent = `${days}`;
        this.hoursRef.textContent = `${hours}`;
        this.minsRef.textContent = `${mins}`;
        this.secsRef.textContent = `${secs}`;
    }
}



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 01, 2022'),
});

timer.start();


