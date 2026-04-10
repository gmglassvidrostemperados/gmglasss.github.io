function inicio(){
    var click = window.document.getElementById('inicio')
    window.location.href = '#hero'
}
function sobre() {
    var click = window.document.getElementById('sobre')
    window.location.href = '#sobre'
}
function services() {
    var click = window.document.getElementById('services')
    window.location.href = '#services'
}
function fotos(){
    window.document.getElementById('fotos')
    window.location.href = '#fotos'
}
function localiza() {
    var click = window.document.getElementById('location')
    window.location.href = '#local'
}
function contato(){
    var click = window.document.getElementById('contato')
    window.location.href = '#contato'
}
function wpp1() {
    var click = window.document.querySelectorAll('wpp1')
    window.open("https://wa.me/5531997220068?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function wpp2(){
    var click = window.document.querySelectorAll('wpp2')
    window.open("https://wa.me/5531998349995?text=Ola,%20quero%20fazer%20um%20orçamento%20sobre um projeto...")
}
function insta() {
    var click = window.document.querySelectorAll('insta')
    window.open("https://www.instagram.com/gmglassvidros/")
}
function email() {
    var click = window.document.querySelectorAll('email')
    window.location.href = 'mailto:gmglassvidrostemperados@gmail.com';
}


function toggleMenu() {
    const menu = document.querySelector('.menuFilho');
    menu.classList.toggle('active');
}
function dev() {
    var click = window.document.querySelectorAll('dev')
    window.open("https://clintindossites.vercel.app")
}

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const menuPai = document.querySelector('.menuPai');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        menuPai.style.top = "-100px";
    } else {
        // Scrolling up
        menuPai.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('click', function(event) {
    const menu = document.querySelector('.menuFilho');
    const menuHamburguer = document.querySelector('.menuHamburguer');
    if (!menu.contains(event.target) && !menuHamburguer.contains(event.target)) {
        menu.classList.remove('active');
    }
});

  // Função para fechar o menu quando a página é rolada
  function closeMenuOnScroll() {
    var menu = document.querySelectorAll('menuFilho');

    // Verifica se o menu está aberto
    if (menu.classList.contains('active')) {
        // Fecha o menu
        menu.classList.remove('active');
    }
}

// Adiciona um event listener para escutar por rolagens na página
window.addEventListener('scroll', closeMenuOnScroll);



document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('#slides');
    const slideArray = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideArray.length - 1;
        }
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', function () {
        if (currentIndex < slideArray.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    });

    // Mostrar a primeira imagem inicialmente
    showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", function() {
    const openModalButtons = document.querySelectorAll(".openModal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openModalButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modalId = button.getAttribute("data-modal-id");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const modal = button.closest(".modal");
            modal.style.display = "none";
        });
    });

    window.addEventListener("click", function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const openModalButtons = document.querySelectorAll('.openModal');
    const closeModalButtons = document.querySelectorAll('.close');
    const prevButtons = document.querySelectorAll('#modal-prevBtn');
    const nextButtons = document.querySelectorAll('#modal-nextBtn');
    
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-id');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalSlides = button.closest('.modal').querySelector('.modalSlides');
            const slides = modalSlides.querySelectorAll('.modalSlide');
            const totalSlides = slides.length;
            let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

            slides[activeIndex].classList.remove('active');
            activeIndex = (activeIndex - 1 + totalSlides) % totalSlides;
            slides[activeIndex].classList.add('active');
            modalSlides.style.transform = `translateX(-${activeIndex * 100}%)`;
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalSlides = button.closest('.modal').querySelector('.modalSlides');
            const slides = modalSlides.querySelectorAll('.modalSlide');
            const totalSlides = slides.length;
            let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

            slides[activeIndex].classList.remove('active');
            activeIndex = (activeIndex + 1) % totalSlides;
            slides[activeIndex].classList.add('active');
            modalSlides.style.transform = `translateX(-${activeIndex * 100}%)`;
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var slides = document.querySelectorAll('.coments li');
    var currentSlide = 0;
    
    function nextSlide() {
      slides[currentSlide].style.display = 'none'; // Oculta o slide atual
      currentSlide = (currentSlide + 1) % slides.length; // Atualiza o índice do próximo slide
      slides[currentSlide].style.display = 'block'; // Exibe o próximo slide
    }
    
    setInterval(nextSlide, 5000); // Altere o intervalo de troca de slide conforme necessário
  });
  document.addEventListener('DOMContentLoaded', function() {
    const avaliacoes = [
        {
            nome: "João Silva",
            estrelas: 5,
            comentario: "Atendimento impecável e produtos de altíssima qualidade! Minhas esquadrias ficaram perfeitas e a instalação foi super rápida. Recomendo muito a GM GLASS!",
            data: "20 de Julho de 2024"
        },
        {
            nome: "Maria Oliveira",
            estrelas: 4.5,
            comentario: "Fiquei muito satisfeita com o guarda-corpo de vidro. A equipe é muito profissional e entregou dentro do prazo. Excelente trabalho!",
            data: "15 de Julho de 2024"
        },
        {
            nome: "Carlos Mendes",
            estrelas: 5,
            comentario: "Preço justo e qualidade superior. Minha casa ganhou outra vida com as novas portas de correr de alumínio. Parabéns à GM GLASS!",
            data: "08 de Julho de 2024"
        },
        {
            nome: "Ana Rodrigues",
            estrelas: 5,
            comentario: "As janelas de blindex ficaram incríveis! Profissionais atenciosos e um serviço de primeira. Super indico a GM GLASS para todos os projetos.",
            data: "01 de Julho de 2024"
        },
        {
            nome: "Fernando Lima",
            estrelas: 4,
            comentario: "Bom atendimento e boas opções de esquadrias. A instalação foi um pouco demorada, mas o resultado final valeu a pena. Satisfeito.",
            data: "25 de Junho de 2024"
        }
    ];

    const avaliacoesCarousel = document.querySelector('.avaliacoes-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Função para gerar as estrelas HTML
    function gerarEstrelas(numEstrelas) {
        let estrelasHtml = '';
        const estrelasCheias = Math.floor(numEstrelas);
        const temMeiaEstrela = numEstrelas % 1 !== 0;

        for (let i = 0; i < estrelasCheias; i++) {
            estrelasHtml += '<i class="fas fa-star"></i>';
        }
        if (temMeiaEstrela) {
            estrelasHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        // Adicionar estrelas vazias se quiser um total de 5
        // for (let i = 0; i < (5 - Math.ceil(numEstrelas)); i++) {
        //     estrelasHtml += '<i class="far fa-star"></i>';
        // }
        return estrelasHtml;
    }

    // Função para renderizar as avaliações
    function renderizarAvaliacoes() {
        avaliacoesCarousel.innerHTML = ''; // Limpa o carrossel
        avaliacoes.forEach((avaliacao, index) => {
            const avaliacaoItem = document.createElement('div');
            avaliacaoItem.classList.add('avaliacao-item');
            avaliacaoItem.setAttribute('data-index', index); // Adiciona um índice para referência

            avaliacaoItem.innerHTML = `
                <div class="avaliacao-header">
                    <span class="nome-cliente">${avaliacao.nome}</span>
                    <div class="estrelas">${gerarEstrelas(avaliacao.estrelas)}</div>
                </div>
                <p class="comentario">"${avaliacao.comentario}"</p>
                <span class="data-avaliacao">${avaliacao.data}</span>
            `;
            avaliacoesCarousel.appendChild(avaliacaoItem);
        });

        // Atualiza a posição do carrossel para o item atual
        atualizarCarrossel();
    }

    // Função para atualizar a posição do carrossel
    function atualizarCarrossel() {
        const itemWidth = avaliacoesCarousel.querySelector('.avaliacao-item').offsetWidth;
        avaliacoesCarousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Navegação do Carrossel
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : avaliacoes.length - 1;
        atualizarCarrossel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < avaliacoes.length - 1) ? currentIndex + 1 : 0;
        atualizarCarrossel();
    });

    // Inicializa o carrossel
    renderizarAvaliacoes();

    // Opcional: Auto-play do carrossel
    // setInterval(() => {
    //     nextBtn.click();
    // }, 5000); // Muda a cada 5 segundos
});

document.addEventListener('DOMContentLoaded', function() {
    const avaliacoesData = [
        {
            nome: "João Silva",
            estrelas: 5,
            comentario: "Atendimento impecável e produtos de altíssima qualidade! Minhas esquadrias ficaram perfeitas e a instalação foi super rápida. Recomendo muito a GM GLASS!",
            data: "20 de Julho de 2024"
        },
        {
            nome: "Maria Oliveira",
            estrelas: 4.5,
            comentario: "Fiquei muito satisfeita com o guarda-corpo de vidro. A equipe é muito profissional e entregou dentro do prazo. Excelente trabalho!",
            data: "15 de Julho de 2024"
        },
        {
            nome: "Carlos Mendes",
            estrelas: 5,
            comentario: "Preço justo e qualidade superior. Minha casa ganhou outra vida com as novas portas de correr de alumínio. Parabéns à GM GLASS!",
            data: "08 de Julho de 2024"
        },
        {
            nome: "Ana Rodrigues",
            estrelas: 5,
            comentario: "As janelas de blindex ficaram incríveis! Profissionais atenciosos e um serviço de primeira. Super indico a GM GLASS para todos os projetos.",
            data: "01 de Julho de 2024"
        },
        {
            nome: "Fernando Lima",
            estrelas: 4,
            comentario: "Bom atendimento e boas opções de esquadrias. A instalação foi um pouco demorada, mas o resultado final valeu a pena. Satisfeito.",
            data: "25 de Junho de 2024"
        },
        {
            nome: "Beatriz Costa",
            estrelas: 5,
            comentario: "Vidros e espelhos de ótima qualidade. Atenderam todas as minhas expectativas para o meu novo banheiro. GM GLASS é a melhor!",
            data: "18 de Junho de 2024"
        },
        {
            nome: "Ricardo Alves",
            estrelas: 4.5,
            comentario: "Precisava de uma solução rápida para uma porta de alumínio e eles foram super eficientes. O custo-benefício é excelente.",
            data: "10 de Junho de 2024"
        }
        // Adicione mais avaliações aqui para testar o carrossel!
    ];

    const avaliacoesCarousel = document.querySelector('.avaliacoes-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let itemsPerView = 3; // Padrão: 3 itens visíveis

    // Função para gerar as estrelas HTML
    function gerarEstrelas(numEstrelas) {
        let estrelasHtml = '';
        const estrelasCheias = Math.floor(numEstrelas);
        const temMeiaEstrela = numEstrelas % 1 !== 0;

        for (let i = 0; i < estrelasCheias; i++) {
            estrelasHtml += '<i class="fas fa-star"></i>';
        }
        if (temMeiaEstrela) {
            estrelasHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        return estrelasHtml;
    }

    // Função para renderizar as avaliações no carrossel
    function renderizarAvaliacoes() {
        avaliacoesCarousel.innerHTML = '';
        avaliacoesData.forEach(avaliacao => {
            const avaliacaoItem = document.createElement('div');
            avaliacaoItem.classList.add('avaliacao-item');
            avaliacaoItem.innerHTML = `
                <div class="avaliacao-header">
                    <span class="nome-cliente">${avaliacao.nome}</span>
                    <div class="estrelas">${gerarEstrelas(avaliacao.estrelas)}</div>
                </div>
                <p class="comentario">"${avaliacao.comentario}"</p>
                <span class="data-avaliacao">${avaliacao.data}</span>
            `;
            avaliacoesCarousel.appendChild(avaliacaoItem);
        });
        updateItemsPerView(); // Recalcula itens por vista ao renderizar
        atualizarCarrossel();
    }

    // Função para recalcular quantos itens devem ser visíveis com base na largura da tela
    function updateItemsPerView() {
        const width = window.innerWidth;
        if (width <= 768) {
            itemsPerView = 1; // 1 item em celulares
        } else if (width <= 1024) {
            itemsPerView = 2; // 2 itens em tablets
        } else {
            itemsPerView = 3; // 3 itens em desktops
        }
    }

    // Função para atualizar a posição do carrossel
    function atualizarCarrossel() {
        // Pega a largura do primeiro item para calcular o deslocamento
        const itemWidth = avaliacoesCarousel.children[0] ? avaliacoesCarousel.children[0].offsetWidth : 0;
        const gap = 20; // O mesmo gap definido no CSS
        const totalMove = currentIndex * (itemWidth + gap);
        avaliacoesCarousel.style.transform = `translateX(-${totalMove}px)`;

        // Esconde/mostra botões de navegação se chegar ao fim
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = (currentIndex + itemsPerView >= avaliacoesData.length) ? 'none' : 'block';
    }

    // Navegação do Carrossel (ajustado para avançar por itensPerView)
    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(0, currentIndex - itemsPerView);
        atualizarCarrossel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(avaliacoesData.length - itemsPerView, currentIndex + itemsPerView);
        atualizarCarrossel();
    });

    // Inicializa o carrossel
    renderizarAvaliacoes();

    // Atualiza o carrossel ao redimensionar a janela
    window.addEventListener('resize', () => {
        updateItemsPerView();
        atualizarCarrossel();
    });

    // Opcional: Auto-play do carrossel (descomente para ativar)
    // let autoPlayInterval = setInterval(() => {
    //     if (currentIndex + itemsPerView < avaliacoesData.length) {
    //         currentIndex += itemsPerView;
    //     } else {
    //         currentIndex = 0; // Volta ao início
    //     }
    //     atualizarCarrossel();
    // }, 5000); // Muda a cada 5 segundos

    // Opcional: Pausar autoplay no hover
    // avaliacoesCarousel.parentNode.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    // avaliacoesCarousel.parentNode.addEventListener('mouseleave', () => {
    //     autoPlayInterval = setInterval(() => {
    //         if (currentIndex + itemsPerView < avaliacoesData.length) {
    //             currentIndex += itemsPerView;
    //         } else {
    //             currentIndex = 0;
    //         }
    //         atualizarCarrossel();
    //     }, 5000);
    // });
});




