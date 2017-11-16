import * as React from 'react';

const BindingPresentation = function (props) {
  if (props.name.length) {
    return (
      <div className="col-lg-10 col-lg-offset-1 presentation-component">
        <h1>Hello {props.name}, welcome to my app</h1>
        <br />
      </div>
    );
  } else {
    return (
      <div className="col-lg-10 col-lg-offset-1 presentation-component">
        <h2>Instructions</h2>
        <p>Write your name in the input field.</p>
      </div>
    )
  }
}

export default BindingPresentation;
