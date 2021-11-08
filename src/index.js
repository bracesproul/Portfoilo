import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar, Title, BackgroundDesc, Projects, FooterFunc, LineBreak, ColorMode, changeColor } from './App';
import reportWebVitals from './reportWebVitals';

class Main extends React.Component {
  render() {
    return (
      <body onLoad={changeColor}>
        <div>
          <NavBar />
          <ColorMode />
          <LineBreak />
          <Title />
          <BackgroundDesc />
          <Projects />
          <LineBreak />
          <FooterFunc />
        </div>
      </body>
    );
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
