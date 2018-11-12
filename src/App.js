import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Gaijins Always Lose
//           </p>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

export default () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome To Gaijins Always Lose.</h1>
    </header>
    <p className="App-intro">
      My name is Gaijin. Welcome, and hello!
    </p>
  </div>
);
