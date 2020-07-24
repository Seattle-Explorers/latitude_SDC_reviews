import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, ModalButton, MainOverviewWrapper, MainOverviewText} from './styles/staticStyles.style';
import { FaStar } from "react-icons/fa";

import ReviewsSummary from './ReviewsSummary.jsx'
import PreviewRating from './PreviewRating.jsx'
import Modal from './Modal.jsx'

const Reviews = (props) => {
  const { data, modalOpen } = props;
  console.log('Data from Reviews.jsx', data);
  const { reviews, ...rest } = data;

  return (
    <Wrapper>
      <Modal overview={rest} reviews={reviews} modalOpen={modalOpen} />
      <MainOverviewWrapper><FaStar size='1em' color='#FF585D'/><MainOverviewText>{rest.avg} ({rest.reviewSize} reviews)</MainOverviewText></MainOverviewWrapper>
      <PreviewRating overview={rest} />
      <ReviewsSummary reviews={reviews.slice(0, 4)} />
      <Link to='/reviews'><ModalButton> Show all {rest.reviewSize} reviews</ModalButton></Link>
    </Wrapper>
  )
}

Reviews.defaultProps = {modalOpen: false};

export default Reviews;
