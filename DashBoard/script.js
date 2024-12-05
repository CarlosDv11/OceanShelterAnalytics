window.addEventListener("load", function() {
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (isAuthenticated !== "true") {
        window.location.href = "../home.html";
    }
});
