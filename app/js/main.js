$('.pricing-items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1250,
          settings: {
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
    ]
});
          