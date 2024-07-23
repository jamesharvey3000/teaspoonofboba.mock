document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const lastPage = localStorage.getItem('lastPage') || 'home';
    loadPage(lastPage); // Load the last visited page or home page by default
});

function loadPage(page) {
    console.log(`Loading page: ${page}`);
    const mainContent = document.getElementById('main-content');
    localStorage.setItem('lastPage', page); // Store the last visited page in localStorage

    fetch(`pages/${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            mainContent.innerHTML = data;
            console.log(`${page} content loaded`);

            // Check if the loaded page is the home page before initializing the slider
            if (page === 'home') {
                console.log('Initializing slider for home page');
                initSlider();
            } else {
                console.log(`No specific initialization needed for ${page}`);
            }
        })
        .catch(error => {
            console.error('Error loading page:', error);
            mainContent.innerHTML = '<p>Sorry, an error occurred while loading the page.</p>';
        });
}

function initSlider() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    console.log(`Number of slides found: ${slides.length}`);

    if (slides.length === 0) {
        console.warn("No slides found to initialize slider.");
        return; // No slides to show
    }

    showSlides();

    function showSlides() {
        if (slides.length === 0) {
            console.warn("No slides to display in showSlides function.");
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        console.log(`Displaying slide ${slideIndex}`);

        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
    } else {
        console.error(`Modal with id "${id}" not found.`);
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error(`Modal with id "${id}" not found.`);
    }
}
