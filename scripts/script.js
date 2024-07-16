const arrCards = [
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2F49432.mp4?alt=media&token=7463c840-d445-4e45-8b72-4e3739f1caae",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2FVID-20191105-WA0185.mp4?alt=media&token=f553b732-5804-42be-8102-55fa6e9dfd17",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fanime_1709043377457.mp4?alt=media&token=b4b05ace-e0f5-4ba8-9114-c01e86801a66",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fhmmm.mp4?alt=media&token=d02c9ae9-719c-44e3-a822-b53577b221b1",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Flansava.mp4?alt=media&token=741a2d84-d07f-46eb-8f40-381669aafd1d",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    },
    {
        imageUrl: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fsou-bom_TwHcGYTY.mp4?alt=media&token=c94528ea-9450-463d-a936-e35708f4c048",
        title: "Et aliquam voluptas non quos laudantium et culpa voluptate.",
        subtitle: "Sed dolor repudiandae non blanditiis aliquid.",
        description:
            "Lorem ipsum dolor sit amet. Id dolor deleniti et deleniti autem id animi natus. Est atque nobis aut vero libero At molestiae laborum et consequatur doloremque.",
    }
];

const cardContainer = document.querySelector(".content");

cardContainer.innerHTML = '';

let currentVideo = null;

function renderCards(isSlideShow = false) {
    cardContainer.innerHTML = '';

    arrCards.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        if (isSlideShow) cardDiv.classList.add("mySlides");

        const video = document.createElement("video");
        const source = document.createElement("source");
        source.src = item.imageUrl;
        source.type = "video/mp4";
        video.controls = true;
        video.classList.add("image-card");
        video.appendChild(source);
        cardDiv.appendChild(video);

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

        video.addEventListener("click", () => {
            if (currentVideo && currentVideo !== video) {
                currentVideo.pause();
            }
            currentVideo = video;
        });

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
    if (currentVideo) {
        currentVideo.pause();
    }
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
        document.querySelector(".filter").classList.add("dark");
        document.querySelectorAll(".icon").forEach((icon) => {
            icon.classList.add("dark");
        });
        document.querySelector(".content").classList.add("dark");
        document.querySelectorAll(".card").forEach((card) => {
            card.classList.add("dark");
        });
        document.querySelector(".footer").classList.add("dark");
    } else {
        document.querySelector("header").classList.remove("dark");
        document.body.classList.remove("dark");
        document.querySelector(".filter").classList.remove("dark");
        document.querySelectorAll(".icon").forEach((icon) => {
            icon.classList.remove("dark");
        });
        document.querySelector(".content").classList.remove("dark");
        document.querySelectorAll(".card").forEach((card) => {
            card.classList.remove("dark");
        });
        document.querySelector(".footer").classList.remove("dark");
    }
}

document.getElementById("chk").addEventListener("change", applyDarkMode);

renderCards();