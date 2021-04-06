$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = page $(window).height();
var tags = $(".tag");

for (var i = 0; i < tags.length; i++) {
var tag = tags[i];

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible");
} else {
$(tag).removeClass("visible");
}
}
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}