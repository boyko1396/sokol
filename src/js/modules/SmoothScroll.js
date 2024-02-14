export default class SmoothScroll {
  constructor() {
    this.links = document.querySelectorAll('.js-link-anchor');
    this.burgerButton = document.querySelector('.js-header-toggle');
    this.body = document.body;
    this.addEventListeners();
  }

  handleClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 110;
    if (targetElement) {
      this.burgerButton.classList.remove('is-active');
      this.body.classList.remove('is-menu-opened');
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }

  addEventListeners() {
    this.links.forEach(link => {
      link.addEventListener('click', this.handleClick.bind(this));
    });
  }
}