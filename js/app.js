let generarNombre = document.getElementById("generar-nombre");

generarNombre.addEventListener("submit", generarDatos);


function generarDatos(e) {

    e.preventDefault();

    let nacionalidad = document.getElementById("origen");
    let seleccionarNat = nacionalidad.options[nacionalidad.selectedIndex].value;

    let genero = document.getElementById("genero");
    let seleccionarGenero = genero.options[genero.selectedIndex].value;

    let cantidad = document.getElementById("numero").value;

    let url = "https://randomuser.me/api?"
    if (seleccionarNat !== "") {
        url += `nat=${seleccionarNat}&`
    }

    if (seleccionarGenero !== "") {
        url += `gender=${seleccionarGenero}&`
    }

    if (cantidad !== "") {
        url += `results=${cantidad}&`
    }

    console.log(url)



    fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },

        }).then(response => response.json())
        .then(function ho(res) {

            let repo = res.results
            console.log(repo)
            let htmlTemplate = ""
            repo.forEach(function(res) {
                htmlTemplate += `
               <ul><li>${res.name.first}</li>

               </ul>
               `
                let resultado = document.getElementById("resultado")
                resultado.appendChild = htmlTemplate;
                resultado.innerHTML = htmlTemplate;
            })
        })
        .catch(error => console.error('Error:', error))

    // let xhr = new XMLHttpRequest

    // xhr.open("GET", url, true);

    // xhr.onload = function() {

    //     let response = JSON.parse(this.responseText);
    //     console.log(response.results[0].name.first)
    //     let repo = response.results
    //     let htmlTemplate = ""
    //     repo.forEach(function(res) {

    //         htmlTemplate += `
    //             <ul><li>${res.name.first}</li>

    //             </ul>
    //             `
    //         let resultado = document.getElementById("resultado")
    //         resultado.appendChild = htmlTemplate;
    //         resultado.innerHTML = htmlTemplate;

    //     });


    // }

    // xhr.send();

}

async function listarDatos() {

    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users")

    let datos = await respuesta.json()
    return datos
}
listarDatos()
    .then(usuarios => console.log(usuarios))