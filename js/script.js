// Função chamada pelo atributo 'onclick' do botão no HTML
function scrollToTop() {
    // Rola a janela de volta para o topo (posição y=0) de forma suave.
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// -----------------------------------------------------
// LÓGICA PARA MOSTRAR/ESCONDER O BOTÃO:

// Obtém o elemento do botão
const btnTopo = document.getElementById("btnTopo");

// Adiciona um "ouvinte de eventos" para quando a página rolar
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    // Se a rolagem for maior que 20px (para sair do topo), mostra o botão.
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnTopo.style.display = "block"; // Mostra o botão
    } else {
        btnTopo.style.display = "none";  // Esconde o botão
    }
}
// LÓGICA DO DARK MODE
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const localStorageKey = 'themePreference';

// 1. FUNÇÃO PARA APLICAR OU REMOVER O TEMA
function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = 'Modo Escuro';
    }
}

// 2. VERIFICA O TEMA SALVO AO CARREGAR A PÁGINA
const savedTheme = localStorage.getItem(localStorageKey);
if (savedTheme === 'dark') {
    applyTheme(true);
} else {
    applyTheme(false); // Aplica o tema claro como padrão ou o que estiver salvo
}

// 3. ADICIONA O EVENTO DE CLIQUE AO BOTÃO
toggleButton.addEventListener('click', () => {
    // Verifica se o modo escuro está ativo
    const isCurrentlyDark = body.classList.contains('dark-mode');
    
    if (isCurrentlyDark) {
        applyTheme(false);
        localStorage.setItem(localStorageKey, 'light');
    } else {
        applyTheme(true);
        localStorage.setItem(localStorageKey, 'dark');
    }
});