"use strict";

(function () {

  const getRandomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  window.utils = {
    getRandomInteger
  }

})();
