import { RatingView } from 'react-simple-star-rating'

const Rating = (props) => {
  return (
    <RatingView 
      ratingValue={props.rating}
      stars={5}
    />
  )
}

export default Rating