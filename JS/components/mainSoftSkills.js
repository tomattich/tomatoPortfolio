/**
 * Initializes the Soft Skills/Hard Skills component.
 * Renders the skills section and handles the toggle between "Soft Skills" and "Hard Skills".
 * Animates skill progress bars and counters.
 */
export function mainSoftSkills() {
    const mainSoftSkills = document.querySelector(".mainSoftSkills");

    mainSoftSkills.innerHTML = `
        <div class="mainSoftSkillsChange">
            <button class="buttons mainSoftSkillsChanger1"><svg fill="currentColor" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path></g></svg></button>
            <h1 class="mainSoftSkillsTitle">Soft Skills</h1>
            <button class="buttons mainSoftSkillsChanger2"><svg fill="currentColor" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></g></svg></button>
        </div>
        <hr class="line" />
        <ul>
            <li></li>
        </ul>
        <hr class="line" />
        <ul>
            <li></li>
        </ul>
        <div class="mainSoftSkillsContainer">
        </div>
    `;

    const mainSoftSkillsChanger1 = document.querySelector(".mainSoftSkillsChanger1")
    const mainSoftSkillsChanger2 = document.querySelector(".mainSoftSkillsChanger2")
    const mainSoftSkillsTitle = document.querySelector(".mainSoftSkillsTitle");
    const mainSoftSkillsContainer = document.querySelector(".mainSoftSkillsContainer");

    let number1;
    let number2;
    let number3;
    let number4;
    let number5;
    let number6;

    /**
     * Animates a numerical counter to a target percentage.
     * @param {HTMLElement} number - The DOM element to update.
     * @param {number} percentage - The target percentage value.
     */
    function calcNumber(number, percentage) {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            number.textContent = i + "%";

            if (i === percentage) {
                clearInterval(interval);
            }
        }, 20);
    }

    /**
     * Toggles between "Soft Skills" and "Hard Skills" views.
     * Updates the section title, renders the corresponding skills container, and triggers animations.
     */
    function changeTitle() {
        if (mainSoftSkillsTitle.innerHTML === "Soft Skills") {
            mainSoftSkillsTitle.innerHTML = "Hard Skills";
            mainSoftSkillsContainer.innerHTML = `
            <div class="hardSkillsContainer">
                <div class="hardSkills1">
                    <p>HTML</p>
                    <div class="circularProgress1 bar1">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n1">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="hardSkills2">
                    <p>JavaScript</p>
                    <div class="circularProgress2 bar2">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n2">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="hardSkills3">
                    <p>CSS</p>
                    <div class="circularProgress3 bar3">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n3">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
            `;
            number1 = document.querySelector(".n1");
            number2 = document.querySelector(".n2");
            number3 = document.querySelector(".n3");
            calcNumber(number1, 99);
            calcNumber(number2, 80);
            calcNumber(number3, 99);
            mainSoftSkillsTitle.style.animation = "reveal .3s ease-in-out";
            setTimeout(() => {
                mainSoftSkillsTitle.style.animation = "none";
            }, 300);
        } else if (mainSoftSkillsTitle.innerHTML === "Hard Skills") {
            mainSoftSkillsTitle.innerHTML = "Soft Skills";
            mainSoftSkillsTitle.style.animation = "reveal .3s ease-in-out";
            setTimeout(() => {
                mainSoftSkillsTitle.style.animation = "none";
            }, 300);
            mainSoftSkillsContainer.innerHTML = `
            <div class="softSkillsContainer">
                <div class="skill1">
                    <p>TeamWork <span>!</span></p>
                    <div class="circularProgress1 bar1">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n1">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="skill2">
                    <p>Communication <span>!</span></p>
                    <div class="circularProgress2 bar2">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n2">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
                <div class="skill3">
                    <p>Problem Solving <span>!</span></p>
                    <div class="circularProgress3 bar3">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n3">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="softSkillsContainer softSkillsContainer2">
                <div class="skill4">
                    <div class="circularProgress4 bar4">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n4">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                    <p>Adaptability <span>!</span></p>
                </div>
                <div class="skill5">
                    <div class="circularProgress5 bar5">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n5">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                    <p>Time Management <span>!</span></p>
                </div>
                <div class="skill6">
                    <div class="circularProgress6 bar6">
                        <div class="outer">
                            <div class="inner">
                                <div class="number n6">
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160">
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                    <p>Decision Making <span>!</span></p>
                </div>
            </div>`;

            number1 = document.querySelector(".n1");
            number2 = document.querySelector(".n2");
            number3 = document.querySelector(".n3");
            number4 = document.querySelector(".n4");
            number5 = document.querySelector(".n5");
            number6 = document.querySelector(".n6");

            calcNumber(number1, 99);
            calcNumber(number2, 90);
            calcNumber(number3, 85);
            calcNumber(number4, 75);
            calcNumber(number5, 80);
            calcNumber(number6, 80);
        }
    }
    changeTitle();
    mainSoftSkillsChanger1.addEventListener("click", changeTitle);
    mainSoftSkillsChanger2.addEventListener("click", changeTitle);
}