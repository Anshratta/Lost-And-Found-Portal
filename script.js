const form = document.getElementById("lostForm");

const container =
document.getElementById("lostItemsContainer");
container.innerHTML =
localStorage.getItem("reports") || "";

const lostCount =
document.querySelector(".card p");

let totalLost =
Number(localStorage.getItem("totalLost")) || 0;

lostCount.textContent = totalLost;

form.addEventListener("submit", function(event){

    event.preventDefault();

    const inputs =
    form.querySelectorAll("input");

    const itemName = inputs[0].value;
    const location = inputs[1].value;
    const date = inputs[2].value;
    const contact = inputs[3].value;

    const description =
    form.querySelector("textarea").value;

    const card =
    document.createElement("div");

    card.classList.add("item-card");

    card.innerHTML = `
        <h3>${itemName}</h3>
        <p><b>Location:</b> ${location}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p>${description}</p>
    `;

    container.appendChild(card);
    localStorage.setItem(
    "reports",
    container.innerHTML
);

   totalLost++;

lostCount.textContent = totalLost;

localStorage.setItem(
    "totalLost",
    totalLost
);

    form.reset();

});
const foundForm =
document.getElementById("foundForm");

const foundContainer =
document.getElementById("foundItemsContainer");

const foundCount =
document.getElementById("foundCount");

let totalFound =
Number(localStorage.getItem("totalFound")) || 0;

foundCount.textContent = totalFound;

foundContainer.innerHTML =
localStorage.getItem("foundReports") || "";

foundForm.addEventListener("submit", function(event){

    event.preventDefault();

    const inputs =
    foundForm.querySelectorAll("input");

    const itemName = inputs[0].value;
    const location = inputs[1].value;
    const date = inputs[2].value;
    const contact = inputs[3].value;

    const description =
    foundForm.querySelector("textarea").value;

    const card =
    document.createElement("div");

    card.classList.add("item-card");

    card.innerHTML = `
        <h3>${itemName}</h3>
        <p><b>Location:</b> ${location}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p>${description}</p>
    `;

    foundContainer.appendChild(card);

    totalFound++;

    foundCount.textContent =
    totalFound;

    localStorage.setItem(
        "totalFound",
        totalFound
    );

    localStorage.setItem(
        "foundReports",
        foundContainer.innerHTML
    );

    foundForm.reset();

});
const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

    const value =
    searchInput.value.toLowerCase();

    const cards =
    document.querySelectorAll(".item-card");

    cards.forEach(card => {

        if(
            card.textContent
            .toLowerCase()
            .includes(value)
        ){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});