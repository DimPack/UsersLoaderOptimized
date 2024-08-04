import React, { Component } from 'react';
import styles from './StopWatchTimeOut.module.css';

class StopWatchTimeOut extends Component {
  constructor() {
    super();
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
      isRuning: false,
    };
    this.identificator = null;
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const copyTime = new Date(time.valueOf());
      copyTime.setSeconds(copyTime.getSeconds() + 1);
      return { time: copyTime };
    });
  };
  start = () => {
    if (this.identificator === null) {
      this.setState({ isRuning: true });
    }
  };
  stop = () => {
    this.setState({ isRuning: false });
    clearTimeout(this.identificator);
    this.identificator = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {
    this.start();
  }

  componentDidUpdate() {
    const { isRuning } = this.state;
    if (isRuning) {
      this.identificator = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount() {
    this.stop();
  }

  render() {
    const { time } = this.state;

    return (
      <article className={styles.container}>
        <h2 className={styles.heading}>{time.toLocaleTimeString('en-GB')}</h2>
        <button onClick={this.start}>start</button>
        <button onClick={this.stop}  
        className={styles['btn-stop']}>stop</button>
        <button onClick={this.reset}>reset</button>
      </article>
    );
  }
}

export default StopWatchTimeOut;
