$(document).ready(function() {
  // Load header.html into the #header div
  $("#header").load("header.html", function() {
    // Toggle the "active" class on the ".item" element(s)
    $(".toggle").on("click", function() {
      $(".item").toggleClass("active");
    });

    const toggleButton = document.getElementById('toggleButton');
    const headerSecondary = document.querySelector('.header-secondary');

    // Add event listener to toggle the .closed class on click
    toggleButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      headerSecondary.classList.toggle('closed');
    });

    // Initialize Slick Carousel for featured products
    $('#featured-products .carousel').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
    
    // Load footer.html into the #footer div
    $("#footer").load("footer.html");
  });
  
  // Initialize Slick Carousel for product listings
  $('.flexbox-carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});


