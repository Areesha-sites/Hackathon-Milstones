const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const fullName = (document.getElementById("fullName") as HTMLInputElement)
    .value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const institutionName = (
    document.getElementById("institution-name") as HTMLInputElement
  ).value;
  const year = (document.getElementById("year") as HTMLInputElement).value;

  const title = (document.getElementById("title") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const years = (document.getElementById("years") as HTMLInputElement).value;

  const skill1 = (document.getElementById("skill-1") as HTMLInputElement).value;
  const skill2 = (document.getElementById("skill-2") as HTMLInputElement).value;
  const skill3 = (document.getElementById("skill-3") as HTMLInputElement).value;
  const skill4 = (document.getElementById("skill-4") as HTMLInputElement).value;
  const skill5 = (document.getElementById("skill-5") as HTMLInputElement).value;

  const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3><b><pre>                    Personal Information</pre></b></h3>
<p><b>Full Name:</b>  <span contenteditable="true">${fullName}</span></p>
<p><b>Email:</b>  <span contenteditable="true">${email}</span></p>
<p><b>Phone Number:</b>  <span contenteditable="true">${phone}</span></p>
<h3><b><pre>                            Education</pre></b></h3>
<p><b>Degree:</b>  <span contenteditable="true">${degree}</span></p>
<p><b>Institution Name:</b>  <span contenteditable="true">${institutionName}</span></p>
<p><b>Year of Graduation:</b>  <span contenteditable="true">${year}</span></p>
<h3><b><pre>                            Experience</pre></b></h3>
<p><b>Title:</b>  <span contenteditable="true">${title}</span></p>
<p><b>Company:</b>  <span contenteditable="true">${company}</span></p>
<p><b>Years of Expereince:</b>  <span contenteditable="true">${years}</span></p>
<h3><b><pre>                                Skills</pre></b></h3>
<p><b>Skill-1:</b>  <span contenteditable="true">${skill1}</span></p>
<p><b>Skill-2:</b>  <span contenteditable="true">${skill2}</span></p>
<p><b>Skill-3:</b>  <span contenteditable="true">${skill3}</span></p>
<p><b>Skill-4:</b>  <span contenteditable="true">${skill4}</span></p>
<p><b>Skill-5:</b>  <span contenteditable="true">${skill5}</span></p>
`;
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.log("The resume display element is missing");
  }
});
