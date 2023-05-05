const btnGiraffe = document.getElementById('btnFour');
const btnCarre = document.getElementById('btnOne');
const btnVautour = document.getElementById('btnFive');
const btnCat = document.getElementById('btnTwo');
const btnButterfly = document.getElementById('btnThree');
const btnBird = document.getElementById('btnSix');
const figures = document.querySelectorAll('.figure');


btnCarre.innerHTML = 'Carré';
btnGiraffe.innerHTML = 'Giraffe';
btnVautour.innerHTML = 'Vautour';
btnCat.innerHTML= 'cat';
btnButterfly.innerHTML= 'butterfly';
btnBird.innerHTML = 'bird';

btnCarre.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.remove('giraffe','vautour', 'cat','butterfly','bird')
        elements.classList.add('Carré')
    })
})

btnGiraffe.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('giraffe')
        elements.classList.remove('vautour','Carré', 'cat','butterfly', 'bird')
    })
})
btnVautour.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('vautour')
        elements.classList.remove('giraffe','Carré', 'cat','butterfly', 'bird')
    
    })
})
btnCat.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('cat')
        elements.classList.remove('vautour','Carré','vautour','butterfly', 'bird')
    })
})
btnButterfly.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('butterfly')
        elements.classList.remove('vautour','giraffe','Carré', 'cat', 'bird')
    })
})

btnBird.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('bird')
        elements.classList.remove('vautour','giraffe','Carré', 'cat', 'butterfly')
    })
})
