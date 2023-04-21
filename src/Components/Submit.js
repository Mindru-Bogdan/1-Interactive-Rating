import classes from './Submit.module.css';
import ThankYouLogo from '../../src/illustration-thank-you.svg';

const Submit = (props) => {
  return (
    <div className={classes.square}>
      {/* <!-- Thank you state start --> */}
      <img src={ThankYouLogo} className={classes.img}></img>
      <p className={classes.rating}>You selected {props.rating} out of 5</p>

      <h1>Thank you!</h1>

      <p className={classes.paragraph}>
        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>

      {/* <!-- Thank you state end --> */}
    </div>
  );
};

export default Submit;
