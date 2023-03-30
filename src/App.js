import React from 'react';

import Rating from './Components/Rating';
import Submit from './Components/Submit';

import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes.index}>
      <Rating />
      {/* <Submit /> */}
    </div>
  );
};

export default App;
