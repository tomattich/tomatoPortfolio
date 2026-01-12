import { themes } from '../data/themes.js';
import { scrollToSection } from './main.js';

/* =========================================
   HEADER COMPONENT
   Renders the header with navigation, theme switcher, and dark mode toggle
   ========================================= */

/**
 * Initializes the Header component.
 * Renders the navigation bar, theme switcher, and dark mode toggle.
 * Handles responsive menu behavior and theme persistence.
 */
export function header() {
    const header = document.querySelector("header");
    let mode = localStorage.getItem("mode") || "light";

    header.innerHTML = `
        <div class="devName">
            <button class="mainPageButton">Mr<span><img src="assets/logo.png" alt=""></span>Tomato</button>
        </div>
        <nav>
            <div class="navButtons">
                <button class="AboutButton">About</button>
                <hr class= "hrline">
            </div>
            <div class="navButtons">
                <button class="SoftSkillsButton">Skills</button>
                <hr class= "hrline">
            </div>
            <div class="navButtons">
                <button class="ProjectsButton">Projects</button>
                <hr class= "hrline">
            </div>
            <div class="navButtons">
                <button class="TestimonialsButton">Testimonials</button>
                <hr class= "hrline">
            </div>
            <div class="navButtons">
                <button class="ContactsButton">Contacts</button>
                <hr class= "hrline">
            </div>
        </nav>
        <div class="options">
            <button class="flavorButton"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11 4a1 1 0 0 0-1 1v10h10.459l.522-3H16a1 1 0 1 1 0-2h5.33l.174-1H16a1 1 0 1 1 0-2h5.852l.117-.67v-.003A1.983 1.983 0 0 0 20.06 4H11ZM9 18c0-.35.06-.687.17-1h11.66c.11.313.17.65.17 1v1a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-1Zm-6.991-7a17.8 17.8 0 0 0 .953 6.1c.198.54 1.61.9 2.237.9h1.34c.17 0 .339-.032.495-.095a1.24 1.24 0 0 0 .41-.27c.114-.114.2-.25.254-.396a1.01 1.01 0 0 0 .055-.456l-.242-2.185a1.073 1.073 0 0 0-.395-.71 1.292 1.292 0 0 0-.819-.286H5.291c-.12-.863-.17-1.732-.145-2.602-.024-.87.024-1.74.145-2.602H6.54c.302 0 .594-.102.818-.286a1.07 1.07 0 0 0 .396-.71l.24-2.185a1.01 1.01 0 0 0-.054-.456 1.088 1.088 0 0 0-.254-.397 1.223 1.223 0 0 0-.41-.269A1.328 1.328 0 0 0 6.78 4H4.307c-.3-.001-.592.082-.838.238a1.335 1.335 0 0 0-.531.634A17.127 17.127 0 0 0 2.008 11Z" clip-rule="evenodd"/>
            </svg>
            </button>
            <button class="lightdarkmodeButton">${mode === "light" ? `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
            </svg>` : `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
            </svg>`}</button>
            <button class="optionsButton"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg></button>
        </div>
        <div class="optionsList">
            <button class="optionsListAboutButton">About</button>
            <button class="optionsListProjectsButton">Projects</button>
            <button class="optionsListSoftSkillsButton">Soft Skills</button>
            <button class="optionsListTestimonialsButton">Testimonials</button>
            <button class="optionsListContactsButton">Contacts</button>
        </div>
        <div class="flavorList">
            <button class="flavorButtons">red</button>
            <button class="flavorButtons">blue</button>
            <button class="flavorButtons">green</button>
            <button class="flavorButtons">orange</button>
            <button class="flavorButtons">purple</button>
            <button class="flavorButtons">pink</button>
            <button class="flavorButtons">yellow</button>
        </div>
        <div class="projectsList">
            <button class="allProjectsButtons">All Projects</button>
            <button class="featuredProjectsButtons">Featured Projects</button>
        </div>
    `;
    const summary = document.querySelector(".summary");
    const mainSoftSkills = document.querySelector(".mainSoftSkills");
    const allProjects = document.querySelector(".allProjects");
    const softSkillsButton = document.querySelector(".SoftSkillsButton");
    const optionsListSoftSkillsButton = document.querySelector(".optionsListSoftSkillsButton")
    const projectsPage = document.querySelector(".projectsPage");
    const testimonials = document.querySelector(".testimonials");
    const flavorList = document.querySelector(".flavorList");
    const flavorButton = document.querySelector(".flavorButton");
    const flavorButtons = document.querySelectorAll(".flavorButtons");
    const lightdarkmodeButton = document.querySelector(".lightdarkmodeButton");
    const optionsButton = document.querySelector(".optionsButton");
    const optionsList = document.querySelector(".optionsList");
    const aboutButton = document.querySelector(".AboutButton");
    const projectsButton = document.querySelector(".ProjectsButton");
    const testimonialsButton = document.querySelector(".TestimonialsButton");
    const contactsButton = document.querySelector(".ContactsButton");
    const projectsList = document.querySelector(".projectsList");
    const allProjectsButton = document.querySelector(".allProjectsButtons");
    const featuredProjectsButton = document.querySelector(".featuredProjectsButtons");
    const optionsListAboutButton = document.querySelector(".optionsListAboutButton");
    const optionsListProjectsButton = document.querySelector(".optionsListProjectsButton");
    const optionsListTestimonialsButton = document.querySelector(".optionsListTestimonialsButton");
    const optionsListContactsButton = document.querySelector(".optionsListContactsButton");
    const contact = document.querySelector(".contact");

    // Projects list

    projectsButton.addEventListener("click", (e) => {
        if (e.type === "click" && projectsList.style.display === "flex") {
            projectsList.style.animation = "unrenderRight .4s ease-in-out";
            setTimeout(() => {
                projectsList.style.display = "none";
            }, 300);
        } else if (e.type === "click") {
            projectsList.style.display = "flex";
            projectsList.style.animation = "renderRight .3s ease-in-out";
        }
    });

    // Toggle mobile menu options list

    optionsButton.addEventListener("click", () => {
        if (optionsList.style.display === "flex") {
            optionsList.style.animation = "unrenderRight .4s ease-in-out";
            optionsButton.style.transform = "rotate(0deg)";
            optionsButton.style.color = "currentColor";
            setTimeout(() => {
                optionsList.style.display = "none";
            }, 300);
        } else {
            optionsList.style.animation = "renderRight .3s ease-in-out";
            optionsButton.style.transform = "rotate(180deg)";
            optionsButton.style.color = "var(--flavorColor)";
            optionsList.style.display = "flex";
        }
    });

    // Close mobile menu when clicking outside

    document.addEventListener("click", (e) => {
        if (e.target !== optionsButton && optionsList.style.display === "flex" && !optionsButton.contains(e.target)) {
            optionsList.style.animation = "unrenderRight .4s ease-in-out";
            optionsButton.style.transform = "rotate(0deg)";
            optionsButton.style.color = "currentColor";
            setTimeout(() => {
                optionsList.style.display = "none";
            }, 300);
        }
    });

    // Scroll to options list buttons

    optionsListAboutButton.addEventListener("click", () => scrollToSection(summary));

    // Scroll to projects list button

    optionsListProjectsButton.addEventListener("click", () => scrollToSection(mainSoftSkills));

    // Scroll to testimonials list button

    optionsListTestimonialsButton.addEventListener("click", () => scrollToSection(testimonials));

    // scroll to soft skills list button 

    optionsListSoftSkillsButton.addEventListener("click", () => scrollToSection(mainSoftSkills));

    // Scroll to contacts list button

    optionsListContactsButton.addEventListener("click", () => scrollToSection(contact));

    // Scroll to soft skills button

    softSkillsButton.addEventListener("click", () => scrollToSection(mainSoftSkills));

    // Scroll to All projects button

    allProjectsButton.addEventListener("click", () => scrollToSection(allProjects));

    // Scroll to Featured projects button

    featuredProjectsButton.addEventListener("click", () => scrollToSection(projectsPage));

    // Scroll to About section

    aboutButton.addEventListener("click", () => scrollToSection(summary));

    // Scroll to Testimonials section

    testimonialsButton.addEventListener("click", () => scrollToSection(testimonials));

    // Scroll to Contacts section

    contactsButton.addEventListener("click", () => scrollToSection(contact));

    // Toggle dark mode and update icon

    lightdarkmodeButton.addEventListener("click", () => {
        document.body.classList.toggle("darkmode");
        const footer = document.querySelector("footer");
        if (footer) footer.classList.toggle("footerDarkmode");

        if (document.body.classList.contains("darkmode")) {
            lightdarkmodeButton.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"/>
            </svg>`;
            localStorage.setItem("mode", "dark");
        } else {
            lightdarkmodeButton.innerHTML = `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"/>
            </svg>`;
            localStorage.setItem("mode", "light");
        }
    });

    // Toggle theme color picker right side

    flavorButton.addEventListener("click", (e) => {
        if (e.type === "click" && flavorList.style.display === "flex" && e.target !== flavorButton) {
            flavorList.style.animation = "unrenderRight .4s ease-in-out";
            flavorButton.style.transform = "rotate(0deg)";
            setTimeout(() => {
                flavorList.style.display = "none";
            }, 300);
        } else if (e.type === "click") {
            flavorList.style.display = "flex";
            flavorButton.style.transform = "rotate(180deg)";
            flavorList.style.animation = "renderRight .3s ease-in-out";
        }
    });

    // Close theme picker when clicking outside

    document.addEventListener("click", (e) => {
        if (e.target !== flavorButton && flavorList.style.display === "flex" && !flavorButton.contains(e.target)) {
            flavorList.style.animation = "unrenderRight .4s ease-in-out";
            flavorButton.style.transform = "rotate(0deg)";
            setTimeout(() => {
                flavorList.style.display = "none";
            }, 300);
        }
    });

    // Close projects list when clicking outside

    document.addEventListener("click", (e) => {
        if (e.target !== projectsButton && projectsList.style.display === "flex" && !projectsButton.contains(e.target)) {
            projectsList.style.animation = "unrenderRight .4s ease-in-out";
            setTimeout(() => {
                projectsList.style.display = "none";
            }, 300);
        }
    });

    // Close theme picker when pressing Escape key

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && flavorList.style.display === "flex") {
            flavorList.style.animation = "unrenderRight .4s ease-in-out";
            flavorButton.style.transform = "rotate(0deg)";
            setTimeout(() => {
                flavorList.style.display = "none";
            }, 300);
        }
    });

    // Close projects list when pressing Escape key

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && projectsList.style.display === "flex") {
            projectsList.style.animation = "unrenderRight .4s ease-in-out";
            setTimeout(() => {
                projectsList.style.display = "none";
            }, 300);
        }
    });

    // Load saved theme from localStorage

    let themeUsed = localStorage.getItem("theme") || "red";
    if (themes[themeUsed]) {
        document.documentElement.style.setProperty("--flavorColor", themes[themeUsed].flavorColor);
        document.documentElement.style.setProperty("--hueRotation", themes[themeUsed].hueRotation);
    }

    // Apply selected theme when clicking a theme button

    flavorButtons.forEach((button) => {
        button.addEventListener("click", () => {
            themeUsed = button.textContent;
            localStorage.setItem("theme", themeUsed);
            if (themes[themeUsed]) {
                document.documentElement.style.setProperty("--flavorColor", themes[themeUsed].flavorColor);
                document.documentElement.style.setProperty("--hueRotation", themes[themeUsed].hueRotation);
            }
        });
    });
}
