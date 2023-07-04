const swiper = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
      nextEl: '.services-button-next',
      prevEl: '.services-button-prev',
    },
    
  });

  const swiper2 = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 127,
    // Navigation arrows
    navigation: {
      nextEl: '.doctors-button-next',
      prevEl: '.doctors-button-prev',
    },
  });

  
  const swiper3 = new Swiper('.swiper-3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
      nextEl: '.review-button-next',
      prevEl: '.review-button-prev',
    },
  });

  const swiper4 = new Swiper('.swiper-4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
      nextEl: '.categories-button-next',
      prevEl: '.categories-button-prev',
    },
  });

  
  const swiper5 = new Swiper('.swiper-5', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    // Navigation arrows
    navigation: {
      nextEl: '.photo-button-next',
      prevEl: '.photo-button-prev',
    },
  });

  const swiper6 = new Swiper('.swiper-6', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,
    // Navigation arrows
    navigation: {
      nextEl: '.licenses-button-next',
      prevEl: '.licenses-button-prev',
    }, 
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        578: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    }
  });

  const swiper7 = new Swiper('.swiper-7', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
      nextEl: '.services-button-next-2',
      prevEl: '.services-button-prev-2',
    },
  });

  const swiper8 = new Swiper('.swiper-8', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 50,
    // Navigation arrows
    navigation: {
      nextEl: '.services-button-next-3',
      prevEl: '.services-button-prev-3',
    },
  });

  const select1 = new CustomSelect('#select-1');
  const select2 = new CustomSelect('#select-2');
  const select3 = new CustomSelect('#select-3');
  const select4 = new CustomSelect('#select-4');

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

