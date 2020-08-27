document.addEventListener('DOMContentLoaded', () => {

  var heading = document.getElementById("text");

  heading.addEventListener('mouseover', function(event){
    event.target.style.color='white';
  });
  heading.addEventListener('mouseout', function(event){
    event.target.style.color='black';
  });

})