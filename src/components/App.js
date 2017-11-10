import * as React from 'react';
import Main from '../components/main/Main';
import { routes } from '../routes';


class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Main routes={routes}/>
      </div>
    );
  }
}
export default App;
