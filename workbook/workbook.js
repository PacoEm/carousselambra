/* xxxxxxxxxxxxxxxxxxxxxx */
/* ------ WORKBOOK ------ */
/* xxxxxxxxxxxxxxxxxxxxxx */

/* You'll just have to: */
/* 1 - in this js file, fill the array 'imgs' whith image's path */
/* 2 - in css file, write the number of images line 33 */

const caroussel = document.getElementById("workbook");

// put in 'imgs' the images with the complete path
const imgs = [
  "url(workbook/imgs/img0.jpg)",
  "url(workbook/imgs/img1.jpg)",
  "url(workbook/imgs/img2.jpg)",
  "url(workbook/imgs/img3.jpg)",
  "url(workbook/imgs/img4.jpg)",
  "url(workbook/imgs/img5.jpg)",
];

// added at the end of innerHTML div
const imgStyle = " center/cover no-repeat";

// getting the caroussel's width
let cWidth = caroussel.offsetWidth;

// creation of a id for new innerHtml divs
let i = 0;

// inialisation of a array containing all id created
let idArray = [];

// inialisation of a array containing all div created
let divArray = [];

console.log(imgs.length);

window.addEventListener("load", () => {
  for (let j = 0; j < imgs.length; j += 1) {
    // creation of an id number
    toString(i);
    idCont = "div" + i;

    // send of the new id to idArray
    idArray.push(idCont);

    // creation of a new div
    caroussel.innerHTML += "<div id='" + idArray[i] + "'></div>";

    // getting the new div in a var
    let newDiv = document.getElementById(idArray[i]);

    // push the new div in divArray
    divArray.push(newDiv);

    // adding of the background image
    newDiv.style.background = imgs[i] + imgStyle;

    i += 1;
  }
});
