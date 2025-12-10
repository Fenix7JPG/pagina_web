const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.menu_categories a');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 190; // Altura de menú fijo

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.menu_categories a[href="#${id}"]`);

        if(scrollPos >= top && scrollPos < top + height){
            links.forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        }
    });
});
