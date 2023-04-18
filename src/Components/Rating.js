import { useState } from 'react';

import classes from './Rating.module.css';
import StarLogo from '../../src/icon-star.svg';

const Rating = () => {
  const [select, setSelect] = useState(false);

  const selectHandler = () => {
    setSelect(!select);
  };

  return (
    <div className={classes.square}>
      {/* <!-- Rating state start --> */}
      <img
        src={StarLogo}
        className={classes.star}
      ></img>
      <h1>How did we do?</h1>
      <p className={classes.paragraph}>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>

      <ul className={select ? classes.selected : classes.select}>
        <li onClick={selectHandler}>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>

      <button className={classes.submit}>SUBMIT</button>

      {/* <!-- Rating state end --> */}
    </div>
  );
};

export default Rating;
