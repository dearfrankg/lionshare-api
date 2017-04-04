const DEFAULT_PERIOD = 60 * 1000;

class UpdateJob {
  constructor(options = {}) {
    this.period = options.period;
    this.jobRunPeriod = options.jobRunPeriod || DEFAULT_PERIOD;
    this.exchange = options.exchange;
  }

  start = () => {
    this.interval = setInterval(async () => {
      try {
        console.log(`[${this.period}] Update job is running: ${new Date()}`);
        await this.exchange.updateAllCache(this.period);
        console.log(`[${this.period}] Update job is done`);
      } catch (e) {
        console.log(`[${this.period}] Update job failed`);
        console.log(e);
      }
    }, this.jobRunPeriod);
  }

  stop = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

export default UpdateJob;
