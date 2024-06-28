// Array global de pacientes
let pacientes = [
        { id: 1, nome: "Kiko Silva", email: "kiko@exemplo.com", telefone: "(55) 9999-9999" },
        { id: 2, nome: "Maria Gomes", email: "mariagomes@exemplo.com", telefone: "(55) 8888-8888" },
        { id: 3, nome: "Pedro Oliveira", email: "pedrooliveira@exemplo.com", telefone: "(55) 7777-7777" }
    ];
    
    // Função para buscar e exibir a lista de pacientes
    function buscarPacientes() {
        const tabelaPacientes = document.querySelector('.tabela-pacientes tbody');
        tabelaPacientes.innerHTML = ''; // Limpar linhas anteriores
    
        pacientes.forEach(paciente => {
            const linha = tabelaPacientes.insertRow();
    
            const celulaNome = linha.insertCell();
            celulaNome.textContent = paciente.nome;
    
            const celulaEmail = linha.insertCell();
            celulaEmail.textContent = paciente.email;
    
            const celulaTelefone = linha.insertCell();
            celulaTelefone.textContent = paciente.telefone;
    
            const celulaAcoes = linha.insertCell();
            celulaAcoes.classList.add('acoes');
    
            const linkDetalhes = document.createElement('a');
            linkDetalhes.textContent = "Detalhes";
            linkDetalhes.setAttribute('href', `paciente.html?id=${paciente.id}`); // Altere o link para sua página de detalhes
            celulaAcoes.appendChild(linkDetalhes);
    
            // Adicione outros links de ação (editar, excluir, etc.) se necessário
        });
    }
    
    // Função para exibir o modal de novo cadastro
    function abrirModalCadastro() {
        const modalCadastro = document.getElementById('modalCadastro');
        modalCadastro.style.display = 'block';
    }
    
    // Função para fechar o modal de cadastro
    function fecharModalCadastro() {
        const modalCadastro = document.getElementById('modalCadastro');
        modalCadastro.style.display = 'none';
    }
    
    // Função para salvar novo paciente
    function salvarNovoPaciente(event) {
        event.preventDefault(); // Prevenir o envio do formulário
    
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
    
        const novoPaciente = {
            id: Date.now(), // Simular um ID único
            nome,
            email,
            telefone
        };
    
        // Adicionar o novo paciente ao array global de pacientes
        pacientes.push(novoPaciente);
    
        fecharModalCadastro();
        buscarPacientes(); // Atualizar a lista de pacientes
    }
    
    // Adicionar eventos aos botões e ao formulário
    window.onload = () => {
        document.getElementById('btnNovoPaciente').addEventListener('click', abrirModalCadastro);
        document.querySelector('.modal .fechar').addEventListener('click', fecharModalCadastro);
        document.getElementById('formCadastro').addEventListener('submit', salvarNovoPaciente);
    
        buscarPacientes();
    };
    