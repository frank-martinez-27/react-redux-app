import * as React from 'react';
import { NavLink } from 'react-router-dom';

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      hasErrored: false,
      isLoading: false
    };
  }
  componentWillMount() {
    this.loadData("http://5a09d7577e1850001267a8c3.mockapi.io/api/todos").then(
      (res) => res
    );
  }
  loadData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        this.setState({ isLoading: false });

        return response;
      })
      .then(
      (res) => res.json()
      )
      .then(
      (todos) => {
        this.setState({ todos });
        return todos;
      }
      ).catch(() => this.setState({ hasErrored: true }));
  }
  render() {
    if (this.state.hasErrored) {
      return <h1>Sorry! There was an error loading the items</h1>;
    }

    if (this.state.isLoading) {
      return <h1>Loading…</h1>;
    }
    return (
      <div>
        <div className="jumbotron">
          <h1>REST Call with Fetch</h1>
          <p>However, in reality, a component shouldn't include logic to fetch data, and data shouldn't be stored in a component's state, so this is where Redux comes in.</p>
          <NavLink to="about" className="btn btn-primary btn-lg">Learn More...</NavLink>
        </div>
        <ul>
          {this.state.todos.map((todo) => <li key={todo.id}>{todo.name}</li>)}
        </ul>
      </div>
    );
  }
}
export default HomePage;
