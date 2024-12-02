document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "home.html"; 
    } else {
        document.getElementById("error-message").textContent = "Usuário ou senha incorretos!";
    }
});
