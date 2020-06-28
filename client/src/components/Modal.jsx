import React from 'react';
import { useHistory } from 'react-router-dom';

// styling imports
import { ModalWrapper, ExitButton, ReviewsWrapper } from './styles/staticStyles.style';
import { ModalDisplay } from './styles/propStyles.style';
import { GoX } from 'react-icons/go';

// component imports
import AllReviews from './AllReviews.jsx';
import Rating from './Rating.jsx'

const Modal = (props) => {
  const { overview, reviews, modalOpen } = props;
  const history = useHistory();
  const back = () => history.replace('/');

  return(
    <ModalDisplay modalOpen={modalOpen} onClick={back}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <ExitButton onClick={back}><GoX size='1.5em'/></ExitButton>
        <ReviewsWrapper>
          <Rating overview={overview}/>
          <AllReviews reviews={reviews} userDp={overview.userDp} userName={overview.userName}/>
        </ReviewsWrapper>
      </ModalWrapper>
    </ModalDisplay>
  )
}

export default Modal;