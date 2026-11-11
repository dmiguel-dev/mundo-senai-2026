const btnAbrir = document.getElementById('btn-abrir-dialog');
const btnFechar = document.getElementById('btn-fechar-dialog');
const dialogMundoSenai = document.getElementById('dialog-mundo-senai');

// Abre o dialog em modo modal sobreposto
btnAbrir.addEventListener('click', () => {
  dialogMundoSenai.showModal();
});

// Fecha o dialog ao clicar em "Entendido"
btnFechar.addEventListener('click', () => {
  dialogMundoSenai.close();
});

// Fecha o dialog se o usuário clicar no fundo escuro fora do caixa
dialogMundoSenai.addEventListener('click', (event) => {
  const rect = dialogMundoSenai.getBoundingClientRect();
  const estaFora = (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  );
  if (estaFora) {
    dialogMundoSenai.close();
  }
});