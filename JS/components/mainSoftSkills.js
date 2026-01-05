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
    `;
    const number1 = document.querySelector(".n1");
    const number2 = document.querySelector(".n2");
    const number3 = document.querySelector(".n3");
    function calcNumber() {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            number1.textContent = i + "%";
            if (i === 100) {
                clearInterval(interval);
            }
        }, 30);
    }
    function calcNumber2() {
        let i = 0;
        const interval2 = setInterval(() => {
            i++;
            number2.textContent = i + "%";
            if (i === 67) {
                clearInterval(interval2);
            }
        }, 30);
    }
    function calcNumber3() {
        let i = 0;
        const interval3 = setInterval(() => {
            i++;
            number3.textContent = i + "%";
            if (i === 50) {
                clearInterval(interval3);
            }
        }, 30);
    }
    calcNumber();
    calcNumber2();
    calcNumber3();
}