const toggleButton = document.querySelector(".toggle-skills") as HTMLElement;
const skillsSection = document.querySelector(".about.skills") as HTMLElement;

if (toggleButton && skillsSection) {
  toggleButton.addEventListener("click", () => {
    if (
      skillsSection.style.display === "none" ||
      skillsSection.style.display === ""
    ) {
      skillsSection.style.display = "block";
      toggleButton.textContent = "Hide Skills";
    } else {
      skillsSection.style.display = "none";
      toggleButton.textContent = "Show Skills";
    }
  });
} else {
  console.log("Toggle button or skills section not found");
}
