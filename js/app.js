"use strict";

(function () {

  window.map.renderPins(window.data.makeAdOffers());
  window.form.toggleFormElements();
  window.mainPin.setDefaultPinCoods();
  window.form.updateAddressField();

  window.elements.mapPinMain.addEventListener('mouseup',
    window.mainPin.mouseupMainPinHandler);
})();
