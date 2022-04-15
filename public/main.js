//Change menu
let menu = document.getElementsByClassName("menu");
let content = document.getElementsByClassName("content");
for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function () {
    let tabIndex = this;
    console.log(this.classList);
    document.getElementsByClassName("content").forEach((element) => {
      element.classList.remove("active");
      console.log(element);
    });
  };
}
