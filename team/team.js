function CallTeam() {
  //
  const container = document.getElementById("team");
  const rbutt = document.getElementById("right_arrow");
  const lbutt = document.getElementById("left_arrow");

  // -----------------------------------
  // WHAT YOU HAVE TO DO TO MAKE IT WORK
  // -----------------------------------

  // copy all your images url here
  const imgs = [
    "url(team/imgs/img0.jpg)",
    "url(team/imgs/img1.jpg)",
    "url(team/imgs/img2.jpg)",
    "url(team/imgs/img3.jpg)",
    "url(team/imgs/img4.jpg)",
  ];

  // select the size of each div containig images
  const SIZE = 12 + "%";

  // select the scale of selected div
  const SCALE = 150 + "%";

  // ------------------------
  // JAVASCRIPT DO THE REST !
  // ------------------------

  // number of round divs visible in the same time
  const NBR = imgs.length;

  // number to select the div's id wich will be selected
  let idNbr = 2;

  // creation of an array "ids" containing the div's id
  let ids = [];
  for (let i = 0; i < imgs.length; i += 1) {
    ids.push("d" + i);
  }

  // attribution of the sizes and backgrounds of each round div
  for (let i = 0; i < NBR; i += 1) {
    document.getElementById("d" + i).style.width = SIZE;
    document.getElementById("d" + i).style.background =
      imgs[i] + "center/cover no-repeat";
  }

  // the middle div is selected first
  document.getElementById(ids[idNbr]).style.transform = "scale(" + SCALE + ")";
  document.getElementById(ids[idNbr]).style.border = "solid white 2px";

  // ========================
  // -------- EVENTS --------
  // ========================

  // right button
  rbutt.addEventListener("click", () => {
    idNbr += 1;
    if (idNbr === imgs.length) {
      idNbr -= 1;
    }
    // selected image
    document.getElementById(ids[idNbr]).style.transform =
      "scale(" + SCALE + ")";
    // previous image
    document.getElementById(ids[idNbr - 1]).style.transform = "scale(100%)";
  });

  // left button
  lbutt.addEventListener("click", () => {
    idNbr -= 1;
    if (idNbr === -1) {
      idNbr = 0;
    }
    // selected image
    document.getElementById(ids[idNbr]).style.transform =
      "scale(" + SCALE + ")";
    // previous image
    document.getElementById(ids[idNbr + 1]).style.transform = "scale(100%)";
  });
}

CallTeam();
