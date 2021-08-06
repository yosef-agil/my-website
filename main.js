var $owl = $('#carousel1');
$owl.children().each(function (index){
  $(this).attr('data-position', index);
});

$("#carousel1").owlCarousel({
  loop: false,
  center: true,
  margin: 0,
  responsiveClass: true,
  nav: false,
  responsive:{
    0:{
      items: 1
    },
    680:{
      items: 2
    },
    1000:{
      items: 3
    }
  }
});

$(document).on('click','.owl-item>div', function(){
  var $speed = 1000;
  $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});