const collapsebutton = document.getElementById("collapse-button");
const navbaritems = document.querySelector(".navbar");

collapsebutton.addEventListener("click", (e) => {
    navbaritems.classList.toggle('hidden');
});

window.scrollTo({
    top:0,
    behavior: 'smooth'
});
