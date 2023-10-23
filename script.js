document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here
    var container = document.querySelector(".gallery");

    for (var i = 1; i <= 24; i++) {
        var aTag = document.createElement("a");
        aTag.href = `images/image-${i}.jpg`;
        aTag.setAttribute("data-lightbox", "models");
        aTag.setAttribute("data-title", `Caption${i}`);

        var imgTag = document.createElement("img");
        imgTag.src = `images/image-${i}.jpg`;
        imgTag.alt = `Image ${i}`;

        aTag.appendChild(imgTag);
        container.appendChild(aTag);
    }
});
