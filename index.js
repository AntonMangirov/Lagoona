// slider
document.addEventListener('DOMContentLoaded', function() {

  const container = document.querySelector('.offer-container')
  const swiper = new Swiper('.hero_swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,

    speed: 300,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});

// tabs
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work-btn_step').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('.tab-content-active')
      }),
      document.querySelector('[data-target="${path}"]').classList.add('tab-content-active')
    })
  })
})
// console.log(document.querySelector('.offer-container'))

// accordion
document.addEventListener('DOMContentLoaded', function() {
  $( function() {
    $( "#accordion" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });

  } )
})

// burger
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".nav-burger").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
  })
  document.querySelector(".nav__close").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("active");
  })
})


