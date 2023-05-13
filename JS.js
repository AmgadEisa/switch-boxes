let font1 = document.querySelector(".font-1");
let font2 = document.querySelector(".font-2");
let font3 = document.querySelector(".font-3");
let colorRed = document.querySelector(".color-red");
let colorGreen = document.querySelector(".color-green");
let colorYellow = document.querySelector(".color-yellow");
let size1 = document.querySelector(".size-1");
let size2 = document.querySelector(".size-2");
let size3 = document.querySelector(".size-3");
let paragraph = document.querySelector("p");
let borderMake = function (ele) {
  ele.style.cssText = " border: 5px solid black";
};
if (window.localStorage.color) {
  paragraph.style.backgroundColor = window.localStorage.getItem("color");
} else {
  paragraph.style.backgroundColor = "white";
}
if (window.localStorage.font) {
  paragraph.style.fontFamily = window.localStorage.getItem("font");
} else {
  paragraph.style.fontFamily = `"Wix Madefor Display", sans-serif`;
}
if (window.localStorage.size) {
  paragraph.style.fontWeight = window.localStorage.getItem("size");
} else {
  paragraph.style.fontWeight = "800";
}
let box = document.querySelectorAll(".option");
box.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    box.forEach(function (ele) {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (e.currentTarget.classList.contains("color") == true) {
      window.localStorage.setItem("color", e.currentTarget.dataset.color);
      paragraph.style.backgroundColor = window.localStorage.getItem("color");
    }
    if (e.currentTarget.classList.contains("size") == true) {
      window.localStorage.setItem("size", this.dataset.size);
      paragraph.style.fontWeight = window.localStorage.getItem("size");
    }
    if (e.currentTarget.classList.contains("font") == true) {
      window.localStorage.setItem("font", this.dataset.font);
      paragraph.style.fontFamily = window.localStorage.getItem("font");
    }
  });
});
let div = document.getElementsByTagName("div");
