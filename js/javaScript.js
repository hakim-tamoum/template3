$(function() { 
    "use strict";
    // landing page
    let hdr = document.querySelector(".header");
    let pageImg = ['img0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
    setInterval( () => {
        let nbr = Math.floor(Math.random()*pageImg.length);
        hdr.style.backgroundImage = `url('../img/${pageImg[nbr]}')`;
    }, 4000);

    // scroll plugin
    $("html").niceScroll(
    {cursorcolor: "#f7600e",cursorborder: "1px solid #f7600e"
    });
    
    // header height
    $('.header').height($(window).height());
    
    // scroll to feactures
    $('.header .arrow i').click( function() {
        $('html, body').animate({ scrollTop: $('.features').offset().top}, 700);
    });
    
    // show hidden
    $('.show-more').click(function(){
        $('.item-box .hidden').slideDown(700);   
    });
    
    // testimonials
    var right = $('.testimonials .fa-chevron-right'),
        left = $('.testimonials .fa-chevron-left');
    function checkClients () {
       
        $('.client:first').hasClass('active') ? left.fadeOut() : left.fadeIn();
        $('.client:last').hasClass('active') ? right.fadeOut() : right.fadeIn();
    }
    checkClients();
    
    $('.testimonials i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.testimonials .active').fadeOut(400, function() {
               $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                checkClients();
            });
        }else {
             $('.testimonials .active').fadeOut(400, function() {
               $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                checkClients();
            });
        }
    });
   
});


































