document.addEventListener('DOMContentLoaded', () => {
    const prevButtons = document.querySelectorAll('#modal-prevBtn');
    const nextButtons = document.querySelectorAll('#modal-nextBtn');

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalSlides = button.closest('.modalSlider').querySelector('.modalSlides');
            const slides = modalSlides.querySelectorAll('.modalSlide');
            const totalSlides = slides.length;
            let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

            slides[activeIndex].classList.remove('active');
            activeIndex = (activeIndex - 1 + totalSlides) % totalSlides; // Volta ao final caso esteja no início
            slides[activeIndex].classList.add('active');
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalSlides = button.closest('.modalSlider').querySelector('.modalSlides');
            const slides = modalSlides.querySelectorAll('.modalSlide');
            const totalSlides = slides.length;
            let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

            slides[activeIndex].classList.remove('active');
            activeIndex = (activeIndex + 1) % totalSlides; // Volta ao início caso esteja no final
            slides[activeIndex].classList.add('active');
        });
    });
});
