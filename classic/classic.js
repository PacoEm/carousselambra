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
  const DURATION = 5;
  const TRANSITION = 2;

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

  let opc = [0, 0, 0, 1, 0];

  // initialisation of an array containing transition's style
  // at the end, idx will contain ["none", "none", "none", "none", "0.2s ease"]
  let stl = [];
  for (let i = imgs.length - 2; i >= 0; i -= 1) {
    stl.push("none");
  }
  stl.push(TRANSITION + "s ease");

  document.getElementById("c4").style.opacity = "0";
  document.getElementById("c4").style.transition = "none";
  document.getElementById("c4").style.transformProperty = "opacity";

  function ChangeIndex() {
    idx.push(idx[0]);
    idx.shift();
    stl.push(stl[0]);
    stl.shift();
    opc.push(opc[0]);
    opc.shift();
    for (let i = 0; i < imgs.length; i += 1) {
      document.getElementById("c" + i).style.zIndex = idx[i];
      document.getElementById("c" + i).style.opacity = opc[i];
      document.getElementById("c" + i).style.transition = stl[i];
      document.getElementById("c" + i).style.transitionProperty = "opacity";
    }
  }
  setInterval(ChangeIndex, DURATION + "000");
}

CallClassic();
