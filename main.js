const container = document.querySelector('#container');
// function fetchKantoPokemon(){
//     fetch(‘https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(response => response.json())
//     .then(allpokemon => console.log(allpokemon))
//   }
const getspecies = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        .then(resp => resp.json())
        .then(data => {

            const species = data.results;
            console.log(species)

            const redefineeachpoke = (eachpoke, idx) => {
             return {
                 name: eachpoke.name,
                 id: idx + 1
             }
             }
            

            const mySWspeciesArray = species.map(redefineeachpoke)

        console.log(mySWspeciesArray)

        const speciesHTML = mySWspeciesArray.map(eachpoke => {
            return `     
            <div class="scene">
            <div class="card">
              <div class="card__face card__face--front">${eachpoke.name}</div>
              <div class="card__face card__face--back"><div><p><img class ='pokeimg' src='https://pokeres.bastionbot.org/images/pokemon/${eachpoke.id}.png' /> </p></div></div>
            </div>
        </div>
        
        `

        }).join('');

    console.log(speciesHTML)

    container.innerHTML = speciesHTML;

    var cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener( 'click', function() {
            card.classList.toggle('is-flipped');
    });  
})
   
    })
}

getspecies();





// function logSubmit(event) {
//     log.textContent = `Form Submitted! Time stamp: ${event.name}`;
//     event.preventDefault();
//   }
  
//   const form = document.getElementById('charForm');
//   const log = document.getElementById('log');
//   form.addEventListener('submit', logSubmit);


  
// const charForm = document.querySelector('#charForm');

// charForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     // const nameInput = document.querySelector('#name');

//     // console.log(nameInput.value) 


//     const formData = new FormData(charForm);

//     let charObj = new Object();


//     for(let pair of formData.entries()) {
//         console.log(pair)

//         charObj[pair[0]] = pair[1]
//     }

//     newCharHTMl =
//       `     
//     <div class="scene">
//     <div class="card">
//       <div class="card__face card__face--front">${charObj.name}</div>
//       <div class="card__face card__face--back"><div><p>${charObj.gender}</p></div></div>
//     </div>
//     </div>`

    


//     container.innerHTML = newCharHTMl;

// })


