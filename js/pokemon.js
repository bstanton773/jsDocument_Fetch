

// Create a getData function
const getData = async (searchParam) => {
    const searchURL = `https://pokeapi.co/api/v2/pokemon/${searchParam}`
    let response = await fetch(searchURL);
    return response.json();
}

// Create a loadData function

const loadData = async (e) => {
    e.preventDefault();
    // console.log(e);

    const pokeSearch = e.target[1].value.toLowerCase();
    // console.log(pokeSearch);

    const pokeData = await getData(pokeSearch);
    // console.log(pokeData);

    createPokeHTML(pokeData);

}

const createPokeHTML = (pokemon) =>{
    const pokeName = pokemon.name;
    const pokeHeight = pokemon.height;
    const pokeWeight = pokemon.weight;

    console.log(pokeName, pokeHeight, pokeWeight);
    let pokeDisplay = document.getElementById('pokemonDisplay');
    
    // Display data in HTML
    let htmlName = document.createElement('h3');
    htmlName.innerHTML = 'Name: ' + pokeName[0].toUpperCase() + pokeName.slice(1);
    pokeDisplay.insertAdjacentElement('beforeend', htmlName);

    let htmlHeight = document.createElement('h3');
    htmlHeight.innerHTML = 'Height: ' + pokeHeight;
    pokeDisplay.insertAdjacentElement('beforeend', htmlHeight);

    let htmlWeight = document.createElement('h3');
    htmlWeight.innerHTML = 'Weight: ' + pokeWeight;
    pokeDisplay.insertAdjacentElement('beforeend', htmlWeight);

    let htmlAbility = document.createElement('h3')
    htmlAbility.innerHTML = 'Abilities: '
    pokeDisplay.insertAdjacentElement('beforeend', htmlAbility);


    let abilityList = document.createElement('ul');
    for (const a of pokemon.abilities){
        let htmlAbilities = document.createElement('li');
        console.log(a)
        htmlAbilities.innerHTML = a.ability.name;
        abilityList.insertAdjacentElement('beforeend', htmlAbilities);
    }
    pokeDisplay.insertAdjacentElement('beforeend', abilityList)
}

// Connect form to loadData function
const form = document.getElementById('pokeDataForm')
form.addEventListener('submit', loadData);
