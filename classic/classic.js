function CallClassic() {
  const container = document.getElementById("textClassic");

  // -----------------------------------
  // WHAT YOU HAVE TO DO TO MAKE IT WORK
  // -----------------------------------

  // copy all your images url here
  const imgs = [
    "url(classic/imgs/img0.jpg)",
    "url(classic/imgs/img1.jpg)",
    "url(classic/imgs/img2.jpg)",
    "url(classic/imgs/img3.jpg)",
    "url(classic/imgs/img4.jpg)",
  ];

  // select the time delay for the bg transition
  const SECONDS = 5;

  // ------------------------
  // JAVASCRIPT DO THE REST !
  // ------------------------

  let i = 0;

  // the first background to be displayed
  container.style.background = imgs[i] + "center/cover no-repeat";

  // change the background image each n seconds
  setInterval(ChangeBg, SECONDS + "000");

  // change the background image
  function ChangeBg() {
    i += 1;
    if (i === imgs.length) {
      i = 0;
    }
    container.style.background = imgs[i] + "center/cover no-repeat";
  }
}

CallClassic();
