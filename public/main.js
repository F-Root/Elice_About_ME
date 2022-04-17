//Click and Animation
let click = document.querySelector("#click");
let header = document.getElementsByTagName("header")[0];
let section = document.querySelector("section");
let footer = document.getElementsByTagName("footer")[0];

click.onclick = function (e) {
  e.preventDefault();

  click.animate(
    { opacity: [1, 0] },
    { duration: 500, easing: "linear", iterations: 1 }
  );

  header.animate(
    [
      {
        opacity: "0",
        transform:
          "translate(1000px, 1000px) scale(0) rotate3d(2, 1, -3, -720deg)",
      },
      {
        opacity: "1",
        transform: "translate(0px, 0px) scale(1) rotate3d(0, 0, 0, 360deg)",
      },
    ],
    {
      duration: 3000,
      iterations: 1,
    }
  );

  section.animate(
    [
      {
        opacity: "0",
        transform:
          "translate(-1000px, 500px) scale(0) rotate3d(1, 3, -2, 720deg)",
      },
      {
        opacity: "1",
        transform: "translate(0px, 0px) scale(1) rotate3d(0, 0, 0, -360deg)",
      },
    ],
    {
      duration: 4000,
      iterations: 1,
    }
  );

  footer.animate(
    [
      {
        opacity: "0",
        transform:
          "translate(1000px, -1000px) scale(0) rotate3d(2, 3, -1, -720deg)",
      },
      {
        opacity: "1",
        transform: "translate(0px, 0px) scale(1) rotate3d(0, 0, 0, 360deg)",
      },
    ],
    {
      duration: 3500,
      iterations: 1,
    }
  );

  setTimeout(() => {
    click.style.display = "none";
    header.style.display = "block";
    section.style.display = "block";
    footer.style.display = "block";
  }, 499);
};

//Change menu
let menu = document.getElementsByClassName("menu");

for (let i = 0; i < menu.length; i++) {
  menu[i].onclick = function (e) {
    e.preventDefault();

    let tabId = this.querySelector("a").getAttribute("href");
    console.log(tabId);
    let actContent = document.querySelector(tabId);

    document.querySelectorAll(".menu, .content").forEach(function (item) {
      item.classList.remove("active");
    });
    actContent.animate(
      {
        opacity: [0, 1],
      },
      {
        duration: 500,
        easing: "linear",
        iterations: 1,
      }
    );
    actContent.classList.add("active");
    this.classList.add("active");
  };
}
