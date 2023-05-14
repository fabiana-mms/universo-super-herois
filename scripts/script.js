function fazGet(url) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    return xhr.responseText;
}

function criaLinha(usuario) {

}

function main() {
   console.log(fazGet("https://akabab.github.io/superhero-api/api"))
}

main();



// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var response = JSON.parse(xhr.responseText);

//         console.log(response);

//     }
// }

// xhr.open('GET', 'https://akabab.github.io/superhero-api/api', true);
// xhr.send();











//var bandeira = resultado[0].flags;

        //const img = document.querySelector('.bandeira');
        //img.src = bandeira.png;
        //img.alt = bandeira.alt;

        //document.appendChild(img);