async function exampleFetch() {
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();
    console.log(json);

    const itemTextElements = document.getElementsByClassName('item_text');

    // Sostituisce gli elementi con quelli forniti nel JSON

    for (let i = 0; i < itemTextElements.length && i < json.programming_languages_popular.length; i++) {
        itemTextElements[i].textContent = json.programming_languages_popular[i];
    }





    //Rimozione tendine

    // Trova tutti gli elementi con la classe "second"
    var elementsToRemove = document.querySelectorAll('.second');

    // Itera su ogni elemento e rimuovilo
    elementsToRemove.forEach(function (element) {
        element.remove();
    });





    //Sostituzione del logo



    let logoNormal = document.getElementsByClassName("eltdf-normal-logo")[0];
    logoNormal.src = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png';


    //Link di Wikipedia

    let wikipediaUrlBase = "https://it.wikipedia.org/wiki/";

    // Faccio un ciclo for che andrà a sostituire il testo di ogni elemento con l'elemento con lo stesso indice dell'array programming_languages_popular
    for (let i = 0; i < itemTextElements.length && i < json.programming_languages_popular.length; i++) {

        // Creo una variabile chiamata link, che andrà a creare nel DOM per ciascun elemento un tag "a"
        let link = document.createElement("a");

        link.textContent = json.programming_languages_popular[i];

        link.href = wikipediaUrlBase + encodeURIComponent(json.programming_languages_popular[i]);

        link.target = "_blank";

        // Sostituisci il contenuto dell'elemento con il link creato
        itemTextElements[i].innerHTML = '';
        itemTextElements[i].appendChild(link);
    }



}


exampleFetch();