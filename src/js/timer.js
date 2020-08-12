export default class CountdownTimer {
  htmlRefs = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  };
  timerId;

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.initsRefs();
    this.startTick();
    this._finishTime = this.finishTime.bind(this);
  }

  coutDownAndDrawTimer = () => {
    const dataTime = new Date(this.targetDate).getTime();
    const dataNowTime = new Date().getTime();
    const time = dataTime - dataNowTime;

    this._finishTime(time);

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.htmlRefs.days.textContent = days;
    this.htmlRefs.hours.textContent = hours;
    this.htmlRefs.minutes.textContent = mins;
    this.htmlRefs.seconds.textContent = secs;
  };

  calculationOfTime = () => {};

  pad = value => {
    return String(value).padStart(2, '0');
  };

  onClickTimer = () => {
    this.coutDownAndDrawTimer();
  };

  startTick = () => {
    this.timerId = setInterval(this.onClickTimer, 1000);
  };

  finishTime = time => {
    if (time < 0) {
      clearInterval(this.timerId);
      alert('Finish-time');
      document.querySelector(this.selector).textContent = 'finish';
    }
  };

  initsRefs = () => {
    const rootElements = document.querySelector(this.selector);
    this.htmlRefs.days = rootElements.querySelector('span[data-value="days"]');
    this.htmlRefs.hours = rootElements.querySelector(
      'span[data-value="hours"]',
    );
    this.htmlRefs.minutes = rootElements.querySelector(
      'span[data-value="mins"]',
    );
    this.htmlRefs.seconds = rootElements.querySelector(
      'span[data-value="secs"]',
    );
  };
}
