$('#btn1').click(function(){
    $('.rocket').show() && $('header').hide() && $('.container').hide();
})

$('#btn1').click(function () {
    setTimeout(function() {
      window.location.replace("space2.html");
    }, 3000);
  });