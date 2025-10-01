AOS.init();

//background image slider
const sliderImage = ["bg.jpg", "5.jpg", "1.jpg", "3.jpg", "2.jpg", "4.jpg", "6.jpg"];
let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];
let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000)

const changeSliderImage = () => {
    sliderGridItems.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');
            
            setTimeout(() => {
                if(index == sliderGridItems.length -1){
                    if(currentImage > sliderImage.length -1){
                        currentImage = 0;
                    }
                    else{
                        currentImage++;
                    }
                    
                    slider.src = sliderImage[currentImage];
                    
                    sliderGridItems.map((item, i)=> {
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i*100)
                    })
                }
            }, 100)
        }, index*100)
    })
}

//navbar
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if(scrollY >= 188){
        navbar.classList.add('bg');
    }
    else{
        navbar.classList.remove('bg');
    }
})

// Swiper Configuration for Services Section
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 20,  // 🔥 SPACE BETWEEN CARDS - Change this number (try 30, 40, 50)
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    slideToClickedSlide: true,
    speed: 600,  // Smooth transition speed
    
    // 🔥 CRITICAL: Prevent extra slides from showing
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20  // Space for mobile
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20  // Space for tablet
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20  // 🔥 Space for desktop - CHANGE THIS
      }
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    }
});
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.background-image');
    const heroContent = document.querySelector('.hero-section-content');
    
    if (heroImage && scrolled < window.innerHeight) {
        // Parallax effect - image moves slower than scroll
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        
        // Content moves slightly faster for depth effect
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 500);
        }
    }
});

function initMap() {
    const mabini = { lat: 13.7539, lng: 120.9083 }; // Mabini, Batangas
    const map = new google.maps.Map(document.getElementById("map"), {
      center: mabini,
      zoom: 12,
    });

    new google.maps.Marker({
      position: mabini,
      map: map,
      title: "Mabini, Batangas"
    });

    // Button click → open Google Maps directions
    document.getElementById("get-directions-btn").addEventListener("click", () => {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${mabini.lat},${mabini.lng}`, "_blank");
    });
  }

  window.onload = initMap;