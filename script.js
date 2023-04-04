let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
    
}




const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : false,
  })

  sr.reveal('.myimageabout',{ delay:300, origin:'left' })
  sr.reveal('.about-text-content',{ delay:300, origin:'right' })
  sr.reveal('.home-image',{ delay:300, origin:'left' })
  sr.reveal('.home-text-content',{ delay:300, origin:'right' })

  sr.reveal('.quality-content',{ delay:300, origin:'left' })
  sr.reveal('.qulity-image',{ delay:300, origin:'right' })
  sr.reveal('.gallery-image',{ delay:300, origin:'top' })
  sr.reveal('.menu-food-content',{ delay:300, origin:'top' })
  sr.reveal('.menu-food-text',{ delay:300, origin:'bottom' })
  // sr.reveal('.food-main-content',{ delay:300, origin:'bottom' })
  sr.reveal('.before',{ delay:300, origin:'bottom' })
  sr.reveal('.footer-logo',{ delay:300, origin:'bottom' })




  var no_of_seat = document.getElementById("seat-type");
  

  document.getElementById("seat-btn1").addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("username").focus();
    no_of_seat.value = 2;
  });

  document.getElementById("seat-btn2").addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("username").focus();
    no_of_seat.value = 4;

  });

  document.getElementById("seat-btn3").addEventListener("click", () => {
    console.log("clicked");
    document.getElementById("username").focus();
    no_of_seat.value = 6;

  });



































// for popup

$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
        document.getElementById('verify-form').innerHTML = "";
    }
  });
  
});









