/* =========================================
   TESTIMONIALS COMPONENT
   Handles auto-scrolling testimonials carousel
   ========================================= */
export function testimonials() {
    const testimonialsContainer = document.querySelector(".testimonialsContainer");
    let interval;

    // TestimonialsContainer content

    function renderTestimonials() {
        testimonialsContainer.innerHTML = `
        <button class="buttons testimonialsButtonLeft"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                    </svg>
                </button>
                <button class="buttons testimonialsButtonRight"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                    </svg>
                </button>
                <div class="testimonial1">
                    <img src="assets/testimonials/testimonial1.png" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, vero quo vel voluptate tempora tempore obcaecati laboriosam rem aspernatur cum necessitatibus libero similique mollitia nihil aliquid magnam quibusdam? Voluptates, eos?
                    Accusamus ipsum esse neque consequatur voluptatem. Cupiditate ullam, quis, nihil ab fuga veniam repellat eligendi ut earum eos facere quam provident error eius et itaque amet facilis labore ipsa. Facilis?
                    Illo quia numquam iste minus ipsam impedit, itaque amet fugit aspernatur incidunt consequatur quo, reprehenderit eum nostrum molestiae mollitia enim inventore iure rem labore qui odio consequuntur. Voluptatibus, esse dolorum.
                    Est, quis. Fugit, eveniet? Voluptas nesciunt, cum cupiditate voluptatum ex quae consectetur, suscipit libero est delectus quo sint blanditiis at aperiam aut rem perferendis minus veniam.</p>
                </div>
                <div class="testimonial2">
                    <img src="assets/testimonials/testimonial2.png" alt="">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio commodi asperiores temporibus dolore a velit vitae natus magnam. Adipisci, quos aliquid. Quas blanditiis minima error voluptates quam ad adipisci expedita!
                    Recusandae, qui eligendi. Doloremque, pariatur. Minima eaque omnis amet. Dolorum, fugiat maiores. Dicta sequi cum dolorem. Neque debitis consequatur enim sunt sapiente voluptates fugiat distinctio possimus magni, assumenda veniam voluptatem?
                    Nihil obcaecati fuga necessitatibus praesentium, rem repellendus officia sapiente a asperiores. Non</p>
                </div>
                <div class="testimonial3">
                    <img src="assets/testimonials/testimonial3.png" alt="">
                    <p>I saw that earlier and if that happens genuinely it will put the nail of the coffin for that game
Even after the release the hype would die off
But than again there is silk song and it showed than an anticipated game will bounce off of hype death
Soooo
Just thought about it uncle granpa will rape pennywise if he ever in counters it
            On a side note do you'll think the reason you wake up from dreams is because you died in them no matter the context of the dream like sometimes I wake up from a dream where I was having a conversation or doing something and the first thought that comes to my mind is I died ...how
Like if I am in a dream where am being chased by something or being brutally killed that thought don't come but when I wake up from a dream where there isn't something actively trying to kill me I wonder how I died</p>
                </div>
                `
    }
    renderTestimonials();

    // Start automatic scrolling through testimonials

    function startAutoScroll() {
        interval = setInterval(() => {
            testimonialsContainer.scrollLeft += testimonialsContainer.offsetWidth + 17;
            if ((testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth) >= testimonialsContainer.scrollWidth) {
                testimonialsContainer.scrollLeft = 0;
            }
        }, 3000);
    }

    // Stop automatic scrolling

    function stopAutoScroll() {
        clearInterval(interval);
    }
    startAutoScroll();

    // Pause auto-scroll when hovering

    testimonialsContainer.addEventListener("mouseenter", stopAutoScroll);

    // Resume auto-scroll when mouse leaves

    testimonialsContainer.addEventListener("mouseleave", startAutoScroll);

    // Handle manual navigation button clicks

    testimonialsContainer.addEventListener("click", (e) => {
        if (e.target.closest(".testimonialsButtonLeft")) {
            testimonialsContainer.scrollLeft -= testimonialsContainer.offsetWidth + 17;
            if (testimonialsContainer.scrollLeft <= 0) {
                testimonialsContainer.scrollLeft = testimonialsContainer.scrollWidth;
            }
        } else if (e.target.closest(".testimonialsButtonRight")) {
            testimonialsContainer.scrollLeft += testimonialsContainer.offsetWidth + 17;
            if ((testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth) >= testimonialsContainer.scrollWidth) {
                testimonialsContainer.scrollLeft = 0;
            }
        }
    });
}
