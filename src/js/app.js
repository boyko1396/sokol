/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import StickyHeader from './modules/StickyHeader.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import SmoothScroll from './modules/SmoothScroll.js';
import FaqCard from './modules/FaqCard.js';
import SliderInit from './modules/SliderInit.js';
import FileInputHandler from './modules/FileInputHandler.js';
import InputMask from 'inputmask';
import intlTelInput from 'intl-tel-input';
import utilsScript from 'intl-tel-input/build/js/utils.js';
import NiceSelect from './libs/nice-select2';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', () => {
  // header sticky
  new StickyHeader('.js-header-sticky', 'is-sticky');
  // header nav mobile toggle
  const headerBtnToggle = new HeaderBtnToggle();

  // link anchor scroll
  const smoothScroll = new SmoothScroll();

  // faq card
  const faqCard = new FaqCard();

  // file attach form
  const ourFileInputHandler = new FileInputHandler('.js-attach-file');

  // select init
  new NiceSelect(document.getElementById('js-select-init'));

  document.getElementById('js-select-init').addEventListener('change', function() {
    if (this.value !== "Не выбрано") {
      var closestUControl = this.closest('.u-control');
      if (closestUControl) {
        closestUControl.classList.add('is-select-active');
      }
    } else {
      var closestUControl = this.closest('.u-control');
      if (closestUControl) {
        closestUControl.classList.remove('is-select-active');
      }
    }
  });

  // phone input
  const phoneInput = document.getElementById('js-phone-mask');

  const im = InputMask('phone', {
    showMaskOnHover: false,
    showMaskOnFocus: true,
  });

  im.mask(phoneInput);

  const iti = intlTelInput(phoneInput, {
    allowDropdown: true,
    initialCountry: 'auto',
    geoIpLookup: callback => {
      fetch('https://ipapi.co/json')
        .then(res => res.json())
        .then(data => callback(data.country_code))
        .catch(() => callback('us'));
    },
    placeholderNumberType: 'FIXED_LINE',
    autoInsertDialCode: true,
    nationalMode: false,
    autoPlaceholder: 'aggressive',
    utilsScript: utilsScript,
    customPlaceholder: function (
      selectedCountryPlaceholder,
      selectedCountryData
    ) {
      return selectedCountryPlaceholder;
    },
  });
});