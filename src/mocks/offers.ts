import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 }
    },
    location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Washing machine', 'Coffee machine'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-oliver.jpg',
      isPro: false
    },
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'],
    maxAdults: 4
  },
  {
    id: 'b83c5b5f-14c1-4b11-a8b2-48f8f2b1d311',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 }
    },
    location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
    description: 'Nice room in historical part of the city.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Heating'],
    host: {
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2'],
    maxAdults: 2
  },
  {
    id: 'c94d6c6g-25d2-5c22-b9c3-59g9g3c2e422',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 }
    },
    location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    previewImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750'
  },
  {
    id: 'd05e7d7h-36e3-6d33-cad4-60h0h4d3f533',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 }
    },
    location: { latitude: 52.35514938496378, longitude: 4.673877537499948, zoom: 8 },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
  }
];
