function myFunction() {
  var element = document.getElementById('wrapper-links-uteis')
  element.classList.toggle('aparecer')
}

$('#click-links-uteis').click(function() {
  $(this).find('i').toggleClass('fa fa-times')
})