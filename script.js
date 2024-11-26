// Function to fetch and display profile data
async function loadProfile() {
    const response = await fetch('http://localhost:3000/api/profile');
    const profile = await response.json();
    const profileDiv = document.getElementById('profile-details');
    profileDiv.innerHTML = `
        <p><strong>Name:</strong> ${profile.name}</p>
        <p><strong>Email:</strong> ${profile.email}</p>
        <p>${profile.about}</p>
    `;
}

// Function to fetch and display project data
async function loadProjects() {
    const response = await fetch('/api/projects'); // Replace with your backend endpoint
    const projects = await response.json();
    const projectsDiv = document.getElementById('projects-list');
    projects.forEach(project => {
        projectsDiv.innerHTML += `
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
    });
}

// Function to fetch and display education data
async function loadEducation() {
    const response = await fetch('/api/education'); // Replace with your backend endpoint
    const education = await response.json();
    const educationDiv = document.getElementById('education-list');
    education.forEach(edu => {
        educationDiv.innerHTML += `
            <div>
                <h3>${edu.degree}</h3>
                <p>${edu.institution}</p>
                <p><em>${edu.year}</em></p>
            </div>
        `;
    });
}

// Load all data when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadProjects();
    loadEducation();
});
