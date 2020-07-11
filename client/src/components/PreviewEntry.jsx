import React from 'react';
import moment from 'moment';

// Styling import
import { TopStyle, AvatarStyle, TopText, Date } from './styles/generalUse.style';
import { PreviewWrapper } from './styles/staticStyles.style';

class PreviewEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      readMore: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { review } = this.props;
    const { body } = review;

    if (review.body.length > 180) {
      this.setState({
        readMore: true,
        display: body.slice(0,180)
      })
    } else {
      this.setState({
        readMore: false,
        display: body
      })
    }
  }

  handleClick() {
    const { review } = this.props;
    const { body } = review;

    this.setState({
      readMore: false,
      display: body
    })
  }

  render() {
    const { review } = this.props;
    const imageURL = `https://will-sdc-profile-pics.s3-us-west-2.amazonaws.com/pug${review.dp}.jpeg`
    const date = moment(review.date).format('MMMM YYYY');

    if(this.state.readMore) {
      return(
        <PreviewWrapper>
          <TopStyle>
            <AvatarStyle src={imageURL} />
            <TopText>
              <b>{review.reviewer_name}</b>
              <br />
              <Date>{date}</Date>
            </TopText>
          </TopStyle>
          {`${this.state.display}...     `}
          <a href='#' onClick={this.handleClick}><b>read more</b></a>
        </PreviewWrapper>
      )
    } else {
      return(
        <PreviewWrapper>
          <TopStyle>
            <AvatarStyle src={imageURL} />
            <TopText>
              <b>{review.reviewer_name}</b>
              <br />
              <Date>{date}</Date>
            </TopText>
          </TopStyle>
          {this.state.display}
        </PreviewWrapper>
      )
    }
  }
}

export default PreviewEntry;