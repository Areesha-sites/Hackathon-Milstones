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
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3><b><pre>                    Personal Information</pre></b></h3>\n<p><b>Full Name:</b>  ".concat(fullName, "</p>\n<p><b>Email:</b>  ").concat(email, "</p>\n<p><b>Phone Number:</b>  ").concat(phone, "</p>\n<h3><b><pre>                            Education</pre></b></h3>\n<p><b>Degree:</b>  ").concat(degree, "</p>\n<p><b>Institution Name:</b>  ").concat(institutionName, "</p>\n<p><b>Year of Graduation:</b>  ").concat(year, "</p>\n<h3><b><pre>                            Experience</pre></b></h3>\n<p><b>Title:</b>  ").concat(title, "</p>\n<p><b>Company:</b>  ").concat(company, "</p>\n<p><b>Years of Expereince:</b>  ").concat(years, "</p>\n<h3><b><pre>                                Skills</pre></b></h3>\n<p><b>Skill-1:</b>  ").concat(skill1, "</p>\n<p><b>Skill-2:</b>  ").concat(skill2, "</p>\n<p><b>Skill-3:</b>  ").concat(skill3, "</p>\n<p><b>Skill-4:</b>  ").concat(skill4, "</p>\n<p><b>Skill-5:</b>  ").concat(skill5, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.log("The resume display element is missing");
    }
});
