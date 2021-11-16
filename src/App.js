import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { DYNAMIC_NAME } = process.env;
    return (
      <div className="app">
        <div>
          <img src="images/logo.png" />
          <h1>
            {DYNAMIC_NAME}
          </h1>
        </div>
      </div>
    );
  }
}

export default hot(App);
