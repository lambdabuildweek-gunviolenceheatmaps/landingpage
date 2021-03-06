// Carousels
class Carousel {
  constructor(carousel) {
      this.carousel = carousel;
      this.btnPrev = this.carousel.querySelector('.prev');
      this.btnPrev.addEventListener('click', this.prev.bind(this));
      this.btnNext = this.carousel.querySelector('.next');
      this.btnNext.addEventListener('click', this.next.bind(this));
      this.images = this.carousel.querySelectorAll('img');
      this.index = 0;
      this.images[this.index].classList.add('img-active');
  }

  prev() {
      this.images[this.index].classList.remove('img-active');
      this.index - 1 < 0 ?
          this.index = this.images.length -1 :
          this.index--;
      this.images[this.index].classList.add('img-active');
  }
  next() {
      this.images[this.index].classList.remove('img-active');
      this.index + 1 >= this.images.length ?
          this.index = 0 :
          this.index++;
      this.images[this.index].classList.add('img-active');
  }
}

let carousels = Array.from(document.querySelectorAll('.carousel-wrap'));
carousels.map(crsl => new Carousel(crsl));




// Jump Links
class JumpNav {
    constructor(jumpNav) {
        this.jumpNav = jumpNav;
        this.jumpLinks = jumpNav.querySelectorAll('.jump');
        this.jumpLinks.forEach(link => new JumpLink(link));
    }
}
class JumpLink {
    constructor(jumpLink) {
        this.jumpLink = jumpLink;
        this.jumpLink.addEventListener('click', this.jump.bind(this));
        this.data = this.jumpLink.dataset.sec;
        this.section = document.querySelector(`section[data-sec='${this.data}'`);
    }
    jump() {
        this.section.scrollIntoView({behavior: "smooth", block: "start"});
    }
}

let jumpLinks = document.querySelector('.nav-page');
jumpLinks = new JumpNav(jumpLinks);




// Button Hover
class Button {
    constructor(button) {
        this.button = button;
        this.button.addEventListener('mouseover', e => e.target.style.background = '#AD2727');
        this.button.addEventListener('mouseout', e => e.target.style.background = '#A51212');
        this.icons = this.button.querySelectorAll('i');
        this.icons.forEach(icon => icon.addEventListener('mouseover', e => e.target.parentNode.style.background = '#AD2727'));
        this.icons.forEach(icon => icon.addEventListener('mouseout', e => e.target.parentNode.style.background = '#A51212'));
    }
}
let buttons = Array.from(document.querySelectorAll('button'));
buttons.map(btn => new Button(btn));