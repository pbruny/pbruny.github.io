// Set the date we're counting down to
var countDownDate = new Date("April 10, 2020 00:05:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days + " Dias "; + hours + "h "
  + minutes + "m " + seconds + "s ";

  document.getElementById("hours").innerHTML = hours + " Horas ";
  document.getElementById("minutes").innerHTML = minutes + " Minutos ";
  document.getElementById("seconds").innerHTML = seconds + " Segundos";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    document.getElementById("text").innerHTML = '<span class="label"><a href="./love.html">O tempo acabou, clique aqui!</a></span>'

  }
}, 1000);
