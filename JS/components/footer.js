export function footer() {
    const footer = document.querySelector("footer");
    footer.innerHTML = `
    <div class="footerNavigation">
        <p>Navigation</p>
        <button class="buttons">home</button>
        <button class="buttons">about</button>
        <button class="buttons">contact</button>
        <button class="buttons">projects</button>
    </div>
    <div>
        <p>Copyright  2025 Tomato. All rights reserved.</p>
    </div>
    `;
}