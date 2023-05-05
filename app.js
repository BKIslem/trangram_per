const btnGiraffe = document.getElementById('btnFour');
const btnCarre = document.getElementById('btnOne');
const btnVautour = document.getElementById('btnFive');
const btnCat = document.getElementById('btnTwo');
const btnButterfly = document.getElementById('btnThree');
const figures = document.querySelectorAll('.figure');


btnCarre.innerHTML = 'Carré';
btnGiraffe.innerHTML = 'Giraffe';
btnVautour.innerHTML = 'Vautour';
btnCat.innerHTML= 'cat';
btnButterfly.innerHTML= 'butterfly';

btnCarre.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.remove('giraffe','vautour', 'cat','butterfly')
    })
})

btnGiraffe.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('giraffe')
        elements.classList.remove('vautour', 'cat','butterfly')
    })
})
btnVautour.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('vautour')
        elements.classList.remove('giraffe', 'cat','butterfly')
    
    })
})
btnCat.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('cat')
        elements.classList.remove('vautour','vautour','butterfly', 'giraffe')
    })
})
btnButterfly.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('butterfly')
        elements.classList.remove('vautour','giraffe', 'cat')
    })
})

