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
                    <h1><span>${featuredProject.name}</span></h1>
                    <p class="projectDescription">${featuredProject.description}</p>
                    <div class="technologies">
                        <p>i worked in the  <span> :</span></p>
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

    /**
     * Navigates to the next featured project.
     * Loops back to the start if at the end.
     */
    function nextProject() {
        index++;
        if (index >= featuredProjects.length) {
            index = 0;
        }
        renderFeaturedProjects();
    }

    // Navigate to previous project

    /**
     * Navigates to the previous featured project.
     * Loops to the end if at the start.
     */
    function prevProject() {
        index--;
        if (index < 0) {
            index = featuredProjects.length - 1;
        }
        renderFeaturedProjects();
    }

    // Highlight the active project dot indicator

    /**
     * Updates the visual state of the project navigation dots.
     * Highlights the dot corresponding to the current project index.
     */
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

        allProjectsItemsContainer.insertAdjacentHTML('beforebegin', `
        <div class="projectFilterOptionsContainer">
            <select class="projectFilterOptions">
                <option class="buttons filterButton active" value="all">All</option>
                <option class="buttons filterButton" value="e-shop">E-shop</option>   
                <option class="buttons filterButton" value="games">Games</option>
                <option class="buttons filterButton" value="agriculture">Agriculture</option>
                <option class="buttons filterButton" value="chat">Chat</option>
            </select>
            <svg class="projectFilterOptionsArrow" viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow_down [#338]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6684.000000)" fill="var(--flavorColor)"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]"> </path> </g> </g> </g> </g></svg>        </div>
        `);

        let isExpanded = false;
        let currentFilteredProjects = projects;

        let imgIndex = 0;
        function renderProjectsList() {
            allProjectsItemsContainer.innerHTML = "";

            const projectsToShow = isExpanded ? currentFilteredProjects : currentFilteredProjects.slice(0, 5);

            projectsToShow.forEach((project) => {
                allProjectsItemsContainer.innerHTML += `
                <div class="allProjectsItem">
                    <button class="buttons prevImgButton">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </button>
                    <div class="allProjectsItemImage">
                        <img class="allProjectsItemImageScroll" src="${project.images[imgIndex]}" alt="${project.name}">
                    </div>
                    <button class="buttons nextImgButton">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                        </svg>
                    </button>
                    <div class="allProjectsItemInfo">
                        <h1><span>${project.name}</span></h1>
                        <p class="allProjectsItemDescription">${project.description}</p>
                        <p>i worked in the :</p>
                        <ul><span>${renderTech(project.technologies)}</span></ul>
                        <p>of this project <span>!</span></p>
                    </div>
                    <div class="allProjectsItemGenres">
                        <p>Genres :</p>
                        <ul><span>${renderGenres(project.genres)}</span></ul>
                    </div>
                    <button class="buttons viewProjectItemButton" onclick="window.open('${project.link}', '_blank')">View Project</button>
                </div>
                `;
            });

            // Remove existing button

            const existingButton = document.querySelector('.showMoreProjectsButton');
            if (existingButton) {
                existingButton.remove();
            }

            // Handle Show More / Show Less Button

            if (currentFilteredProjects.length > 5) {
                const buttonText = isExpanded ? "Show Less" : "Show More";
                allProjectsItemsContainer.insertAdjacentHTML('afterend', `<button class="showMoreProjectsButton">${buttonText}</button>`);

                const showMoreButton = document.querySelector('.showMoreProjectsButton');

                showMoreButton.addEventListener('click', () => {
                    isExpanded = !isExpanded;
                    renderProjectsList();
                });
            }
        }

        // Initial render

        renderProjectsList();

        // Filter event listener

        const filterSelect = document.querySelector(".projectFilterOptions");
        filterSelect.addEventListener("change", (e) => {
            const filter = e.target.value;
            isExpanded = false;

            if (filter === "all") {
                currentFilteredProjects = projects;
            } else {
                currentFilteredProjects = projects.filter(project => project.genres && project.genres[filter] === true);
            }
            renderProjectsList();
        });

        const projectFilterOptionsArrow = document.querySelector(".projectFilterOptionsArrow");
        
        
        filterSelect.addEventListener("click", () => {
               if (projectFilterOptionsArrow.style.transform === "rotate(180deg)") {
                   projectFilterOptionsArrow.style.transform = "rotate(0deg)";
               } else {
                   projectFilterOptionsArrow.style.transform = "rotate(180deg)";
               }
        });

        document.addEventListener("click", (e) => {
            if (!filterSelect.contains(e.target) && !projectFilterOptionsArrow.contains(e.target)) {
                projectFilterOptionsArrow.style.transform = "rotate(0deg)";
            }
        });

        allProjectsItemsContainer.addEventListener("click", (e) => {
            const item = e.target.closest(".allProjectsItem");

            // Get the index of the clicked item within its parent container

            const allItems = Array.from(allProjectsItemsContainer.querySelectorAll(".allProjectsItem"));
            const itemIndex = allItems.indexOf(item);

            // Get the corresponding project from the currently displayed projects

            const projectsToShow = isExpanded ? currentFilteredProjects : currentFilteredProjects.slice(0, 5);
            const project = projectsToShow[itemIndex];
            const img = item.querySelector(".allProjectsItemImageScroll");

            // Get current image index from the src

            for (let i = 0; i < project.images.length; i++) {
                if (img.src.includes(project.images[i])) {
                    imgIndex = i;
                }
            }

            if (e.target.classList.contains("nextImgButton") || e.target.closest(".nextImgButton")) {
                imgIndex += 1;
                if (imgIndex >= project.images.length) {
                    imgIndex = 0;
                }
                img.src = project.images[imgIndex];
            } else if (e.target.closest(".prevImgButton")) {
                imgIndex -= 1;
                if (imgIndex < 0) {
                    imgIndex = project.images.length - 1;
                }
                img.src = project.images[imgIndex];
            }
        });
    }
    allProjects();
}
