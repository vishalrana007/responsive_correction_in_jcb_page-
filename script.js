'use script';

$('#menu-btn').click(function () {
  $('nav ul').addClass('active')
});
$('#menu-close').click(function () {
  $('nav ul').removeClass('active')
});




// contact form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
// programs
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
// courses
