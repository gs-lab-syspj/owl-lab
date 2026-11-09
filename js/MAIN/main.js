document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.dataset.link;
        if (link) {
            window.location.href = link;
        }
    });
});
function goExit() {

    document.body.classList.add("fade-out");

    setTimeout(() => {
        //–{”ÔŠÂ‹«
        window.location.href = "../index.html";
    }, 500);
}