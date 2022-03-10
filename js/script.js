const arrayOggettiIcone = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        color: 'orange'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        color: 'green'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        color: 'blue'
    }
];

const contenitoreIcone = document.querySelector('.section');
let inputTipoIcone = document.getElementById('icons')
//CICLO FOR
// for (let index = 0; index < arrayOggettiIcone.length; index++) {

//     let card = document.createElement('div');
//     card.innerHTML = 
//     `<div class="card">
//     <div style="color:${arrayOggettiIcone[index].color}"><i class="${arrayOggettiIcone[index].prefix + 'solid'} ${arrayOggettiIcone[index].prefix + arrayOggettiIcone[index].name}"></i></div>
//     <div>${arrayOggettiIcone[index].name.toUpperCase()}</div>
//     </div>`;

//     contenitoreIcone.append(card);    
// };

//CICLO FOREACH
function creaCarte(arrayArgomento, conteinitoreArgomento) {
    arrayArgomento.forEach(element => {
        let arrNumRand = [];
        for (let index = 0; index < 3; index++) {
            arrNumRand.push(getRandomArbitrary(0, 225));
        }
        console.log(arrNumRand);

        arrayOggettiIcone.forEach((objArray) => objArray.color = `rgb(${(arrNumRand.join(','))})`);
        console.table(arrayOggettiIcone);
        
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML =
            `<div style="color:${element.color}"><i class="${element.prefix + 'solid'} ${element.prefix + element.name} icons"></i></div>
            <div>${element.name.toUpperCase()}</div>`;

        conteinitoreArgomento.append(card);




    })
}

creaCarte(arrayOggettiIcone, contenitoreIcone);

inputTipoIcone.addEventListener('change', function () {

    contenitoreIcone.innerHTML = '';

    if (inputTipoIcone.value == 'animal') {
        let arrayAnimali = arrayOggettiIcone.filter((oggetto) => oggetto.type == 'animal');
        console.log(arrayAnimali);
        creaCarte(arrayAnimali, contenitoreIcone);
    } else if (inputTipoIcone.value == 'vegetable') {
        let arrayVegetable = arrayOggettiIcone.filter((oggetto) => oggetto.type == 'vegetable');
        console.log(arrayVegetable);
        creaCarte(arrayVegetable, contenitoreIcone);
    } else if (inputTipoIcone.value == 'user') {
        let arrayUser = arrayOggettiIcone.filter((oggetto) => oggetto.type == 'user');
        console.log(arrayUser);
        creaCarte(arrayUser, contenitoreIcone);
    } else {
        creaCarte(arrayOggettiIcone, contenitoreIcone);
    }
});



function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}


// let arrNumRand = [];
// for (let index = 0; index < 3; index++) {
//     arrNumRand.push(getRandomArbitrary(0, 225));
// }
// console.log(arrNumRand);

// arrayOggettiIcone.forEach((objArray) => objArray.color = `rgb(${(arrNumRand.join(','))})`);
// console.table(arrayOggettiIcone);





/*
inputTipoIcone.addEventListener("change", function () {
    const iconsTypeSelected = this.value;
  
    //console.log(iconsTypeSelected);
  
    if (iconsTypeSelected != "all") {
      const filteredIcons = arrayOggettiIcone.filter((elementoArrayOggettiIcone) => {
        if (elementoArrayOggettiIcone.type == iconsTypeSelected) {
          return true;
        }
      });
  
      //filteredIcons
  
      //stampo solo l'array di icone che ho filtrato
      insertIcons(filteredIcons, iconsContainer);
    } else {
      // stampo tutte le icone
      insertIcons(icons, iconsContainer);
    }
  });
  */


