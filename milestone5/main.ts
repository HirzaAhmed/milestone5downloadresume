document.getElementById("ResumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Type Assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
    const usernameElement = document.getElementById("username") as HTMLInputElement

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        // Extract values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const username = usernameElement.value
        const uniquepath = `resume/${username.replace(/\s+/g, "_")}_resume.html`

        // Create Resume Output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        const downloadlink = document.createElement("a")
        downloadlink.href="data:text/html;charset=utf-8,"+ encodeURIComponent(resumeOutput)
        downloadlink.download=uniquepath;
        downloadlink.textContent="Download Resume"
        downloadlink.style.display ="block"

        // Update the resume output
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadlink)
            makeeditable()
        } else {
            console.error("The resume output element is missing.");
        }
    } else {
        console.error("One or more form elements are missing.");
    }
});
function makeeditable() {
    const editableElements = document.querySelectorAll(".editable")
    editableElements.forEach(element => {
        element.addEventListener("click", function() {
            const currentElement = element as HTMLElement
            const currentValue = currentElement.textContent || ""
    //replace content 
    if (
        currentElement.tagName=== "p" || currentElement.tagName ==="SPAN"){
            const input = document.createElement("input")
            input.type = "text"
            input.value = currentValue
            input.classList.add("editing-input")


            currentElement.style.display = "none"
            currentElement.parentNode?.insertBefore(input, currentElement)
            input.focus()
        }
        })
    })
}
