import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick';
import ButtonCounter from './components/buttonCounter';
import LightSwitch from './components/LightSwitch';

ReactDOM.render(
  <div>
    <ButtonCounter />
    <ClickityClick />
    <LightSwitch />
  </div>,

  document.getElementById('root')
);
