$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");

        }
        if (this.scrollY > 20) {
            $('.whatsapp').addClass("sticky");

        } else {
            $('.whatsapp').removeClass("sticky");

        }
        if (this.scrollY > 20) {
            $('.whatsappmsg').hide()
        };
        if (this.scrollY < 20) {
            $('.whatsappmsg').show()
        };



        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.hire').click(function () {

        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });


    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Entrepreneur - Building Business", "Mentor", "Model"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Entrepreneur - Building Business", "Mentor", "Model"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: [, "DM Me In Whatsapp"],
        typeSpeed: 30,
        backSpeed: 20,
        loop: false
    });


    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Scroll Reveal Animation Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // AJAX handler for Contact Me form
    $('#message1').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        fetch('https://formspree.io/f/mljdbdrv', {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function (response) {
            if (response.ok) {
                document.getElementById('popup-title').innerText = 'Message Sent!';
                document.getElementById('popup-msg').innerText = "Thank you for reaching out! I'll get back to you as soon as possible.";
                showPopup();
                form.reset();
            } else {
                alert('Oops! Something went wrong. Please try again.');
            }
        }).catch(function () {
            alert('Network error. Please check your connection.');
        });
    });

    // AJAX handler for Book Appointment form
    $('#hireform').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        var action = form.getAttribute('action');
        fetch(action, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(function (response) {
            if (response.ok) {
                document.getElementById('popup-title').innerText = 'Appointment Booked!';
                document.getElementById('popup-msg').innerText = "Your appointment request has been received. I will confirm your slot and contact you shortly!";
                showPopup();
                form.reset();
            } else {
                alert('Oops! Something went wrong. Please try again.');
            }
        }).catch(function () {
            alert('Network error. Please check your connection.');
        });
    });

});

function showPopup() {
    var popup = document.getElementById('thankyou-popup');
    popup.style.display = 'flex';
    setTimeout(function () {
        document.getElementById('thankyou-box').style.transform = 'scale(1)';
    }, 10);
}

function closePopup() {
    document.getElementById('thankyou-box').style.transform = 'scale(0.8)';
    setTimeout(function () {
        document.getElementById('thankyou-popup').style.display = 'none';
    }, 300);
}

var x = 0;
function info() {

    if (x == 0) {
        document.getElementById("ht").style.display = 'block';
        document.getElementById("read").innerHTML = 'Read Less';

        x = 1;
    }
    else if (x == 1) {
        document.getElementById("ht").style.display = 'none';
        document.getElementById("read").innerHTML = 'Read More';

        x = 0;

    }
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom - 280 <= docViewBottom) && (elemTop >= docViewTop - 550));
}

$(window).scroll(function () {

    if (isScrolledIntoView('.skills') === true) {
        $('.skills').addClass('view')
    }
    else {
        $('.skills').removeClass('view')
    }

});

// email for message sending
function sendmessage() {

    var name = $('#name1').val();
    var email = $('#email1').val();
    var subject = $('#subject1').val();
    var message = $('#msg1').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "[EMAIL_ADDRESS]",
        Password: "[PASSWORD]",
        To: "[EMAIL_ADDRESS]",
        From: "[EMAIL_ADDRESS]",
        Subject: "WEB message From:" + name + " Email:" + email,
        Body: Body
    }).then(
        message => {
            if (message == 'OK') {
                alert('Message has been sent. Thank you for your response.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')
            }
        }
    );
    setTimeout(() => {
        document.querySelector('#message1').reset();
    }, 2000);
}

function hire() {

    var name = $('#name2').val();
    var email = $('#email2').val();
    var phone = $('#phone2').val();
    var location = $('#location2').val();
    var date = $('#skills2').val();
    var time = $('#appt-time').val();
    var purpose = $('#appt-purpose').val();
    var message = $('#message2').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Phone Number: ' + phone +
        '<br>Location / Address: ' + location +
        '<br>Preferred Date: ' + date + '<br>Preferred Time: ' + time +
        '<br>Purpose of Appointment: ' + purpose + '<br>Additional Notes: ' + message;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "[EMAIL_ADDRESS]",
        Password: "[PASSWORD]",
        To: "[EMAIL_ADDRESS]",
        From: "[EMAIL_ADDRESS]",
        Subject: name + " Booked an Appointment",
        Body: Body
    }).then(
        message => {
            if (message == 'OK') {
                alert('Your appointment has been booked! I will contact you soon.');
            }
            else {
                console.error(message);
                alert('Sorry for inconvenience, Can you please fill once again?')
            }
        }
    );
    setTimeout(() => {
        document.querySelector('#hireform').reset();
    }, 2000);
}
// var cvblock = document.getElementById("cv");
// function displayCV() {

//     cvblock.style.display = 'block';
//     cvblock.style.transition = '0.3s ease in-out';
//     document.addEventListener('mousemove', function (e) {

//         var x = e.clientX;
//         var y = e.clientY;
//         cvblock.style.left = (x - 100) + "px";
//         cvblock.style.top = (y - 300) + "px";
//     });

// }
// function deleteCV() {

//     cvblock.style.display = 'none';
//     cvblock.style.transition = '0.3s ease in-out';


// }
// var wannahire = document.getElementById("wannahire");
// document.addEventListener('mousemove', function (e) {

//     var x = e.clientX;
//     var y = e.clientY;
//     wannahire.style.left = (x + 0) + "px";
//     wannahire.style.top = (y + 0) + "px";


// });
