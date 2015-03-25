var main = function() {
 var satan = $('.satan');
 satan.hide()
 setInterval(function() {
   satan.show();
   setTimeout(function() {
     satan.hide()
   }, 100);
 }, Math.random()*20000 + 1000);
};

$(document).ready(main);
