import * as React from 'react';
import CountdownPresentation from './countdownPresentation';
import './countdownComponent.css';

class CountdownContainer extends React.Component {
  constructor() {
    super();
    this.intervalId;
    this.state = {
      timeLeft: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNumberInput = this.addNumberInput.bind(this);
    this.subtractNumberInput = this.subtractNumberInput.bind(this);
  }
  handleSubmit() {
    this.setState({ timeLeft: this.numberInput.value }, () => {
      this.intervalId = setInterval(() => {
        this.updateTimer()
      }, 1000)
    })
  }
  addNumberInput() {
    this.numberInput.value++
  }
  subtractNumberInput() {
    this.numberInput.value--
  }
  updateTimer() {
    this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }), () => {
      console.log("Inside updateTimer")
      if (this.state.timeLeft === 0) {
        clearInterval(this.intervalId)
        this.numberInput.value=0;
        console.log("Time's up")
      }
    })
  }
  render() {
    return (
      <div className="countdown-container">
        <div className="col-lg-6" style={{ textAlign: "right" }}>
          <h3>Seconds to count (1-99):</h3>
        </div>
        <div className="col-lg-6" style={{ height: "56px", paddingTop: "16px" }}>
          <div className="input-group spinner">
            <input type="text" className="form-control" defaultValue="0" ref={(numberInput) => this.numberInput = numberInput} />
            <div className="input-group-btn-vertical">
              <button className="btn btn-default" type="button" onClick={this.addNumberInput}><i className="fa fa-caret-up" /></button>
              <button className="btn btn-default" type="button" onClick={this.subtractNumberInput}><i className="fa fa-caret-down" /></button>
            </div>
          </div>
        </div>
        <br />
        <div className="col-lg-8 col-lg-offset-2" style={{ textAlign: "center", marginTop: "20px" }}>
          <button className="btn btn-lg btn-block btn-success" onClick={this.handleSubmit}>Start</button>
        </div>
        <br />
        <div className="col-lg-offset-2 col-lg-8">
          <CountdownPresentation timeLeft={this.state.timeLeft} />
        </div>
      </div>
    );
  }
}
export default CountdownContainer;
