import * as React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
        <Router>
          <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn More...</Link>
          </div>
        </Router>
    );
  }
}
export default HomePage;
