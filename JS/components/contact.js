/**
 * Initializes the Contact component.
 * Renders the contact section with form and contact details.
 * Handles form validation and submission simulation.
 */

export function contact() {
    const contact = document.querySelector(".contact");
    contact.innerHTML = `
    <h1>Contact <span>!</span></h1>
    <hr class="line" />
    <ul>
        <li></li>
    </ul>
    <hr class="line" />
    <ul>
        <li></li>
    </ul>
    <div class="contactContainer">
        <div class="contactText">
            <h2>Let<span>'</span>s get in touch</h2>
            <p>whether you want a full website<span>,</span> a simple landing page<span>,</span> or just need some help with your current project<span>,</span> I'm here to help<span>!</span></p>
            <div class="contactDetails">
                <div class="contactDetailPhoneNumber">
                    <h4>PHONE</h4>
                    <p><span>+</span>213 X XX XX XX XX</p>
                </div>
                <div class="contactDetailEmail">
                    <h4>EMAIL</h4>
                    <p>yesmytomattich<span>@</span>gmail<span>.</span>com</p>
                </div>
                <div class="contactDetailAddress">
                    <h4>ADDRESS</h4>
                    <p>123 tomato St<span>,</span> veggieTown<span>,</span> UV</p>
                </div>
            </div> 
        </div>
        <form class="contactForm">
            <label for="name">Name</label>
            <div class="contactInputNamePopOut"><span>!</span>Please enter a valid name<span>!</span></div>
            <input class="contactInput contactInputName" id="name" type="text" autocomplete="on">
            <label for="email">Email</label>
            <div class="contactInputEmailPopOut"><span>!</span>Please enter a valid email<span>!</span></div>
            <input class="contactInput contactInputEmail" id="email" autocomplete="on" >
            <label for="message">Message</label>
            <div class="contactInputMessagePopOut"><span>!</span>Please enter a valid message<span>!</span></div>
            <textarea class="contactInput contactInputMessage" id="message"></textarea>
            <div class="contactButtonContainer">
                <button class="buttons contactButton" type="submit">Send</button>
                <div class="contactSuccess">Message sent successfully <span>!</span></div>
            </div>
        </form>
    </div>
    `;

    const contactForm = document.querySelector(".contactForm");
    const contactInputName = document.querySelector(".contactInputName");
    const contactInputEmail = document.querySelector(".contactInputEmail");
    const contactInputMessage = document.querySelector(".contactInputMessage");
    const contactInputNamePopOut = document.querySelector(".contactInputNamePopOut");
    const contactInputEmailPopOut = document.querySelector(".contactInputEmailPopOut");
    const contactInputMessagePopOut = document.querySelector(".contactInputMessagePopOut");
    const contactSuccess = document.querySelector(".contactSuccess");
    
    /* =========================================
       VALIDATION
       ========================================= */

    /* NAME VALIDATION */

    /**
     * Validates the name input.
     * Name must be at least 3 characters long.
     * @returns {boolean} True if valid, false otherwise.
     */
    const validateName = () => {
        if (contactInputName.value.trim().length < 3) {
            return false;
        }
        return true;
    };

    /* EMAIL VALIDATION */

    /**
     * Validates the email input.
     * Email must be longer than 3 characters and contain an '@' symbol.
     * @returns {boolean} True if valid, false otherwise.
     */
    const validateEmail = () => {
        if (contactInputEmail.value.length <= 3 || !contactInputEmail.value.includes("@")) {
            return false;
        }
        return true;
    };

    /* MESSAGE VALIDATION */

    /**
     * Validates the message input.
     * Message must not be empty.
     * @returns {boolean} True if valid, false otherwise.
     */
    const validateMessage = () => {
        if (contactInputMessage.value.trim() === "") {
            return false;
        }
        return true;
    };

    /* SUBMIT VALIDATION */

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validateName()) {
            contactInputNamePopOut.style.display = "flex";
        }
        if (!validateEmail()) {
            contactInputEmailPopOut.style.display = "flex";
        }
        if (!validateMessage()) {
            contactInputMessagePopOut.style.display = "flex";
        }
        if (validateName() && validateEmail() && validateMessage()) {
            contactInputNamePopOut.style.display = "none";
            contactInputEmailPopOut.style.display = "none";
            contactInputMessagePopOut.style.display = "none";
            contactInputName.value = "";
            contactInputEmail.value = "";
            contactInputMessage.value = "";
            contactSuccess.style.display = "flex";
            setTimeout(() => {
                contactSuccess.style.display = "none";
            }, 3000);
        }
    });

}