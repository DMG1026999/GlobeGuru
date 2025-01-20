// Smooth scrolling to sections when navbar links are clicked
document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute("href").substring(1); // Get the ID (remove #)
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Smooth scrolling
                block: "start",
            });
        }
    });
});

// Search bar functionality
const searchInput = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button[type='submit']");
const resetButton = document.querySelector(".search-container button[type='reset']");

searchButton.addEventListener("click", function () {
    const query = searchInput.value.trim().toLowerCase(); // Get search input and convert to lowercase
    const contentSections = document.querySelectorAll(".content");

    let found = false;

    contentSections.forEach((section) => {
        if (section.textContent.toLowerCase().includes(query)) {
            found = true;
            section.scrollIntoView({
                behavior: "smooth", // Smooth scroll to the matching section
                block: "start",
            });
            section.style.backgroundColor = "#ffc107"; // Highlight the matching section
            setTimeout(() => {
                section.style.backgroundColor = ""; // Remove highlight after 2 seconds
            }, 2000);
        }
    });

    if (!found) {
        alert("No matching content found. Please try a different search term.");
    }
});

resetButton.addEventListener("click", function () {
    searchInput.value = ""; // Clear the search input
});

// form functionality
const form = document.getElementById("contactForm");
        const successMessage = document.getElementById("successMessage");

        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from refreshing the page

            // Display success message
            successMessage.style.display = "block";

            // Clear the form inputs
            form.reset();
        });