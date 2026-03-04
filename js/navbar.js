document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    const currentPage = window.location.pathname.split("/").pop();

    // Fix for homepage
    if (currentPage === "") {
        currentPage = "index.html";
    }
    
    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if(linkPage === currentPage){
            link.classList.add("active");
        }
    });
});