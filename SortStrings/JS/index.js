console.log('Sorting the Strings');

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let copy = [...bands]
console.log(copy);
//Populate the table with all the values

function populateTable(){
    Array.from(bands).forEach(element => {
        let newElement = document.createElement('li');
        newElement.innerHTML = element;
        document.querySelector('.listItems').appendChild(newElement);
    });
}

populateTable(bands);

let submit = document.getElementById('submit');

function strip(a){
    return a.replace(/^(a |the |an )/i,'').trim();
}
submit.addEventListener('click',() => {
    let sortedbands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
    document.querySelector('.listItems').innerHTML = 
    sortedbands.map(band => `<li>${band}</li>`).join('');
});


let back = document.getElementById('back');
back.addEventListener('click',() => {
    document.querySelector('.listItems').innerHTML = 
    copy.map(band => `<li>${band}</li>`).join('');
});