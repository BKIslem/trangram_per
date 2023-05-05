const btnCarre = document.getElementById('btnOne');
const btnCat = document.getElementById('btnTwo');
const btnButterfly = document.getElementById('btnThree');
const btnGiraffe = document.getElementById('btnFour');
const btnAvion = document.getElementById('btnFive');
const btnBird = document.getElementById('btnSix');
const figures = document.querySelectorAll('.figure');


btnCarre.innerHTML = 'Carré';
btnCat.innerHTML= 'Chat';
btnButterfly.innerHTML= 'Pappillon';
btnGiraffe.innerHTML = 'Giraffe';
btnAvion.innerHTML = 'Avion';
btnBird.innerHTML = 'Oiseau';


btnCarre.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.remove('giraffe', 'cat','butterfly', 'bird','avion')
    })
})
btnCat.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('cat')
        elements.classList.remove('butterfly', 'bird', 'giraffe','avion')
    })
})
btnButterfly.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('butterfly')
        elements.classList.remove('giraffe', 'cat', 'bird','avion')
    })
})
btnGiraffe.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('giraffe')
        elements.classList.remove('cat','butterfly', 'bird','avion')
    })
})
btnAvion.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('avion')
        elements.classList.remove('giraffe', 'cat', 'butterfly','bird')
    })
})
btnBird.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('bird')
        elements.classList.remove('giraffe', 'cat', 'butterfly','avion')
    })
})

