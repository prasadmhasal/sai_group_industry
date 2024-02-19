(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

// inquary js 
function getenquiry() {
    var Name = document.getElementById("gname").value;
    var Email = document.getElementById("gmail").value;
    var Phone_Number = document.getElementById("mobile").value;
    var Message = document.getElementById("message").value;
    // var pass=document.getElementById("psw").value;
    var url = "https://wa.me/+919529453682?text=" 
                + "Name : "+ Name +"%0a"
                + "Phone : "+ Email +"%0a"
                + "Phone Number : "+ Phone_Number  +"%0a"
                + "Message : "+ Message +"%0a";
    window.open(url,'_blank').focus();
}

// contact js 
function contact() {
    var Name = document.getElementById("Contact_name").value;
    var Email = document.getElementById("Contact_email").value;
    var Subject = document.getElementById("Contact_subject").value;
    var Message = document.getElementById("Contact_message").value;
    // var pass=document.getElementById("psw").value;
    var url = "https://wa.me/+919529453682?text=" 
                + "Name : "+ Name +"%0a"
                + "Email : "+ Email +"%0a"
                + "Subject : "+ Subject  +"%0a"
                + "Message : "+ Message +"%0a";
    window.open(url,'_blank').focus();
}



{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> */}

$(document).ready(function(){
    $("#flip").click(function(){
        $(this).next("#panel").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
    });
});

$(document).ready(function(){
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
    });
});

// cards
$(document).ready(function(){
    $('.carousel').slick({
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      centerMode: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // centerMode: true,
  
        }
  
      }, {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          infinite: true,
  
        }
      },  {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      }]
    });
  });

//   on hover image js for image home screen

// function myScript() {
    
// }

// document.querySelector(".");

// object.addEventListener("mouseover", myScript);


// slider 
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

