// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-mensagem');

    // Executa a função ao clicar no botão
    botao.addEventListener('click', () => {
        alert('O futebol feminino não é apenas um esporte, é uma história de coragem e protagonismo!');
    });
});