"use strict";

(function () {

  const AccomodationType = {
    flat: 'Квартира',
    palace: 'Дворец',
    house: 'Дом',
    bungalo: 'Бунгало',
  };

  const renderPins = (pinsArray) => {
    const docFragment = document.createDocumentFragment();
    pinsArray.forEach( it => {
      const newPin = window.elements.pinTemplate.cloneNode(true).querySelector('button');
      newPin.style.left = it.location.x + 'px';
      newPin.style.top = it.location.y + 'px';
      newPin.querySelector('img').src = it.author.avatar;
      newPin.classList.add('hidden');
      docFragment.appendChild(newPin);
    });

    window.elements.mapPins.appendChild(docFragment);
  }

  const setActiveMap = () => {
    window.elements.map.classList.toggle('map--faded');
  }

  const toggleHidePins = () => {
    [...window.elements.mapPins.querySelectorAll('.map__pin:not(.map__pin--main)')]
    .forEach( it => it.classList.toggle('hidden') );
  }

  window.map = {
    renderPins,
    setActiveMap,
    toggleHidePins
  }


})();


