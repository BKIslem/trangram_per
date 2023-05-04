const btnGiraffe = document.getElementById('btnFour');
const btnCarre = document.getElementById('btnOne');
const btnVautour = document.getElementById('btnFive');
const figures = document.querySelectorAll('.figure');


btnCarre.innerHTML = 'Carré';
btnGiraffe.innerHTML = 'Giraffe';
btnVautour.innerHTML = 'Vautour';
btnCarre.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.remove('giraffe')
        elements.classList.remove('vautour')
    })
})

btnGiraffe.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('giraffe')
        elements.classList.remove('vautour')
    })
})
btnVautour.addEventListener('click', () => {
    figures.forEach(elements => {
        elements.classList.add('vautour')
        elements.classList.remove('giraffe')
    })
})