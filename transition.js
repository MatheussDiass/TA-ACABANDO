
    // Função para rolar suavemente até a seção correspondente
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Adiciona eventos de clique nos links do menu
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            const targetSection = this.getAttribute('href'); // Obtém o ID da seção alvo
            scrollToSection(targetSection); // Chama a função de rolagem
        });
    });
    function fadeOut() {
        document.body.classList.add('fade-out'); // Adiciona a classe para desvanecer
    }
    