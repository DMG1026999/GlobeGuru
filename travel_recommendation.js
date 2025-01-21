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

// Recommendation functionality 
// Fetch and render data from the JSON file
document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the JSON file
    fetch('travel_recommendation.json') // Replace 'data.json' with the actual path to your JSON file
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            renderCountries(data.countries);
            renderTemples(data.temples);
            renderBeaches(data.beaches);
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
});

// Render countries and their cities
function renderCountries(countries) {
    const container = document.getElementById("countries");
    countries.forEach((country) => {
        const countrySection = document.createElement("div");
        countrySection.className = "country";

        const countryTitle = document.createElement("h2");
        countryTitle.textContent = country.name;
        countrySection.appendChild(countryTitle);

        country.cities.forEach((city) => {
            const cityCard = document.createElement("div");
            cityCard.className = "card";

            const cityImage = document.createElement("img");
            cityImage.src = city.imageUrl;
            cityImage.alt = city.name;

            const cityName = document.createElement("h3");
            cityName.textContent = city.name;

            const cityDescription = document.createElement("p");
            cityDescription.textContent = city.description;

            cityCard.appendChild(cityImage);
            cityCard.appendChild(cityName);
            cityCard.appendChild(cityDescription);
            countrySection.appendChild(cityCard);
        });

        container.appendChild(countrySection);
    });
}

// Render temples
function renderTemples(temples) {
    const container = document.getElementById("temples");
    temples.forEach((temple) => {
        const templeCard = document.createElement("div");
        templeCard.className = "card";

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.name;

        const templeName = document.createElement("h3");
        templeName.textContent = temple.name;

        const templeDescription = document.createElement("p");
        templeDescription.textContent = temple.description;

        templeCard.appendChild(templeImage);
        templeCard.appendChild(templeName);
        templeCard.appendChild(templeDescription);
        container.appendChild(templeCard);
    });
}

// Render beaches
function renderBeaches(beaches) {
    const container = document.getElementById("beaches");
    beaches.forEach((beach) => {
        const beachCard = document.createElement("div");
        beachCard.className = "card";

        const beachImage = document.createElement("img");
        beachImage.src = beach.imageUrl;
        beachImage.alt = beach.name;

        const beachName = document.createElement("h3");
        beachName.textContent = beach.name;

        const beachDescription = document.createElement("p");
        beachDescription.textContent = beach.description;

        beachCard.appendChild(beachImage);
        beachCard.appendChild(beachName);
        beachCard.appendChild(beachDescription);
        container.appendChild(beachCard);
    });
}
    
    // Call it like this:
    renderItems(data.temples, "temples");
    renderItems(data.beaches, "beaches");
    
        resetButton.addEventListener("click", function () {
        searchInput.value = ""; // Clear the search input
        document.querySelectorAll(".content").forEach((section) => {
        section.style.backgroundColor = ""; // Remove highlight
    });
});