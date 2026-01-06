/* =========================================
PROJECTS COMPONENT
Handles featured projects slider with navigation
========================================= */

let fetchedProjects;
let projects;

// Fetch projects data from JSON file

export async function fetchProjects() {
    try {
        const response = await fetch("JS/data/projects.json");
        const data = await response.json();
        fetchedProjects = data;
        projects = Object.values(fetchedProjects);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

export function Projects() {    
    const projectsContainer = document.querySelector(".projectsContainer");
    const featuredProjects = projects.filter(project => project.technologies.featured === true);
    let index = 0;

    // Generate HTML list of technologies used in project

    function renderTech(technologies) {
        let techList = "";
        for (let tech of Object.keys(technologies)) {
            if (technologies[tech] === true && tech !== "featured") {
                techList += `<li class="techItem">${tech}</li>`;
            }
        }
        return techList;
    }

    // Generate HTML list of genres used in project

    function renderGenres(genres) {
        let genreList = "";
        for (let genre of Object.keys(genres)) {
            if (genres[genre] === true) {
                genreList += `<li class="genreItem">${genre}</li>`;
            }
        }
        return genreList;
    }
    // Render the current featured project
    function renderFeaturedProjects() {
        const featuredProject = featuredProjects[index];
        projectsContainer.innerHTML = `
        <div class="project">
        <div class="projectImageContainer">
                <div class="projectImageMain">
                    <img src="${featuredProject.images[0]}" alt="">
                </div>
            </div>
            <div class="projectInfoContainer">
                    <h1>${featuredProject.name}</h1>
                    <p class="projectDescription">${featuredProject.description}</p>
                    <div class="technologies">
                        <p>i worked in the  :</p>
                        <ul class="techList">${renderTech(featuredProject.technologies)}</ul>
                        <p>of this project <span>!</span></p>
                    </div>
                    <button class="buttons viewProjectButton" onclick="window.open('${featuredProject.link}', '_blank')">View Project</button>
            </div>
        <div class="projectPrevNextButtons">
            <button class="buttons prevProjectButton"><svg class="w-6 h-6 text-gray-800 dark:text-white prevProjectButton" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                </svg>
            </button>
            <div class="projectDotButtons">
            <button class="buttons project1"></button>
            <button class="buttons project2"></button>
            </div>
            <button class="buttons nextProjectButton"><svg class="w-6 h-6 text-gray-800 dark:text-white nextProjectButton" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>
            </button>
        </div>
    </div>
    `;
        dotsHighlight();
    }

    // Navigate to next project

    function nextProject() {
        index++;
        if (index >= featuredProjects.length) {
            index = 0;
        }
        renderFeaturedProjects();
    }

    // Navigate to previous project

    function prevProject() {
        index--;
        if (index < 0) {
            index = featuredProjects.length - 1;
        }
        renderFeaturedProjects();
    }

    // Highlight the active project dot indicator

    function dotsHighlight() {
        const project1 = document.querySelector(".project1");
        const project2 = document.querySelector(".project2");
        if (project1 && project2) {
            project1.style.backgroundColor = "";
            project2.style.backgroundColor = "";
            if (index === 0) {
                project1.style.backgroundColor = "var(--flavorColor)";
            } else if (index === 1) {
                project2.style.backgroundColor = "var(--flavorColor)";
            }
        }
    }

    // Handle project navigation clicks

    projectsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("nextProjectButton") || e.target.closest(".nextProjectButton")) {
            nextProject();
        } else if (e.target.classList.contains("prevProjectButton") || e.target.closest(".prevProjectButton")) {
            prevProject();
        } else if (e.target.classList.contains("project1")) {
            index = 0;
            renderFeaturedProjects();
        } else if (e.target.classList.contains("project2")) {
            index = 1;
            renderFeaturedProjects();
        }
    });

    renderFeaturedProjects();
    
    // All projects rendering function
    
    function allProjects() {
        const allProjectsItemsContainer = document.querySelector(".allProjectsItemsContainer");
        projects.forEach((project, pIndex) => {
            allProjectsItemsContainer.innerHTML += `
            <div class="allProjectsItem" data-project-index="${pIndex}" data-image-index="0">
                <button class="buttons prevImgButton">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </button>
                <div class="allProjectsItemImage">
                    <img class="allProjectsItemImageScroll" src="${project.images[0]}" alt="${project.name}">
                </div>
                <button class="buttons nextImgButton">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>
                <div class="allProjectsItemInfo">
                    <h1>${project.name}</h1>
                    <p class="allProjectsItemDescription">${project.description}</p>
                    <p>i worked in the :</p>
                    <ul>${renderTech(project.technologies)}</ul>
                    <p>of this project <span>!</span></p>
                </div>
                <div class="allProjectsItemGenres">
                    <p>Genres :</p>
                    <ul>${renderGenres(project.genres)}</ul>
                </div>
                <button class="buttons viewProjectItemButton" onclick="window.open('${project.link}', '_blank')">View Project</button>
            </div>
            `;
        });

        // Event delegation for image navigation

        allProjectsItemsContainer.addEventListener("click", (e) => {
            const item = e.target.closest(".allProjectsItem");
            const project = projects[item.dataset.projectIndex];
            const img = item.querySelector(".allProjectsItemImageScroll");
            let imgIndex = parseInt(item.dataset.imageIndex);
            if (e.target.closest(".nextImgButton")) {
                imgIndex +=1;
                if (imgIndex >= project.images.length) {
                    imgIndex = 0;
                }
            } else if (e.target.closest(".prevImgButton")) {
                imgIndex -=1;
                if (imgIndex < 0) {
                    imgIndex = project.images.length - 1;
                }
            } else return;

            item.dataset.imageIndex = imgIndex;
            img.src = project.images[imgIndex];
        });
    }
    allProjects();
}
