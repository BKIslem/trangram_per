
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

function animale(classe) {
    figures.forEach(function(element){
        element.classList.remove("cat", "vautour", "giraffe" ,'avion' ,'bird' ,'butterfly');
        element.classList.add(classe)
    });
}

 btnGiraffe.addEventListener("click", (event) => {
    animale('giraffe')
  });
  btnVautour.addEventListener("click", (event) => {
    animale('vautour')
  });
  btnCat.addEventListener("click", (event) => {
    animale('cat')
  });
  btnBird.addEventListener("click", (event) => {
    animale('bird')
  });
  btnAvion.addEventListener("click", (event) => {
    animale('avion')
  });
  btnCarre.addEventListener("click", (event) => {
    animale('carre')
  });
  btnButterfly.addEventListener("click", (event) => {
    animale('butterfly')
  });


    
  
