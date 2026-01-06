export function mainSoftSkills() {
    const mainSoftSkills = document.querySelector(".mainSoftSkills");
    mainSoftSkills.innerHTML = `
        <h1>Soft Skills</h1>
        <hr class="line" />
        <ul>
            <li></li>
        </ul>
        <hr class="line" />
            <ul>
                <li></li>
            </ul>
        <div class="mainSoftSkillsContainer">
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
            </div>
        </div>
    `;
    const number1 = document.querySelector(".n1");
    const number2 = document.querySelector(".n2");
    const number3 = document.querySelector(".n3");
    const number4 = document.querySelector(".n4");
    const number5 = document.querySelector(".n5");
    const number6 = document.querySelector(".n6");
    function calcNumber() {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            number1.textContent = i + "%";
            if (i === 99) {
                clearInterval(interval);
            }
        }, 30);
    }
    function calcNumber2() {
        let i = 0;
        const interval2 = setInterval(() => {
            i++;
            number2.textContent = i + "%";
            if (i === 90) {
                clearInterval(interval2);
            }
        }, 30);
    }
    function calcNumber3() {
        let i = 0;
        const interval3 = setInterval(() => {
            i++;
            number3.textContent = i + "%";
            if (i === 85) {
                clearInterval(interval3);
            }
        }, 30);
    }
    function calcNumber4() {
        let i = 0;
        const interval4 = setInterval(() => {
            i++;
            number4.textContent = i + "%";
            if (i === 75) {
                clearInterval(interval4);
            }
        }, 30);
    }
    function calcNumber5() {
        let i = 0;
        const interval5 = setInterval(() => {
            i++;
            number5.textContent = i + "%";
            if (i === 80) {
                clearInterval(interval5);
            }
        }, 30);
    }
    function calcNumber6() {
        let i = 0;
        const interval6 = setInterval(() => {
            i++;
            number6.textContent = i + "%";
            if (i === 80) {
                clearInterval(interval6);
            }
        }, 30);
    }
    calcNumber();
    calcNumber2();
    calcNumber3();
    calcNumber4();
    calcNumber5();
    calcNumber6();
}