var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName")
        .value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institutionName = document.getElementById("institution-name").value;
    var year = document.getElementById("year").value;
    var title = document.getElementById("title").value;
    var company = document.getElementById("company")
        .value;
    var years = document.getElementById("years").value;
    var skill1 = document.getElementById("skill-1").value;
    var skill2 = document.getElementById("skill-2").value;
    var skill3 = document.getElementById("skill-3").value;
    var skill4 = document.getElementById("skill-4").value;
    var skill5 = document.getElementById("skill-5").value;
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3><b><pre>                    Personal Information</pre></b></h3>\n<p><b>Full Name:</b>  <span contenteditable=\"true\">".concat(fullName, "</span></p>\n<p><b>Email:</b>  <span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone Number:</b>  <span contenteditable=\"true\">").concat(phone, "</span></p>\n<h3><b><pre>                            Education</pre></b></h3>\n<p><b>Degree:</b>  <span contenteditable=\"true\">").concat(degree, "</span></p>\n<p><b>Institution Name:</b>  <span contenteditable=\"true\">").concat(institutionName, "</span></p>\n<p><b>Year of Graduation:</b>  <span contenteditable=\"true\">").concat(year, "</span></p>\n<h3><b><pre>                            Experience</pre></b></h3>\n<p><b>Title:</b>  <span contenteditable=\"true\">").concat(title, "</span></p>\n<p><b>Company:</b>  <span contenteditable=\"true\">").concat(company, "</span></p>\n<p><b>Years of Expereince:</b>  <span contenteditable=\"true\">").concat(years, "</span></p>\n<h3><b><pre>                                Skills</pre></b></h3>\n<p><b>Skill-1:</b>  <span contenteditable=\"true\">").concat(skill1, "</span></p>\n<p><b>Skill-2:</b>  <span contenteditable=\"true\">").concat(skill2, "</span></p>\n<p><b>Skill-3:</b>  <span contenteditable=\"true\">").concat(skill3, "</span></p>\n<p><b>Skill-4:</b>  <span contenteditable=\"true\">").concat(skill4, "</span></p>\n<p><b>Skill-5:</b>  <span contenteditable=\"true\">").concat(skill5, "</span></p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("The resume display element is missing");
    }
});
