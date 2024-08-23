element.addEventListener("wheel", function (event) {
    if ((event.deltaY === 100) || (event.deltaY === -100)) {
        event.preventDefault();
        element.scrollBy({
            top: event.deltaY,
            behavior: "smooth",
        });
    }
});