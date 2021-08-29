

const menu = document.querySelector('.menu');
const toggler = document.querySelector('.navbar-toggler');
const times = toggler.querySelector('.fas');
const overlay = document.querySelector('.overlay');
const bodyFixed = document.querySelector('body');


// console.log(menu.classList)

function toggleNav() {
  menu.classList.toggle('active');
  if (times.classList.contains('fa-bars')) {
    times.classList.remove('fa-bars');
    times.classList.add('fa-times');
    bodyFixed.classList.add('fixed-position');
  }
  else {
    times.classList.remove('fa-times');
    times.classList.add('fa-bars');
    bodyFixed.classList.remove('fixed-position');
  }
  
}


toggler.addEventListener('click', toggleNav)

overlay.addEventListener('click', function() {

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    if (times.classList.contains('fa-times')) {
      times.classList.remove('fa-times');
      times.classList.add('fa-bars');
    }
    else {
      pass;
    }
  }
  else {
    pass;
  }
  
  
})

document.addEventListener('swiped-up', function() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    bodyFixed.classList.remove('fixed-position');
    if (times.classList.contains('fa-times')) {
      times.classList.remove('fa-times');
      times.classList.add('fa-bars');
    }
    else {
      pass;
    }
  }
  else {
    pass;
  }
})
