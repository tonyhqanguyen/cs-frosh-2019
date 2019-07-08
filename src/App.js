import React from 'react';
import Main from './Main.js';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    );
  }
}


export default App;
