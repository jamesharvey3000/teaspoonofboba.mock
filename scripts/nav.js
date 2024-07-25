document.addEventListener('DOMContentLoaded', function() {
    var navContent = `
        <nav>
            <img src="images/somethingfizzy.png" alt="Something Fizzy Drink" class="cup">
            <ul class="nav-list">
                <li><a href="#" onclick="loadPage('home')">Home</a></li>
                <li><a href="#" onclick="loadPage('menu')">Menu</a></li>
                <li><a href="#" onclick="loadPage('gallery')">Photos</a></li>
                <li><a href="#" onclick="loadPage('contact')">Contact Us</a></li>
                <li><a href="#" onclick="loadPage('join')">Join Us for a Drink</a></li>
            </ul>
            <img src="images/purpledrizzle.png" alt="Purple Drizzle Drink" class="cup">
        </nav>
    `;
    document.querySelector('header').insertAdjacentHTML('afterend', navContent);
});
