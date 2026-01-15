/**
 * Initializes and renders the Summary component.
 * Displays the "Services" and "About Me" sections with stats and details.
 */
export function renderSummary() {
    const summary = document.querySelector(".summary")
    summary.innerHTML = `
        <div class="skills">
            <h1>Services <span>!</span></h1>
            <div>
                <p><span><svg fill="currentColor" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Coding"> <path d="M80.917,377.0605H202V439.16H139a9.8965,9.8965,0,1,0,0,19.7929H373a9.8965,9.8965,0,1,0,0-19.7929H310V377.0605H431.0864a49.9023,49.9023,0,0,0,49.5528-44.1254H31.36A49.91,49.91,0,0,0,80.917,377.0605Z"></path> <path d="M431.0869,53.0474H80.9175A49.9181,49.9181,0,0,0,31,102.9648V313.1416H481V102.9648A49.9144,49.9144,0,0,0,431.0869,53.0474ZM201.2354,231.6016a9.8993,9.8993,0,1,1-16.4708,10.9863l-36-54a9.9133,9.9133,0,0,1,0-10.9863l36-54a9.8993,9.8993,0,0,1,16.4708,10.9863L168.9,183.0947Zm86.7128-117.5537-45,144a9.899,9.899,0,1,1-18.8964-5.9063l45-144a9.899,9.899,0,1,1,18.8964,5.9063Zm75.2872,74.54-36,54a9.8993,9.8993,0,0,1-16.4708-10.9863L343.1,183.0947l-32.335-48.5068a9.8993,9.8993,0,0,1,16.4708-10.9863l36,54A9.9133,9.9133,0,0,1,363.2354,188.5879Z"></path> </g> </g></svg></span>
                    Website Development</p>
                <p class="skillsDetails">I have experience in building websites using HTML<span>,</span> CSS<span>,</span> and JavaScript<span>.</span> I have also worked on several projects using React and Node<span>.</span>js<span>.</span></p>
            </div>
            <svg class="circle-separator" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="currentColor"/></svg>

            <div>
                <p><span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M8.649 2.577A10.004 10.004 0 0 1 20.344 6.49a9.995 9.995 0 0 1 1.2 8.486l-.004.01-.005.015a2.958 2.958 0 0 1-2.836 2.001h-2.69a1.037 1.037 0 0 0-.95.68c-.047.13-.068.27-.06.409v.916A3.01 3.01 0 0 1 11.96 22a9.626 9.626 0 0 1-4.195-1l.009.005-.018-.009.01.004a10.1 10.1 0 0 1-5.716-7.996l-.001-.012a9.992 9.992 0 0 1 6.6-10.415Zm3.35 3.429a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12ZM8.53 7.518a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01Zm6.968 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM6.99 11.004a1 1 0 1 0 0 2H7a1 1 0 1 0 0-2h-.01Z" clip-rule="evenodd"/>
                </svg></span>
                UI/UX Design</p>
                <p class="skillsDetails">Create a unique visual identity for your business with impactful and memorable visuals<span>.</span></p>
            </div>
            <svg class="circle-separator" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5" fill="currentColor"/></svg>

            <div>
                <p><span><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                </svg></span>
                Mobile App Development</p>
                <p class="skillsDetails">I have experience in building mobile apps using React Native and Flutter<span>.</span> I have also worked on several projects using React Native and Flutter<span>.</span></p>
            </div>
        </div>
        <div class="aboutMe">
            <h1>About me</h1>
            <p>I started my journey as a frontend developer in 2022 and I have been passionate about it ever since<span>.</span> I have a strong foundation in HTML<span>,</span> CSS<span>,</span> and JavaScript<span>.</span> and I am always eager to learn new technologies and techniques<span>.</span></p>
            <div class="aboutMeNumbersContainer">
                <div class="aboutMeNumbers">
                    <h1>2<span>+</span></h1>
                    <p>Years of experience</p>
                </div>
                <div class="aboutMeNumbers">
                    <h1>100<span>+</span></h1>
                    <p>Completed projects</p>
                </div>
                <div class="aboutMeNumbers">
                    <h1>100<span>%</span></h1>
                    <p>Satisfied clients</p>
                </div>
            </div>
        </div>
        `

}