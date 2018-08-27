"use strict";

(function () {

  const addressField = window.elements.addMewPinForm.querySelector('[name=address]');

  const toggleFormElements = () => {
    const allElements = [...window.elements.addMewPinForm.querySelectorAll('fieldset')];
    allElements.forEach( it => it.disabled = !it.disabled);
  }

  const toggleFormActive = () => {
    window.elements.addMewPinForm.classList.toggle('ad-form--disabled');
  }

  const updateAddressField = () => {
    const currentPinPosition = window.mainPin.getMainPinCoords();
    addressField.value = `${currentPinPosition.x}, ${currentPinPosition.y}`;
  }

  window.form = {
    toggleFormElements,
    toggleFormActive,
    updateAddressField
  }

})();
