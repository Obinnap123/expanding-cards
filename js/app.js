// const panels = document.querySelectorAll(".panel");
// panels.forEach((panel) => {
//   panel.addEventListener("click", () => {
//     removeActiveClasses();
//     panel.classList.add("active");
//   });
// });

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove("active");
//   });
// }

const panels = document.querySelectorAll(".panel");

for (const panel of panels) {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
}

function removeActiveClasses() {
  for (const panel of panels) {
    panel.classList.remove("active");
  }
}
