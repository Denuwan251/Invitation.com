function filterDesigns(category) {

    const cards =
        document.querySelectorAll(".design-card");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}