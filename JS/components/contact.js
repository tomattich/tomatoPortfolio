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
                    <p><span>+</span>213 6 96 74 20 55</p>
                </div>
                <div class="contactDetailEmail">
                    <h4>EMAIL</h4>
                    <p>tomattich<span>@</span>gmail<span>.</span>com</p>
                </div>
                <div class="contactDetailAddress">
                    <h4>ADDRESS</h4>
                    <p>123 tomato St<span>,</span> veggieTown<span>,</span> UV</p>
                </div>
            </div> 
        </div>
        <form class="contactForm">
            <label for="name">Name</label>
            <input class="contactInput" type="text">
            <label for="email">Email</label>
            <input class="contactInput" type="email">
            <label for="message">Message</label>
            <textarea class="contactInput" ></textarea>
            <button class="buttons contactButton" type="submit">Send</button>
        </form>
    </div>
    `;
}