/* =========================================
   MAIN ENTRY POINT
   Imports and initializes all components
   ========================================= */

import { header } from './JS/components/header.js';
import { mainPage, globalButtons } from './JS/components/main.js';
import { renderCover } from './JS/components/cover.js';
import { renderSummary } from './JS/components/summary.js';
import { mainSoftSkills } from './JS/components/mainSoftSkills.js';
import { Projects, fetchProjects } from './JS/components/projects.js';
import { testimonials } from './JS/components/testimonials.js';
import { contact } from './JS/components/contact.js';
import { footer } from './JS/components/footer.js';

// Wait for DOM to be fully loaded

/*
 * Main application entry point.
 * Initializes the application when the DOM is fully loaded.
 * Handles dark mode preference, initializes components, and fetches project data.
 */
document.addEventListener("DOMContentLoaded", async () => {
   
    window.onload = () => {
        
        // Load dark mode preference from localStorage
        
        const mode = localStorage.getItem("mode") || "dark";
        if (mode === "dark") {
            document.body.classList.add("darkmode");
            const footer = document.querySelector("footer");
            if (footer) footer.classList.add("footerDarkmode");
        }
        
        // Progress bar animation and simple for loop to increment progress

        var progressBar = document.getElementById('progress-bar');
        for (let i = 1; i <= 100; i++) {
            setTimeout(() => {
                progressBar.value = i;
            }, 1000);
        }

        // Hide the loading screen after 2 seconds

        setTimeout(async () => {
            var loadingScreen = document.querySelector('.loading-screen');
            loadingScreen.style.display = 'none';
            
            // Initialize all page components
        
            mainPage();
            header();
            renderCover();
            renderSummary();
            globalButtons();
            mainSoftSkills();
        
            // Fetch projects data before initializing Projects component
        
            await fetchProjects();
            Projects();
            testimonials();
            contact();
            footer();
        }, 2000);
    };



});