// --- LÓGICA PARA A TRANSIÇÃO DE SCROLL ---
        
const heroSection = document.getElementById('hero');

window.addEventListener('scroll', () => {
    // Só executa a animação se o modal não estiver aberto
    if (!document.body.classList.contains('modal-open')) {
        let scrollPosition = window.scrollY;
        let opacity = 1 - (scrollPosition / 500); 
        opacity = opacity < 0 ? 0 : opacity;
        heroSection.style.opacity = opacity;
    }
});


// --- LÓGICA PARA O MODAL DO FORMULÁRIO ---

document.addEventListener('DOMContentLoaded', () => {
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const closeModalButtons = document.querySelectorAll('.close-modal-btn');
    const modalOverlay = document.getElementById('casting-modal');

    // Função para abrir o modal
    const openModal = (modal) => {
        if (modal == null) return;
        modal.classList.add('active');
        document.body.classList.add('modal-open'); // Trava o scroll do fundo
    }

    // Função para fechar o modal
    const closeModal = (modal) => {
        if (modal == null) return;
        modal.classList.remove('active');
        document.body.classList.remove('modal-open'); // Libera o scroll do fundo
    }

    // Adiciona evento para todos os botões que abrem o modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    // Adiciona evento para todos os botões que fecham o modal
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-overlay');
            closeModal(modal);
        });
    });

    // Fecha o modal se clicar fora da área de conteúdo
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            // Se o clique foi no próprio overlay (fundo), fecha o modal
            if (e.target === modalOverlay) {
                closeModal(modalOverlay);
            }
        });
    }

    // Fecha o modal ao pressionar a tecla 'Escape'
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains('active')) {
            closeModal(modalOverlay);
        }
    });
});
