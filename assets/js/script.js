const navbar = document.querySelectorAll(".navcontent .nav-link");
const body = document.querySelector("nav");

navbar.forEach(a => {
    a.addEventListener("click", () => {
        resetLinks();
        a.classList.add("active");
    })
});

function resetLinks() {
    navbar.forEach(a => {
        a.classList.remove("active")
    })
}

function changeContent(selectedId) {
    document.querySelectorAll(".cardcontent").forEach(div => {
        div.classList.add("d-none");
    })
    const addDisplay = document.getElementById(selectedId);
    addDisplay.classList.remove("d-none");
}

if (body == document.querySelector(".profile")) {
    changeContent("github")
} else {
    changeContent("php")
}