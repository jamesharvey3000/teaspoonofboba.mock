document.addEventListener('DOMContentLoaded', function() {
    var navContent = `
        <nav>
    <ul class="nav-list">
      <img src="images/somethingfizzy.png" alt="Something Fizzy Drink" class="cup">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
      <img src="images/purpledrizzle.png" alt="Purple Drizzle Drink" class="cup">
    </ul>
  </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navContent);
});
