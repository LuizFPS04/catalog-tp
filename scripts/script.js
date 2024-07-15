const arrCards = [
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2F49432.mp4?alt=media&token=7463c840-d445-4e45-8b72-4e3739f1caae",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2FKTAsueIBr4Pcgcn8.mp4?alt=media&token=1f03538a-f875-4ff7-8d6a-f678f10d166e",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    },
];

const cardContainer = document.querySelector(".content");

cardContainer.innerHTML =
`<div class="filter">
  <span class="material-symbols-outlined" onClick="iconsShow()">transition_dissolve</span>
  <span class="material-symbols-outlined" onClick="slideShow()">transition_slide</span>
</div>`;

function renderCards(isSlideShow = false) {

    cardContainer.innerHTML = 
    `<div class="filter">
        <span class="material-symbols-outlined" onClick="iconsShow()">transition_dissolve</span>
        <span class="material-symbols-outlined" onClick="slideShow()">transition_slide</span>
    </div>`;

    arrCards.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        if (isSlideShow) cardDiv.classList.add("mySlides");

        const img = document.createElement("video");
        const src = document.createElement("source");
        src.src = item.imageUrl;
        src.type = "video/mp4";
        img.controls = true;
        img.classList.add("image-card");
        img.appendChild(src);
        cardDiv.appendChild(img);

        const cardInfoDiv = document.createElement("div");
        cardInfoDiv.classList.add("card-info");

        const h2Title = document.createElement("h2");
        h2Title.textContent = item.title;
        cardInfoDiv.appendChild(h2Title);

        const h4Subtitle = document.createElement("h4");
        h4Subtitle.textContent = item.subtitle;
        cardInfoDiv.appendChild(h4Subtitle);

        const pText = document.createElement("p");
        pText.textContent = item.description;
        cardInfoDiv.appendChild(pText);
        cardDiv.appendChild(cardInfoDiv);

        if (isSlideShow) {
            const previousCard = document.createElement("a");
            previousCard.className = "previous";
            previousCard.innerHTML = "&#10094;";
            previousCard.onclick = () => plusSlides(-1);

            const nextCard = document.createElement("a");
            nextCard.className = "next";
            nextCard.innerHTML = "&#10095;";
            nextCard.onclick = () => plusSlides(1);

            cardDiv.appendChild(previousCard);
            cardDiv.appendChild(nextCard);
        }

        cardContainer.appendChild(cardDiv);
    });

    applyDarkMode();
}

function iconsShow() {
    renderCards();
}

let slideIndex = 1;

function slideShow() {
    renderCards(true);
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function applyDarkMode() {
    const chk = document.getElementById("chk");
    if (chk && chk.checked) {
        document.querySelector("header").classList.add("dark");
        document.body.classList.add("dark");
        document.querySelector(".content").classList.add("dark");
        document.querySelectorAll(".card").forEach((card) => {
            card.classList.add("dark");
        });
        document.querySelector(".footer").classList.add("dark");
    } else {
        document.querySelector("header").classList.remove("dark");
        document.body.classList.remove("dark");
        document.querySelector(".content").classList.remove("dark");
        document.querySelectorAll(".card").forEach((card) => {
            card.classList.remove("dark");
        });
        document.querySelector(".footer").classList.remove("dark");
    }
}

document.getElementById("chk").addEventListener("change", applyDarkMode);

renderCards();