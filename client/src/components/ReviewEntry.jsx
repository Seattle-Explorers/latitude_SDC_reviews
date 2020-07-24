import React from 'react';
import moment from 'moment';

//Styling imports
import { TopStyle, AvatarStyle, TopText, Date } from './styles/generalUse.style';
import { EntryWrapper, ShiftedWrapper } from './styles/staticStyles.style';

const ReviewEntry = (props) => {
  const { review, userDp, userName } = props;
  console.log('review in entry', review);
  console.log('userDP in entry', userDp);
  console.log('userName in entry', userName)
  const reviewerURL = `https://will-sdc-profile-pics.s3-us-west-2.amazonaws.com/pug${review.dp}.jpeg`
  const date = moment(review.date).format('MMMM YYYY');

  let entry;
  if (review.respond) {
    const listerURL = `https://will-sdc-profile-pics.s3-us-west-2.amazonaws.com/pug${review.dp}.jpeg`;
    entry = (
      <div>
        <EntryWrapper>
          <TopStyle>
            <AvatarStyle src={reviewerURL} id='reviewDp'/>
            <TopText>
              <b>{review.reviewer_name}</b>
              <br />
              <Date>{date}</Date>
            </TopText>
          </TopStyle>
          {review.body}
        </EntryWrapper>

        <ShiftedWrapper>
          <TopStyle>
            <AvatarStyle src={listerURL} id='listerDp'/>
            <TopText>
              <b>Response from {userName}</b>
              <br />
              <Date>{date}</Date>
            </TopText>
          </TopStyle>
          {review.respond}
        </ShiftedWrapper>
      </div>
    )
  } else {
    entry = (
      <EntryWrapper>
        <TopStyle>
          <AvatarStyle src={reviewerURL} id='reviewDp'/>
          <TopText>
            <b>{review.reviewer_name}</b>
            <br />
            <Date>{date}</Date>
          </TopText>
        </TopStyle>
        {review.body}
    </EntryWrapper>
    )
  }

  return (
    entry
  )
}

export default ReviewEntry;