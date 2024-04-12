const sectionDescButton = document.querySelector('.section-desc-button');
const aside = document.querySelector('aside');
const asideOutButton = document.querySelector('.aside-out-button');
const sectionStartButton = document.querySelector('.section-start-button');

sectionDescButton.addEventListener('click', function() {
    aside.classList.add('show');
});

asideOutButton.addEventListener('click', function() {
    aside.classList.remove('show');
});

sectionStartButton.addEventListener('click', moveMiniGame);

function moveMiniGame (event) {
    location.href = '../password/password.html';
}
