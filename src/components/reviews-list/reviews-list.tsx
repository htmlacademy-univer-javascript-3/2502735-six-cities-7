import ReviewItem from '../review/review';
import { Reviews } from '../../types/review';

type ReviewsListProps = {
  reviews: Reviews;
};

export default function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}
