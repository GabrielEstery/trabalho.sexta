// Funções para carregar as diferentes seções da dashboard
function carregarPacientes() {
    // Carregue o conteúdo HTML da seção "Pacientes"
    // (pode ser feito via AJAX, fetch API ou outro método)
    const secaoPrincipal = document.querySelector('.secao-principal');
    secaoPrincipal.innerHTML = '<h1>Seção Pacientes</h1>'; // Exemplo de conteúdo
}

function carregarAgendas() {
    // Carregue o conteúdo HTML da seção "Agendas"
    const secaoPrincipal = document.querySelector('.secao-principal');
    secaoPrincipal.innerHTML = '<h1>Seção Agendas</h1>'; // Exemplo de conteúdo
}

function carregarConfiguracoes() {
    // Carregue o conteúdo HTML da seção "Configurações"
    const secaoPrincipal = document.querySelector('.secao-principal');
    secaoPrincipal.innerHTML = '<h1>Seção Configurações</h1>'; // Exemplo de conteúdo
}

// Adicione eventos de clique nos links da navegação
const linksMenu = document.querySelectorAll('nav ul li a');

linksMenu.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evite a ação padrão do link

        const secaoAlvo = link.getAttribute('href'); // Obtenha o alvo da seção

        switch (secaoAlvo) {
            case '#pacientes':
                carregarPacientes();
                break;
            case '#agendas':
                carregarAgendas();
                break;
            case '#configuracoes':
                carregarConfiguracoes();
                break;
            default:
                // Carregue outra seção caso necessário
                break;
        }
    });
});
