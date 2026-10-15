import { useState, ChangeEvent } from 'react';

export default function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[
          { value: '5', title: 'perfect' },
          { value: '4', title: 'good' },
          { value: '3', title: 'not bad' },
          { value: '2', title: 'badly' },
          { value: '1', title: 'terribly' },
        ].map((star) => (
          <span key={star.value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star.value}
              id={`${star.value}-stars`}
              type="radio"
              checked={formData.rating === star.value}
              onChange={handleFieldChange}
            />
            <label htmlFor={`${star.value}-stars`} className="reviews__rating-label form__rating-label" title={star.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </span>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
