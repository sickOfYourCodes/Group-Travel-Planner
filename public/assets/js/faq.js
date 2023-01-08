var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var faqBody = this.nextElementSibling;
    if (faqBody.style.display === "block") {
      faqBody.style.display = "none";
    } else {
      faqBody.style.display = "block";
    }
})};