$(document).ready(() => {
  /* Load header */
  $("#header").load("header.html", () => {
    // Toggle menu functionality
    $(".toggle").on("click", () => {
      $(".item").toggleClass("active");
    });

    // Toggle header secondary section
    const toggleButton = document.getElementById('toggleButton');
    const headerSecondary = document.querySelector('.header-secondary');
    toggleButton.addEventListener('click', (event) => {
      event.preventDefault();
      headerSecondary.classList.toggle('closed');
    });
  });

  /* Load footer */
  $("#footer").load("footer.html");

  /* Image containers and URLs */
  const imageContainers = [
    { selector: '.image-container-2 img', imageUrls: ["../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg"] },
    { selector: '.image-container img', imageUrls: ["../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg"] },
    { selector: '.image-container-3 img', imageUrls: ["../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg"] }
  ];

  /* Image URL carousel items */
  const imageUrlCarouselItems = ["../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg", "../images/herbsinbowl.jpg"];

  /* Common configuration for image carousels */
  const commonConfig = {
    slidesToShow: 2.15,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 4000
  };

  /* Set image URLs and alt attributes for each image container */
  imageContainers.forEach(({ selector, imageUrls }) => {
    const images = $(selector);
    images.each((index, image) => {
      $(image).attr({
        src: imageUrls[index],
        alt: `Image ${index + 1}`
      });
    });
  });

  /* Set image URL and text for each imageUrlCarouselItem */
  const carouselItems = $('.carousel-item');
  imageUrlCarouselItems.forEach((imageURL, index) => {
    const carouselItem = carouselItems.eq(index);
    const image = carouselItem.find('img');
    const imageName = carouselItem.find('.image-name');

    image.attr({
      src: imageURL,
      alt: `Image ${index + 1}`
    });

    imageName.text(`Image ${index + 1}`);
  });

  /* Initialize the slick carousels */
  $('.image-container, .image-container-3').slick(commonConfig);

  $('#featured-products .carousel').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 468, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } }
    ]
  });
});
