  function scrolltoaboutme() {
    let aboutme = document.getElementById("aboutme");
    aboutme.scrollIntoView({behavior: "smooth"});
  }

  function scrolltomywork() {
    let mywork = document.getElementById("mywork");
    mywork.scrollIntoView({behavior: "smooth"});
  }

  function scrolltogroupwork() {
    let groupwork = document.getElementById("groupwork");
    groupwork.scrollIntoView({behavior: "smooth"});
  }

  function scrolltoheader() {
    let header = document.getElementById("headerflex");
    header.scrollIntoView({behavior: "smooth"});
  }

  function scrolltocontact() {
    let header = document.getElementById("contact");
    header.scrollIntoView({behavior: "smooth"});
  }

arrowup = document.getElementById("arrowup");

let showArrowScroll = function() {
  let y = window.scrollY;
  if (y >= 400) {
    arrowup.className = "arrowupShow show"
  } else {
    arrowup.className = "arrowupShow hide"
  }
};

showArrowScroll()

window.addEventListener("scroll", showArrowScroll);