document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        // Salvar estado de autenticação
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "../DashBoard/home.html";
    } else {
        document.getElementById("error-message").textContent = "Usuário ou senha incorretos!";
    }
});
