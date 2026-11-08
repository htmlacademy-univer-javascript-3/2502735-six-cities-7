import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Offer as OfferType } from '../../types/offer';
import { reviews } from '../../mocks/reviews';
import ReviewsList from '../../components/reviews-list/reviews-list';
import CommentForm from '../../components/comment-form/comment-form';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';

type OfferPageProps = {
  offers: OfferType[];
};

function Offer({offers}: OfferPageProps): JSX.Element | null {
  const { id } = useParams();
  const [selectedPoint] = useState<string | null>(null);

  if (!offers || offers.length === 0) {
    return <div>Список предложений пуст</div>;
  }

  // Находим текущий оффер по ID из URL
  const currentOffer = offers.find((offer) => offer.id === id);

  // Если такого оффера нет, не падаем с ошибкой
  // if (!currentOffer) {
  //   return null;
  // }
  if (!currentOffer) {
    return (
      <div className="page page--gray page--main">
        <main className="page__main page__main--index">
          <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404. Page not found</h1>
            <p>Оффер с ID <b>{id}</b> не найден в массиве данных.</p>
            <Link to="/" style={{ color: '#4481c3', textDecoration: 'underline' }}>
              Вернуться на главную
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const city = currentOffer.city.location;
  const points = offers.map(({ id: offerId, location }) => ({
    id: offerId,
    location,
  }));
  const offersNear = offers.filter((offer) => offer.id !== currentOffer.id).slice(0, 3);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src={currentOffer.previewImage} alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{currentOffer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(currentOffer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">Wi-Fi</li>
                  <li className="offer__inside-item">Washing machine</li>
                  <li className="offer__inside-item">Towels</li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                <CommentForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map city={city} points={points} selectedPoint={selectedPoint} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={offersNear} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
