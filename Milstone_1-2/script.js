// Select the button and the skills section and cast them to HTMLElement
// const toggleButton = document.querySelector(".toggle-skills") as HTMLElement;
// const skillsSection = document.querySelector(".about.skills") as HTMLElement;
// // Check if the elements are found before adding the event listener
// if (toggleButton && skillsSection) {
//   toggleButton.addEventListener("click", () => {
//     // Check if the section is currently visible
//     if (
//       skillsSection.style.display === "none" ||
//       skillsSection.style.display === ""
//     ) {
//       skillsSection.style.display = "block";
//       toggleButton.textContent = "Hide Skills"; // Change button text
//     } else {
//       skillsSection.style.display = "none";
//       toggleButton.textContent = "Show Skills"; // Change button text
//     }
//   });
// } else {
//   console.error("Toggle button or skills section not found");
// }
var toggleButton = document.querySelector(".toggle-skills");
var skillsSection = document.querySelector(".about.skills");
if (toggleButton && skillsSection) {
    toggleButton.addEventListener("click", function () {
        if (skillsSection.style.display === "none" ||
            skillsSection.style.display === "") {
            skillsSection.style.display = "block";
            toggleButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.style.display = "none";
            toggleButton.textContent = "Show Skills";
        }
    });
}
else {
    console.log("Toggle button or skills section not found");
}
