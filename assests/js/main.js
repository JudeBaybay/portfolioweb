const navlinks = document.querySelectorAll('.nav__btn');

function activeLink() {
    navlinks.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlinks.forEach((a) => a.addEventListener('click', activeLink));