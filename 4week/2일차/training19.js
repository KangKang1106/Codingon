function changeColor() {
  if($(this).hasClass('bg-red')) {
    $(this).toggleClass('bg-red');
    $(this).toggleClass('bg-orange');
  } else if($(this).hasClass('bg-orange')) {
    $(this).toggleClass('bg-orange');
    $(this).toggleClass('bg-yellow');
  } else if($(this).hasClass('bg-yellow')) {
    $(this).toggleClass('bg-yellow');
    $(this).toggleClass('bg-red');
  }
}

$('.box').click(changeColor);