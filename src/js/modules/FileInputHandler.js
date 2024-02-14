export default class FileInputHandler {
  constructor(selector) {
    this.selector = selector;
    this.init();
  }

  init() {
    const fileInputs = document.querySelectorAll(`${this.selector} input[type="file"]`);
    fileInputs.forEach(function(fileInput) {
      fileInput.addEventListener('change', function() {
        const fileName = this.files[0].name;
        const parentDiv = this.closest('.js-attach-file');
        const placeholderTitle = parentDiv.querySelector('.u-control__placeholder-title');

        this.classList.add('is-file');
        placeholderTitle.textContent = fileName;
      });
    });

    const removeButtons = document.querySelectorAll(`${this.selector} .js-attach-file-remove`);
    removeButtons.forEach(function(removeButton) {
      removeButton.addEventListener('click', function() {
        const parentDiv = this.closest('.js-attach-file');
        const fileInput = parentDiv.querySelector('input[type="file"]');

        fileInput.value = '';

        fileInput.classList.remove('is-file');

        const placeholderTitle = parentDiv.querySelector('.u-control__placeholder-title');

        const defaultPlaceholderText = placeholderTitle.dataset.defaultText;
        placeholderTitle.textContent = defaultPlaceholderText;
      });
    });

    const placeholderTitles = document.querySelectorAll(`${this.selector} .u-control__placeholder-title`);
    placeholderTitles.forEach(function(placeholderTitle) {
      placeholderTitle.dataset.defaultText = placeholderTitle.textContent.trim();
    });
  }
}