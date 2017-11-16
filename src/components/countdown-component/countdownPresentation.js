import * as React from 'react';

const CountdownPresentation = (props) => {
  let display=[0,0];
  if(props.timeLeft>0){
    display=props.timeLeft.toString().split('');
    if (display.length===1)display.unshift('0')
  }
  return (
    <div className="col-lg-8">
      <div className="countdown">
        <div className="bloc-time sec">
          <h2>Seconds</h2>
          <div className="col-lg-8" style={{ float: "right" }}>
            <div className="figure sec sec-1">
              <span className="top">{display[0]}</span>
            </div>

            <div className="figure sec sec-2">
              <span className="top">{display[1]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CountdownPresentation;
