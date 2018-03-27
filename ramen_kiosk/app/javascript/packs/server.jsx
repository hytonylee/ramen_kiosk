import React from 'react';
import ReactDOM from 'react-dom';
import AppAlt from '../components/AppAlt';


document.addEventListener("DOMContentLoaded", () => {


  const rootDiv = document.createElement('div');
  document.body.append(rootDiv);
  ReactDOM.render(
    <AppAlt />,
    rootDiv
  );
});
