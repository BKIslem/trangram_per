const btnGiraffe = document.getElementById('btnFour');
const btnCarre = document.getElementById('btnOne');
const btnVautour = document.getElementById('btnFive');
const btnCat = document.getElementById('btnTwo');
const btnButterfly = document.getElementById('btnThree');
const btnBird = document.getElementById('btnSix');
const btnAvion = document.getElementById('btnSeven')
const figures = document.querySelectorAll('.figure');


btnCarre.innerHTML = 'Carré';
btnGiraffe.innerHTML = 'Giraffe';
btnVautour.innerHTML = 'Vautour';
btnCat.innerHTML= 'cat';
btnButterfly.innerHTML= 'butterfly';
btnBird.innerHTML = 'bird';
btnAvion.innerHTML = 'Avion';

btnCarre.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.remove('giraffe','vautour', 'cat','butterfly', 'bird','avion')
    })
})

btnGiraffe.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('giraffe')
        elements.classList.remove('vautour', 'cat','butterfly', 'bird','avion')
    })
})
btnVautour.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('vautour')
        elements.classList.remove('giraffe', 'cat','butterfly', 'bird','avion')
    
    })
})
btnCat.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('cat')
        elements.classList.remove('vautour','butterfly', 'bird', 'giraffe','avion')
    })
})
btnButterfly.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('butterfly')
        elements.classList.remove('vautour','giraffe', 'cat', 'bird','avion')
    })
})

btnBird.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('bird')
        elements.classList.remove('vautour','giraffe', 'cat', 'butterfly','avion')
    })
})

btnAvion.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('avion')
        elements.classList.remove('vautour','giraffe', 'cat', 'butterfly','bird')
    })
})