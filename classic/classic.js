function CallClassic() {
  // the backgrounds of each div
  const imgs = [
    "url(classic/imgs/img0.jpg)",
    "url(classic/imgs/img1.jpg)",
    "url(classic/imgs/img2.jpg)",
    "url(classic/imgs/img3.jpg)",
    "url(classic/imgs/img4.jpg)",
  ];

  // the display's duration for setInterval
  const SPEED = 2;

  // allocation of background to divs
  for (let i = 0; i < imgs.length; i += 1) {
    // allocation of backgrounds to divs
    document.getElementById("c" + i).style.background =
      imgs[i] + "center/cover no-repeat";
  }

  // initialisation of an array containing the z-index value
  // at the end, idx will contain [0,0,0,0,1]
  let idx = [];
  for (let i = imgs.length - 2; i >= 0; i -= 1) {
    idx.push(0);
  }
  idx.push(1);

  function ChangeIndex() {
    idx.push(idx[0]);
    idx.shift();
    for (let i = 0; i < imgs.length; i += 1) {
      document.getElementById("c" + i).style.zIndex = idx[i];
    }

    // the '1' value in 'idx' array moves one by one
  }
  setInterval(ChangeIndex, SPEED + "000");
}

CallClassic();
