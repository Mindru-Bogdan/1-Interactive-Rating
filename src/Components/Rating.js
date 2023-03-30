import classes from './Rating.module.css';
import StarLogo from '../../src/icon-star.svg';

const Rating = () => {
  return (
    <div className={classes.square}>
      {/* <!-- Rating state start --> */}
      <img src={StarLogo}></img>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>

      <p>1 2 3 4 5</p>

      <button className={classes.submit}>Submit</button>

      {/* <!-- Rating state end --> */}
    </div>
  );
};

export default Rating;
