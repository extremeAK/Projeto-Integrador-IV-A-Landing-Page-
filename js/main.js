// Projeto Integrador — 12ª Semana Tecnológica UCPel
// Scripts para interatividade da página (menu mobile e carrossel)

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------
     Menu de navegação mobile
     -------------------------------------------------- */
  const botaoMenu = document.getElementById('mobile-menu-btn');
  const gavetaMenu = document.getElementById('mobile-nav-drawer');

  if (botaoMenu && gavetaMenu) {
    // Abre ou fecha a gaveta ao clicar no botão hambúrguer
    botaoMenu.addEventListener('click', () => {
      gavetaMenu.classList.toggle('active');
    });

    // Fecha o menu após o usuário clicar em qualquer link de seção
    const linksMenu = gavetaMenu.querySelectorAll('.nav-link');
    linksMenu.forEach((link) => {
      link.addEventListener('click', () => {
        gavetaMenu.classList.remove('active');
      });
    });
  }

  /* --------------------------------------------------
     Carrossel de fotos (Seção Sobre)
     -------------------------------------------------- */
  const slides = document.querySelectorAll('.carousel-slide');
  const indicadores = document.querySelectorAll('.carousel-dot');
  const botaoAnterior = document.getElementById('carousel-prev');
  const botaoProximo = document.getElementById('carousel-next');

  let slideAtual = 0;

  // Atualiza a exibição: esconde o slide anterior e mostra o novo
  function mostrarSlide(novoIndice) {
    // Se passar do último slide, volta para o primeiro
    if (novoIndice >= slides.length) {
      novoIndice = 0;
    }
    // Se for antes do primeiro, vai para o último
    if (novoIndice < 0) {
      novoIndice = slides.length - 1;
    }

    // Remove o destaque do slide e do indicador atuais
    slides[slideAtual].classList.remove('active');
    indicadores[slideAtual].classList.remove('active');

    // Atualiza a posição atual
    slideAtual = novoIndice;

    // Ativa o novo slide e seu respectivo indicador
    slides[slideAtual].classList.add('active');
    indicadores[slideAtual].classList.add('active');
  }

  // Navegação pelos botões de avançar e voltar
  if (botaoAnterior) {
    botaoAnterior.addEventListener('click', () => {
      mostrarSlide(slideAtual - 1);
    });
  }

  if (botaoProximo) {
    botaoProximo.addEventListener('click', () => {
      mostrarSlide(slideAtual + 1);
    });
  }

  // Permite clicar direto nas bolinhas para trocar de foto
  indicadores.forEach((ponto, indice) => {
    ponto.addEventListener('click', () => {
      mostrarSlide(indice);
    });
  });

});
