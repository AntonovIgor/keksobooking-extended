"use strict";

(function () {


  const OFFER_TYPES = [
    'flat',
    'palace',
    'house',
    'bungalo',
  ];

  const AVATAR_PATH = 'img/avatars/user0';
  const AVATAR_EXT = '.png';

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


  const makeAdOffers = () => {
    let result = [];
    for (let i = 1; i <= MAX_PIN; i++) {
      let newPin = {
        author: {
          avatar: `${AVATAR_PATH}${i}${AVATAR_EXT}`,
        },
        offer: {
          type: OFFER_TYPES[window.utils.getRandomInteger(0, OFFER_TYPES.length - 1)]
        },
        location: {
          x: window.utils.getRandomInteger(CORDS.x.min, CORDS.x.max),
          y: window.utils.getRandomInteger(CORDS.y.min, CORDS.y.max)
        }
      };
      result = [...result, newPin];
    }

    return result;
  }

  window.data = {
    makeAdOffers
  }

})();
