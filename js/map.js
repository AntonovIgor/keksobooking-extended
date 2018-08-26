"use strict";

const OFFER_TYPES = [
  'flat',
  'palace',
  'house',
  'bungalo',
];

const AccomodationType = {
  flat: 'Квартира',
  palace: 'Дворец',
  house: 'Дом',
  bungalo: 'Бунгало',
};

const AVATAR_PATH = 'img/avatars/user0';
const AVATAR_EXT = '.png';
const AVATAR_COUNT = 8;

const MAX_PIN = 8;

const CORDS = {
  x: {
    min: 0,
    max: 500
  },
  y: {
    min: 130,
    max: 630
  }
};

const pinTemplate = document.querySelector('#pin').content;
const map = document.querySelector('.map');
const mapPins = map.querySelector('.map__pins');
map.classList.toggle('map--faded');

const getRandomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

const makeAdOffers = () => {
  let result = [];
  for (let i = 1; i <= MAX_PIN; i++) {
    let newPin = {
      author: {
        avatar: `${AVATAR_PATH}${i}${AVATAR_EXT}`,
      },
      offer: {
        type: OFFER_TYPES[getRandomInteger(0, OFFER_TYPES.length - 1)]
      },
      location: {
        x: getRandomInteger(CORDS.x.min, CORDS.x.max),
        y: getRandomInteger(CORDS.y.min, CORDS.y.max)
      }
    };
    result = [...result, newPin];
  }

  return result;
}

const renderPins = (pinsArray) => {
  const docFragment = document.createDocumentFragment();
  pinsArray.forEach( it => {
    const newPin = pinTemplate.cloneNode(true).querySelector('button');
    newPin.style.left = it.location.x + 'px';
    newPin.style.top = it.location.y + 'px';
    newPin.querySelector('img').src = it.author.avatar;
    docFragment.appendChild(newPin);
  });

  mapPins.appendChild(docFragment);
}
renderPins(makeAdOffers());

