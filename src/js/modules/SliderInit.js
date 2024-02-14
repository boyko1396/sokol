import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

class SliderInit {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
    Swiper.use([Navigation, Pagination]);
    this.init();
  }

  init() {
    const sliderElement = document.querySelector(this.selector);
    if (sliderElement) {
      const sliderContainer = sliderElement.querySelector('.swiper-wrapper');
      const slides = Array.from(sliderContainer.children);

      if (this.selector === '.js-our-workflow-slider-init') {
        const firstSlide = slides.shift();
        sliderContainer.appendChild(firstSlide);
      }

      this.swiper = new Swiper(sliderElement, this.options);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const ourWorkflowSliderElement = document.querySelector('.js-our-workflow-slider-init');

  if (ourWorkflowSliderElement) {
    const ourWorkflowSlider = new SliderInit('.js-our-workflow-slider-init', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.js-our-workflow-slider-btn-next',
        prevEl: '.js-our-workflow-slider-btn-prev',
      },
      on: {
        slideChange: function () {
          const activeSlide = this.slides[this.activeIndex];
          const activeSlideIndex = activeSlide.getAttribute('data-our-workflow-slide');
          const graphs = document.querySelectorAll('.our-workflow-section__road-graph');

          graphs.forEach(graph => {
            const graphIndex = graph.getAttribute('data-our-workflow-graph');
            if (graphIndex === activeSlideIndex) {
              graph.classList.add('is-show');
            } else {
              graph.classList.remove('is-show');
            }
          });
        },
      },
    });
  }

  const projectServicesSliderElement = document.querySelector('.js-project-services-slider-init');

  if (projectServicesSliderElement) {
    const projectServicesSliderInit = new SliderInit('.js-project-services-slider-init', {
      slidesPerView: 'auto',
      spaceBetween: 0,
      centeredSlides: true,
      loop: false,
      slideToClickedSlide: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.js-project-services-slider-btn-next',
        prevEl: '.js-project-services-slider-btn-prev',
      },
    });
  }

  const termsCooperationSliderElement = document.querySelector('.js-terms-cooperation-slider-init');

  if (termsCooperationSliderElement) {
    const termsCooperationSlider = new SliderInit('.js-terms-cooperation-slider-init', {
      spaceBetween: 0,
      loop: false,
      allowTouchMove: false
    });

    const termsCooperationSliderServiceButtons = document.querySelectorAll('.js-terms-cooperation-slider-btn-nav');

    termsCooperationSliderServiceButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        termsCooperationSliderServiceButtons.forEach(btn => {
          btn.classList.remove('is-active');
        });
        button.classList.add('is-active');
        termsCooperationSlider.swiper.slideTo(index + 1);
      });
    });
  }

  const servicesLayoutSliderInit1Element = document.querySelector('.js-services-layout-slider-init-1');

  if (servicesLayoutSliderInit1Element) {
    const servicesLayoutSliderInit1 = new SliderInit('.js-services-layout-slider-init-1', {
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.js-services-swiper-pagination-1',
        clickable: true
      },
      navigation: {
        nextEl: '.js-services-slider-btn-next-1',
        prevEl: '.js-services-slider-btn-prev-1',
      },
    });
  }

  const servicesSliderNavButtons1 = document.querySelectorAll('.js-services-slider-btn-nav-1');
  const servicesLayoutSlider1 = document.querySelector('.js-services-layout-slider-init-1');

  if (servicesSliderNavButtons1.length > 0 && servicesLayoutSlider1) {
    const setActiveButton1 = () => {
      if (servicesLayoutSlider1.swiper) {
        const activeSlideIndex = servicesLayoutSlider1.swiper.activeIndex;
        servicesSliderNavButtons1.forEach((button, index) => {
          if (index === activeSlideIndex) {
            button.classList.add('is-active');
          } else {
            button.classList.remove('is-active');
          }
        });
      }
    };

    setActiveButton1();

    servicesLayoutSlider1.swiper.on('slideChange', setActiveButton1);

    servicesSliderNavButtons1.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (servicesLayoutSlider1.swiper) {
          servicesLayoutSlider1.swiper.slideTo(index);
        }
      });
    });
  }

  const servicesLayoutSliderInit2Element = document.querySelector('.js-services-layout-slider-init-2');

  if (servicesLayoutSliderInit2Element) {
    const servicesLayoutSliderInit2 = new SliderInit('.js-services-layout-slider-init-2', {
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      pagination: {
        el: '.js-services-swiper-pagination-2',
        clickable: true
      },
      navigation: {
        nextEl: '.js-services-slider-btn-next-2',
        prevEl: '.js-services-slider-btn-prev-2',
      },
    });
  }

  const servicesSliderNavButtons2 = document.querySelectorAll('.js-services-slider-btn-nav-2');
  const servicesLayoutSlider2 = document.querySelector('.js-services-layout-slider-init-2');

  if (servicesSliderNavButtons2.length > 0 && servicesLayoutSlider2) {
    const setActiveButton2 = () => {
      if (servicesLayoutSlider2.swiper) {
        const activeSlideIndex = servicesLayoutSlider2.swiper.activeIndex;
        servicesSliderNavButtons2.forEach((button, index) => {
          if (index === activeSlideIndex) {
            button.classList.add('is-active');
          } else {
            button.classList.remove('is-active');
          }
        });
      }
    };

    setActiveButton2();

    servicesLayoutSlider2.swiper.on('slideChange', setActiveButton2);

    servicesSliderNavButtons2.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (servicesLayoutSlider2.swiper) {
          servicesLayoutSlider2.swiper.slideTo(index);
        }
      });
    });
  }

  // nav links
  const navLinks = document.querySelectorAll('.js-services-layout-nav');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetContent = document.querySelector(targetId);
      const isActive = this.classList.contains('is-active');
      const isShow = targetContent.classList.contains('is-show');

      document.querySelectorAll('.services-layout__row-main').forEach(content => {
        content.classList.remove('is-show');
      });
      navLinks.forEach(navLink => {
        navLink.classList.remove('is-active');
      });

      if (!isActive || !isShow) {
        this.classList.add('is-active');
        targetContent.classList.add('is-show');
      }
    });
  });

});

export default SliderInit;