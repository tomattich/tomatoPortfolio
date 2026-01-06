/* =========================================
   MAIN ENTRY POINT
   Imports and initializes all components
   ========================================= */

import { header } from './JS/components/header.js';
import { mainPage, globalButtons } from './JS/components/main.js';
import { renderCover } from './JS/components/cover.js';
import { renderSkills } from './JS/components/skills.js';
import { mainSoftSkills } from './JS/components/mainSoftSkills.js';
import { Projects, fetchProjects } from './JS/components/projects.js';
import { testimonials } from './JS/components/testimonials.js';
import { footer } from './JS/components/footer.js';

// Wait for DOM to be fully loaded

document.addEventListener("DOMContentLoaded", async () => {
    
    // Load dark mode preference from localStorage
    
    const mode = localStorage.getItem("mode") || "light";
    if (mode === "dark") {
        document.body.classList.add("darkmode");
        const footer = document.querySelector("footer");
        if (footer) footer.classList.add("footerDarkmode");
    }

    // Initialize all page components
    
    mainPage();
    header();
    renderCover();
    renderSkills();
    globalButtons();
    mainSoftSkills();
    // Fetch projects data before initializing Projects component
    
    await fetchProjects();
    Projects();
    testimonials();
    footer();
});