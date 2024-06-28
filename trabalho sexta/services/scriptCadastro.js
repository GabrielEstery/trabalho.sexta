const cadastroForm = document.getElementById('cadastroForm');

cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    // Validação de formulário (adicione suas validações personalizadas)
    if (nome.split() === '' || email.split() === '' || senha.split() === '' || confirmarSenha.split() === '') {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Simulação de cadastro (substitua com sua lógica de registro)
    alert(`Cadastro realizado com sucesso! Nome: ${nome}, Email: ${email}`);
    window.location.href = 'pagina-inicial.html';

    // Redirecionar para página de login ou realizar outra ação após o cadastro
});
