import { useState } from 'react';

import classes from './Rating.module.css';
import StarLogo from '../../src/icon-star.svg';

const Rating = (props) => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);

  const [rating, setRating] = useState();
  const [ratingSelected, setRatingSelected] = useState(false);

  const selectRatingHandler1 = () => {
    setRating(event.target.value);
    setRatingSelected(true);
    setSelect1(true);
    setSelect2(false);
    setSelect3(false);
    setSelect4(false);
    setSelect5(false);
  };

  const selectRatingHandler2 = () => {
    setRating(event.target.value);
    setRatingSelected(true);
    setSelect1(false);
    setSelect2(true);
    setSelect3(false);
    setSelect4(false);
    setSelect5(false);
  };

  const selectRatingHandler3 = () => {
    setRating(event.target.value);
    setRatingSelected(true);
    setSelect1(false);
    setSelect2(false);
    setSelect3(true);
    setSelect4(false);
    setSelect5(false);
  };

  const selectRatingHandler4 = () => {
    setRating(event.target.value);
    setRatingSelected(true);
    setSelect1(false);
    setSelect2(false);
    setSelect3(false);
    setSelect4(true);
    setSelect5(false);
  };

  const selectRatingHandler5 = () => {
    setRating(event.target.value);
    setRatingSelected(true);
    setSelect1(false);
    setSelect2(false);
    setSelect3(false);
    setSelect4(false);
    setSelect5(true);
  };

  return (
    <div className={classes.square}>
      {/* <!-- Rating state start --> */}
      <img src={StarLogo} className={classes.star}></img>
      <h1>How did we do?</h1>
      <p className={classes.paragraph}>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <ul>
        <li className={select1 ? classes.selected : classes.select} value={1} onClick={selectRatingHandler1}>
          1
        </li>
        <li className={select2 ? classes.selected : classes.select} value={2} onClick={selectRatingHandler2}>
          2
        </li>
        <li className={select3 ? classes.selected : classes.select} value={3} onClick={selectRatingHandler3}>
          3
        </li>
        <li className={select4 ? classes.selected : classes.select} value={4} onClick={selectRatingHandler4}>
          4
        </li>
        <li className={select5 ? classes.selected : classes.select} value={5} onClick={selectRatingHandler5}>
          5
        </li>
      </ul>

      <button className={classes.submit} onClick={ratingSelected ? (event) => props.callBackHandler(rating) : () => {}}>
        SUBMIT
      </button>

      {/* <!-- Rating state end --> */}
    </div>
  );
};

export default Rating;
