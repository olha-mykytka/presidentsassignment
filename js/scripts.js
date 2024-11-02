// const stoogeData = [{"name":"Curly","born":1903},{"name":"Moe","born":1900}]

// const cardPointer = document.querySelector('#cards')
// function apple(x) {
// let theName = document.createElement('h2')
// let theBirth = document.createElement('p')

// theName.textContent = stoogeData[x].name;
// theBirth.textContent = stoogeData[x].born;

//cardPointer.appendChild(theName);
//cardPointer.appendChild(theBirth); }

//apple(0)
//apple(1) 

import {presidents} from "../data/presidents.js"

const pathStart = "//www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/"
const myTarget = document.querySelector('#cards')

for (let x = 0; x < presidents.length; x++) {
    let barDiv = document.createElement('div')
    barDiv.innerHTML = `<p>${presidents[x].name}<p>`;
    let myImage = document.createElement('img')
    myImage.setAttribute("src", pathStart+presidents[x].photo)
    myImage.setAttribute("alt", presidents[x].name)

    let myCaption = document.createElement('figcaption');
    myCaption.innerHTML = `Served from ${presidents[x].took_office} to ${presidents[x].left_office}<br>Lived from ${presidents[x].born} to ${presidents[x].died}<br>Party: ${presidents[x].party}`

let myFigure = document.createElement('figure')


    myFigure.appendChild(barDiv)
    myFigure.appendChild(myImage)
    myFigure.appendChild(myCaption)

    myTarget.appendChild(myFigure)
}
