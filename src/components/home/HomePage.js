import * as React from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
          <NavLink to="about" className="btn btn-primary btn-lg">Learn More...</NavLink>
        </div>
      </div>
    );
  }
}
export default HomePage;
