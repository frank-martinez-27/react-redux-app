import * as React from 'react';
import BindingPresentation from './bindingPresentation';
import './bindingComponent.css';

class BindingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:""
    };
    this.changeHandler=this.changeHandler.bind(this);
  }
  changeHandler(e){
    this.setState({name:e.target.value})
  }
  render() {
    return (
      <div>
        <div className="col-lg-1" />
        <div className="col-lg-4 container-title">What's your name?</div>
        <div className="row">
          <div className="col-lg-6" style={{paddingTop:"5px"}}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                value={this.state.name}
                onChange={this.changeHandler}
              />
            </div>
          </div>
        </div>
        <hr />
        <BindingPresentation name={this.state.name}/>
      </div>
    );
  }
}

export default BindingContainer;
