import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';


document.addEventListener("DOMContentLoaded", () => {

  // Instead of using a node that's already in the html
  // to hold the React App, we create a div and plact it
  // in the document. This div will hold the React App.
  const rootDiv = document.createElement('div');
  document.body.append(rootDiv);
  ReactDOM.render(
    <App />,
    rootDiv
  );
});
