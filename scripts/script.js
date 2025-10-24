document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('leadForm');

  // Inicializa o modal de agradecimento do Bootstrap
  const thankYouModalElement = document.getElementById('thankYouModal');
  // Cria uma instância do Modal usando a classe nativa do Bootstrap
  const thankYouModal = new bootstrap.Modal(thankYouModalElement);

  if (form) {
    // Listener para o evento de SUBMIT do formulário
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Evita o recarregamento da página

      const emailInput = document.getElementById('emailInput');
      const ctaButton = form.querySelector('.cta-button');
      const textoPadraoBotao = ctaButton.textContent;

      // Simula o estado de processamento
      ctaButton.textContent = 'Enviando...';
      ctaButton.disabled = true;

      // Simulando o envio com um pequeno delay
      setTimeout(() => {
        // Restaura o botão ao estado original
        ctaButton.textContent = textoPadraoBotao;
        ctaButton.disabled = false;

        // Limpa o campo do e-mail
        emailInput.value = '';

        thankYouModal.show();

      }, 1000);
    });
  }
});
