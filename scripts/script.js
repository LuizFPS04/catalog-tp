const CARDS = [
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fbikes.mp4?alt=media&token=5ea6323f-abad-4857-9f51-8efb17ad96eb",
        title: "Bicicleta Matrata a Ball",
        description: "Bicicleta efetuada por Xurrax (Luizin) na equipe do Matrata a Ball - TEMP. 22/23",
        category: "FIFA"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fkbs.mp4?alt=media&token=a4f6d2c5-6a88-46a6-8bde-eeeb11546c0e",
        title: "Cabeçada",
        description: "Cabeceio efetuado por Pirlão (Luan) jogando pelo Matrata a Ball - TEMP. 22/23",
        category: "FIFA"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fpedrin%20gol%20livre.mp4?alt=media&token=2c89c7e9-9a5d-4e15-bd7a-301730c35a81",
        title: "Bagre PT1",
        description: "Apenas um bagre - Matrata a Ball - TEMP. 22/23",
        category: "FIFA"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2FxutaFofo.mp4?alt=media&token=54dbd12f-21db-45ea-bc4f-e07418bc98a7",
        title: "Bagre PT2",
        description: "Novamente um bagre - Matrata a Ball - TEMP. 22/23",
        category: "FIFA"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Ftop1%20gol%20matrata%20a%20ball.mp4?alt=media&token=098ee6a6-37ec-46dc-a9a7-48cccdefcf76",
        title: "Golaço",
        description: "De acordo com o autor do gol, esse foi o mais bonito da temporada - Matrata a Ball - TEMP. 22/23",
        category: "FIFA"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fvoleio%20omniMan.mp4?alt=media&token=20175f12-fc98-4c68-bc67-5bb26d7ac373",
        title: "Voador",
        description: "OmniMan (Luan) a voar - Matrata a Ball - TEMP. 23/24",
        category: "FIFA"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2FAce%20Judge%20Skye.mp4?alt=media&token=4b354df1-51f0-4da4-9463-1dd3599292b8",
        title: "ACE",
        description: "Ace Judge da Skye aí - Vava",
        category: "Valorant"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fclutch%201x4%20omen.mp4?alt=media&token=fa17a4be-6373-4178-839c-4ce73b8138f4",
        title: "Clutch do Omen",
        description: "Clutch 1x4 - Vava",
        category: "Valorant"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fviper%201x3%20icebox.mp4?alt=media&token=d11e1f6b-6d3e-492a-b366-a4b95ec033a5",
        title: "Víper",
        description: "Víper 1x3 - Vava",
        category: "Valorant"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/ifmg-2bfd6.appspot.com/o/Web%20I%2Fyoru%20clutch%20v2%20bind.mp4?alt=media&token=7ce4f452-fdf0-4a14-b840-733b5220e739",
        title: "Clutch in the final",
        description: "Clutch da fera - Vava",
        category: "Valorant"
    }
];

const cardContainer = document.querySelector(".content");

let currentVideo = null;
let isSlideShow = false;

function renderCards(cards = CARDS) {
    cardContainer.innerHTML = '';
    cards.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        if (isSlideShow) cardDiv.classList.add("mySlides");

        const video = document.createElement("video");
        const source = document.createElement("source");
        source.src = item.url;
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
    isSlideShow = false;
    renderCards();
}

function slideShow(cards = CARDS) {
    console.log(cards)
    isSlideShow = true;
    renderCards(cards);
    showSlides(slideIndex);
}

document.querySelectorAll('header img').forEach(img => {
    img.addEventListener('click', (e) => {
        const category = e.target.getAttribute('data-category');
        filterByCategory(category);
    });
});

function changeImage() {
    let image = document.querySelectorAll("img");
    const chk = document.getElementById("chk");

    if (chk && chk.checked) {
        image.forEach((img) => {
            let imageSrc = img.src;
            img.src = imageSrc.includes("-white.png") ? imageSrc : imageSrc.replace(".png", "-white.png");
        })
    } else {
        image.forEach((img) => {
            let imageSrc = img.src;
            img.src = imageSrc.replace("-white.png", ".png");
        })
    }
}

function filterByCategory(category) {
    console.log(category)
    const filteredCards = category === "All" ? CARDS : CARDS.filter(card => card.category === category);
    if (isSlideShow) {
        slideShow(filteredCards);
    } else {
        renderCards(filteredCards);
    }
}

let slideIndex = 1;
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
        changeImage();
        document.querySelector("header").classList.add("dark");
        document.body.classList.add("dark");
        document.querySelector(".view-mode").classList.add("dark");
        document.querySelectorAll(".icon").forEach((icon) => {
            icon.classList.add("dark");
        });
        document.querySelector(".content").classList.add("dark");
        document.querySelectorAll(".card").forEach((card) => {
            card.classList.add("dark");
        });
        document.querySelector(".footer").classList.add("dark");
    } else {
        changeImage();
        document.querySelector("header").classList.remove("dark");
        document.body.classList.remove("dark");
        document.querySelector(".view-mode").classList.remove("dark");
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