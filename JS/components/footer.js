import { scrollToSection } from './main.js';

export function footer() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
    <div class="footerNavigation">
        <p>Navigation</p>
        <button class="buttons aboutButton">About</button>
        <button class="buttons skillsButton">Skills</button>
        <button class="buttons featuredProjectsButton">Featured Projects</button>
        <button class="buttons allProjectsButton">All Projects</button>
        <button class="buttons testimonialsButton">Testimonials</button>
        <button class="buttons contactButton">Contact</button>
    </div>
    <div>
        <p>Copyright  2025 Tomato. All rights reserved.</p>
    </div>
    `;
    const aboutButton = footer.querySelector(".aboutButton");
    const skillsButton = footer.querySelector(".skillsButton");
    const featuredProjectsButton = footer.querySelector(".featuredProjectsButton");
    const allProjectsButton = footer.querySelector(".allProjectsButton");
    const testimonialsButton = footer.querySelector(".testimonialsButton");
    const contactButton = footer.querySelector(".contactButton");
    const summary = document.querySelector(".summary");
    const mainSoftSkills = document.querySelector(".mainSoftSkills");
    const allProjects = document.querySelector(".allProjects");
    const projectsPage = document.querySelector(".projectsPage");
    const testimonials = document.querySelector(".testimonials");
    const contact = document.querySelector(".contact");

    // Scroll to soft skills button
    skillsButton.addEventListener("click", () => scrollToSection(mainSoftSkills));

    // Scroll to All projects button
    allProjectsButton.addEventListener("click", () => scrollToSection(allProjects));

    // Scroll to Featured projects button
    featuredProjectsButton.addEventListener("click", () => scrollToSection(projectsPage));

    // Scroll to About section
    aboutButton.addEventListener("click", () => scrollToSection(summary));

    // Scroll to Testimonials section
    testimonialsButton.addEventListener("click", () => scrollToSection(testimonials));

    // Scroll to Contacts section
    contactButton.addEventListener("click", () => scrollToSection(contact));
    
    
}