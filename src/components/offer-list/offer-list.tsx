// src/components/offer-list/offer-list.tsx
import { useState } from 'react';
import Card from '../cards/cards';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
};

export default function OfferList({ offers }: OfferListProps): JSX.Element {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={(id) => setActiveOfferId(id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </div>
  );
}
