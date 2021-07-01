const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    timerFace: document.getElementById("timer-1"),
}



class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }
    start() {
        const x = setInterval(() => {
            const currentTime = Date.now();
            const diffTime = this.targetDate - currentTime;
            const timeComp = this.getTimeCount(diffTime);
            this.updateCountText(timeComp);
            if (diffTime < 0) {
                clearInterval(x);
                refs.timerFace.textContent = "EXPIRED";
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
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;
    }
}



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 02, 2021'),
});

timer.start();


