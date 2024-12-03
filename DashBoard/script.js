document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profileIcon');
    const dropdown = document.getElementById('profileDropdown');

    // Mostra/Esconde o dropdown ao clicar no ícone
    profileIcon.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Evento de clique no botão de logout
    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        alert('Você saiu!');
        // Adicione lógica de logout aqui
    });

    // Esconde o dropdown se clicar fora
    document.addEventListener('click', (event) => {
        if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});
