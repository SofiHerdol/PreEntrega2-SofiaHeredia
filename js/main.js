console.log(data)

data.sort((a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
});

nodeCharacter(data, document.getElementById("characterContainer"))

function nodeCharacter(array, container) {
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3 class="characterName">
                ${ array[i].name }
            </h3>
            <div class="description">
                <p>Status: ${ array[i].status }</p>
                <p>Species: ${ array[i].species }</p>
                <p>Gender: ${ array[i].gender }</p>
                <p>Origin: ${ array[i].origin.name }</p>
                <p>Location: ${ array[i].location.name }</p>
            </div>
            <div class="imageContainer">
                <img src="${ array[i].image }" alt=${array[i].name}>
            </div>
        `;
        container.appendChild(card);
    }
}



function mostrarPersonajeAleatorio(data) {
    const indiceAleatorio = Math.floor(Math.random() * data.length);

    // Obtener la tarjeta correspondiente al índice aleatorio
    const tarjetaAleatoria = document.querySelectorAll('.card')[indiceAleatorio];
    alert(`¡Bienvenido al buscador de Rick y Morty! Te mostraremos un personaje aleatorio, para que veas como serán los resultados de tu búsqueda:`)
    // Obtener y mostrar la información adicional en un alert
    const nombre = tarjetaAleatoria.querySelector('.characterName').textContent;
    const additionalInfo = tarjetaAleatoria.querySelector('.description').textContent;
    alert(`Personaje aleatorio: ${nombre}\n${additionalInfo}`);

}

mostrarPersonajeAleatorio(data);

function mostrarPersonajeMasCercanoAZ() {
    // Obtener el primer personaje del array (el más cercano a la Z)
    const personajeMasCercanoAZ = data[0];

    // Encontrar el elemento HTML correspondiente al primer personaje
    const elementoPersonaje = document.querySelector('.card:first-of-type');

    // Obtener la descripción del personaje desde el elemento HTML
    const descripcionPersonaje = elementoPersonaje.querySelector('.description').textContent;

    // Mostrar la información del personaje en un alert
    alert(`Personaje más cercano a la Z: ${personajeMasCercanoAZ.name}\n${descripcionPersonaje}`);
}


mostrarPersonajeMasCercanoAZ(data);

function buscarPersonajePorNombre() {
    let nombreBuscado;

    do {
        nombreBuscado = prompt("Ingrese el nombre del personaje que desea buscar:");

        if (nombreBuscado !== null && nombreBuscado !== "") {
            const personajeEncontrado = data.find(personaje => personaje.name === nombreBuscado);

            if (personajeEncontrado) {
                const descripcionCompuesta = `Status: ${personajeEncontrado.status}\nSpecie: ${personajeEncontrado.species}\nGender: ${personajeEncontrado.gender}\nOrigin: ${personajeEncontrado.origin.name}\nLocation: ${personajeEncontrado.location.name}`;
                alert(`Información del personaje:\nNombre: ${personajeEncontrado.name}\nDescripción:\n${descripcionCompuesta}`);

                // Pregunta al usuario si desea buscar otro personaje
                const buscarOtro = confirm("¿Desea buscar otro personaje?");

                if (!buscarOtro) {
                    alert("Si deseas volver a buscar un personaje, recarga la página.");
                    break;
                }
            } else {
                alert("No se encontró ningún personaje con ese nombre. Intente de nuevo.");
            }
        } else if (nombreBuscado !== null) {
            alert("Ingrese un nombre válido.");
        }
    } while (nombreBuscado !== null);
}

buscarPersonajePorNombre();