console.log('This is the Fetch API project')

const url = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(url).then(response => response.json()).then(data => cities.push(...data));

function displayMatches() {
    let matchArr = findMatches(this.value,cities);
    let html = matchArr.map(place => {
        let reg = new RegExp(this.value,'gi');
        let cityName = place.city.replace(reg,`<span class="hl">${this.value}</span>`);
        let stateName = place.state.replace(reg,`<span class="hl">${this.value}</span>`);

        return `<li>
                    <span class="name">${cityName},${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>`;
    }).join('');
    suggestions.innerHTML = html;
}

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        let reg = new RegExp(wordToMatch, 'gi');
        return place.city.match(reg) || place.state.match(reg);
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

let search = document.querySelector('.search');
let suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);

