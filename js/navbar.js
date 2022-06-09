const collapsebutton = document.getElementById("collapse-button");
const navbaritems = document.querySelector(".navbar");

collapsebutton.addEventListener("click", (e) => {
    navbaritems.classList.toggle('hidden');
});