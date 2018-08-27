"use strcit";

(function () {

  const pinTemplate = document.querySelector('#pin').content;
  const map = document.querySelector('.map');
  const mapPins = map.querySelector('.map__pins');
  const addMewPinForm = document.querySelector('.ad-form');
  const mapPinMain = map.querySelector('.map__pin--main')

  window.elements = {
    pinTemplate,
    map,
    mapPins,
    addMewPinForm,
    mapPinMain
  }

})();
