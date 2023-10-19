const skillsSection = document.getElementById('skills-section');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress () {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`
})
}

function hideProgress () {
    progressBars.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0;
    })
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
})

// Selecione todos os links âncora dentro da sua navegação
const navLinks = document.querySelectorAll('nav a');

// Adicione um ouvinte de evento de clique a cada link
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // Impede o comportamento padrão de seguir o link
    e.preventDefault();

    // Recupere o valor do atributo "href" do link
    const targetId = this.getAttribute('href').substring(1); // Remove o "#" do início

    // Role para o elemento com o ID correspondente
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth' // Para uma rolagem suave, se desejar
      });
    }
  });
});
