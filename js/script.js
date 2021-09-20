$(document).ready(function () {
  /* Playing With Carousel*/
  let myCarousel = document.querySelector("#carouselExampleIndicators"),
    carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
    });

  $(".slider, .carousel").css(
    "max-height",
    $(window).height() - $(".navbar").innerHeight() - $("header").innerHeight()
  );
  $(".carousel-item img").height(
    $(window).height() - $(".navbar").innerHeight() - $("header").innerHeight()
  );
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      document.styleSheets[2].addRule(
        "::-webkit-scrollbar-thumb",
        "border-radius: 10px;"
      );
    } else {
      document.styleSheets[2].addRule(
        "::-webkit-scrollbar-thumb",
        "border-radius: 0 0 10px 10px;"
      );
    }
  });

  /* Start Of Display and Hide Feature items */
  $(".feature-item li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      // $(".row.second li").css("opacity", "1");
      $(".row.second li").fadeIn(1000);
    } else {
      // $(".row.second li").css("opacity", "0.4");
      $(".row.second li").fadeOut(1000);
      // $(`.row.second li.${$(this).data("class")}`).css("opacity", "1");
      $(`.row.second li.${$(this).data("class")}`).fadeIn(1000);
    }
  });
  /* End Of Display and Hide Feature items */
});
