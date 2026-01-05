/* =========================================
   MAIN PAGE COMPONENT
   Renders the main page content including hero, services, about, and testimonials
   ========================================= */

export function mainPage() {
    const main = document.querySelector("main");
    main.innerHTML = `
        <div class="mainPage">
            <div class="cover">
            </div>
        </div>
    <div class="summary">
    </div>
    <div class="mainSoftSkills">
    </div>
    <div class="allProjects">
        <div class="allProjectsContainer">
            <h1>All Projects</h1>
            <hr class="line" />
            <ul>
                <li></li>
            </ul>
            <hr class="line" />
            <ul>
                <li></li>
            </ul>
        </div>
        <div class="allProjectsItemsContainer">
            
        </div>
    </div>
    <div class="projectsPage">
        <div class="featuredWorks">
            <h1>Featured Works <span>!</span></h1>
            <hr class="line" />
            <ul>
                <li></li>
            </ul>
            <hr class="line" />
            <ul>
                <li></li>
            </ul>
            <div class="projectsContainer"></div>
        </div>
    </div>
        <div class="testimonials">
            <h1>Testimonials <span>!</span></h1>
            <hr class="line" />
            <ul>
                <li></li>
            </ul>
            <hr class="line" />
            <ul>
                <li></li>
            </ul>
            <div class="testimonialsContainer">
            </div>
        </div>
    <button class="updownButton"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
        </svg>
    </button>
    <button class="sideOptionsButtons"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
        </svg>
    </button>
    <div class="optionsList sideOptionsList">
        <button class="sideOptionsListAboutButton">About</button>
        <button class="sideOptionsListProjectsButton">Projects</button>
        <button class="sideOptionsListTestimonialsButton">Testimonials</button>
        <button class="sideOptionsListContactsButton">Contacts</button>
    </div>
    <div class="projectsList sideProjectsList">
        <button class="allProjectsButton">All Projects</button>
        <button class="featuredProjectsButton">Featured Projects</button>
    </div>
`;
}

/* =========================================
   GLOBAL BUTTONS COMPONENT
   Handles scroll-to-top button and side navigation menu
   ========================================= */

export function globalButtons() {
    const cover = document.querySelector(".cover");
    const summary = document.querySelector(".summary");
    const mainSoftSkills = document.querySelector(".mainSoftSkills");
    const allProjects = document.querySelector(".allProjects");
    const projectsPage = document.querySelector(".projectsPage");
    const testimonials = document.querySelector(".testimonials");
    const sideOptionsListAboutButton = document.querySelector(".sideOptionsListAboutButton");
    const sideOptionsListProjectsButton = document.querySelector(".sideOptionsListProjectsButton");
    const sideOptionsListTestimonialsButton = document.querySelector(".sideOptionsListTestimonialsButton");
    const sideOptionsListContactsButton = document.querySelector(".sideOptionsListContactsButton");
    const updownButton = document.querySelector(".updownButton");
    const sideOptionsButton = document.querySelector(".sideOptionsButtons");
    const sideOptionsList = document.querySelector(".sideOptionsList");
    const sideProjectsList = document.querySelector(".sideProjectsList");
    const allProjectsButton = document.querySelector(".allProjectsButton");
    const featuredProjectsButton = document.querySelector(".featuredProjectsButton");

    // Show/hide side navigation based on scroll position

    document.addEventListener("scroll", () => {
        if (window.scrollY >= 600) {
            setTimeout(() => {
                sideOptionsButton.style.display = "flex";
                sideOptionsButton.style.animation = "renderRight .6s ease-in-out";
            }, 500);
        } else {
            sideOptionsButton.style.animation = "unrenderRight .6s ease-in-out";
            sideOptionsList.style.animation = "unrenderUp .6s ease-in-out"
            sideProjectsList.style.animation = "unrenderRight .6s ease-in-out"
            setTimeout(() => {
                sideOptionsButton.style.display = "none";
                sideOptionsList.style.display = "none";
                sideProjectsList.style.display = "none";
                sideOptionsButton.style.transform = "rotate(0deg)";
            }, 500);
        }
    });

    // Toggle side navigation menu

    sideOptionsButton.addEventListener("click", () => {
        if (sideOptionsList.style.display === "flex") {
            sideOptionsList.style.animation = "unrenderUp .6s ease-in-out";
            sideOptionsButton.style.transform = "rotate(0deg)";
            setTimeout(() => {
                sideOptionsList.style.display = "none";
            }, 500);
        }
        else {
            sideOptionsList.style.animation = "renderUp .6s ease-in-out";
            sideOptionsButton.style.transform = "rotate(180deg)";
            sideOptionsList.style.display = "flex";
        }
    });

    // Close side navigation menu when clicking outside

    document.addEventListener("click", (e) => {
        if (e.target !== sideOptionsButton && sideOptionsList.style.display === "flex" && !sideOptionsButton.contains(e.target)) {
            sideOptionsList.style.animation = "unrenderUp .6s ease-in-out";
            sideOptionsButton.style.transform = "rotate(0deg)";
            setTimeout(() => {
                sideOptionsList.style.display = "none";
            }, 500);
        }
    });

    // Handle up/down scroll button

    updownButton.addEventListener("click", () => {
        if (window.scrollY > window.innerHeight * 2) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        }
    });

    // Update button rotation based on scroll position

    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight * 2) {
            updownButton.style.transform = "rotate(180deg)";
        } else {
            updownButton.style.transform = "rotate(0deg)";
        }
    });

    //sideOptionsList Buttons

    sideOptionsListAboutButton.addEventListener("click", () => {
        window.scrollTo({
            top: cover.offsetHeight,
            behavior: "smooth"
        });
    });

    // sideOptionsAllProjectsButton

    allProjectsButton.addEventListener("click", () => {
        window.scrollTo({
            top: cover.offsetHeight + summary.offsetHeight + mainSoftSkills.offsetHeight,
            behavior: "smooth"
        });
    });

    // sideOptionsFeaturedProjectsButton

    featuredProjectsButton.addEventListener("click", () => {
        window.scrollTo({
            top: cover.offsetHeight + summary.offsetHeight + mainSoftSkills.offsetHeight + allProjects.offsetHeight,
            behavior: "smooth"
        });
    });

    // sideProjectsList Buttons

    sideOptionsListProjectsButton.addEventListener("click", () => {
        sideProjectsList.style.display = "flex";
        sideProjectsList.style.animation = "renderRight .6s ease-in-out";
    });
    sideProjectsList.addEventListener("click", () => {
        sideProjectsList.style.animation = "unrenderRight .6s ease-in-out";
        setTimeout(() => {
            sideProjectsList.style.display = "none";
        }, 500);
    });

    // Close sideProjectsList when clicking outside

    document.addEventListener("click", (e) => {
        if (e.target !== sideOptionsListProjectsButton && e.target !== sideProjectsList) {
            sideProjectsList.style.animation = "unrenderRight .6s ease-in-out";
            setTimeout(() => {
                sideProjectsList.style.display = "none";
            }, 500);
        }
    });

    // sideOptionsListTestimonialsButton

    sideOptionsListTestimonialsButton.addEventListener("click", () => {
        window.scrollTo({
            top: cover.offsetHeight + summary.offsetHeight + mainSoftSkills.offsetHeight + allProjects.offsetHeight + projectsPage.offsetHeight,
            behavior: "smooth"
        });
    });

    // sideOptionsListContactsButton

    sideOptionsListContactsButton.addEventListener("click", () => {
        window.scrollTo({
            top: cover.offsetHeight + summary.offsetHeight + mainSoftSkills.offsetHeight + allProjects.offsetHeight + projectsPage.offsetHeight + testimonials.offsetHeight,
            behavior: "smooth"
        });
    });
}
