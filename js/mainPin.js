"use strict";

(function () {

  const MAP_PIN_CORDS = {
    x: 570,
    y: 375
  };

  const getMainPinCoords = () => {
    return { x: window.elements.mapPinMain.left, y: window.elements.mapPinMain.top };
  }

  const setDefaultPinCoods = () => {
    window.elements.mapPinMain.left = MAP_PIN_CORDS.x;
    window.elements.mapPinMain.top = MAP_PIN_CORDS.y;
  }

  const mouseupMainPinHandler = () => {
    window.map.setActiveMap();
    window.map.toggleHidePins();
    window.form.toggleFormElements();
    window.form.toggleFormActive();
    window.elements.mapPinMain.removeEventListener('mouseup', mouseupMainPinHandler);
  }

  window.mainPin = {
    mouseupMainPinHandler,
    getMainPinCoords,
    setDefaultPinCoods
  };

})();
