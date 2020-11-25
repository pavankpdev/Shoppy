
export const FeaturedProductsCarousal = {
  autoplay: true,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1500,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "35px",
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "160px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "5px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
};
