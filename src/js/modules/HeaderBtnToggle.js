class HeaderBtnToggle {
  constructor() {
    this.burgerButton = document.querySelector('.js-header-toggle');
    this.body = document.body;
    
    this.burgerButton.addEventListener('click', () => this.toggleMenu());
  }
  
  toggleMenu() {
    this.burgerButton.classList.toggle('is-active');
    this.body.classList.toggle('is-menu-opened');
  }
}

export default HeaderBtnToggle;