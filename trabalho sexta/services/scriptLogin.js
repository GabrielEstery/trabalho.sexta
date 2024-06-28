const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Validação de login (substitua com sua lógica de autenticação)
    if (email === 'usuario@exemplo.com' && senha === '123456') {
        window.location.href = 'pagina-inicial.html';
        // Redirecionar para página principal ou realizar outra ação
    } else {
        alert('Email e/ou senha inválidos.');
    }
});
