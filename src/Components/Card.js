import { useState } from 'react';

import Rating from './Rating';
import Submit from './Submit';

const Card = (props) => {
  const [rated, setRated] = useState(false);
  const [submitedRating, setSubmitedRating] = useState();

  const callBack = (props) => {
    let rating = props;
    setSubmitedRating(rating);
    setRated(true);
  };

  return (
    <div>
      <Rating callBackHandler={callBack} />
      {rated ? <Submit rating={submitedRating} /> : <></>}
    </div>
  );
};

export default Card;
