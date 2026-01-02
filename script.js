const nav = document.querySelector('.nav');
const sidebar = document.querySelector('.sidebar');

window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scorllY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    
    }
}

function showSidebar() {
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    sidebar.style.display = 'none';

}