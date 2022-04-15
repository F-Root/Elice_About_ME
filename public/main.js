//Change menu
let menu = document.getElementsByClassName("menu");
let content = document.getElementsByClassName("content");
for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    let tabId = this.querySelector("div");
    console.log(this.classList);
    document.getElementsByClassName("menu").array.forEach((element) => {
      element.classList.remove("active");
      console.log(element);
    });
    this.
  };
}
