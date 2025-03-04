// Conección con los elementos HTML
const songForm = document.getElementById('song_form');  // Corregir el id del formulario
const playList = document.getElementById('playlist');  // Corregir el id de la lista de reproducción

// Función para agregar una canción a la lista
function addSong(songName, artistName, songUrl) {
    const listSong = document.createElement('li');

    listSong.innerHTML = `
        <strong>${songName}</strong> - ${artistName}
        <a href="${songUrl}" target="_blank">Reproducir</a>
        <button class="delete-btn">Eliminar</button>
    `;

    // Agregar la canción al HTML
    playList.appendChild(listSong);

    // Añadir el evento para eliminar la canción
    const deleteButton = listSong.querySelector('.delete-btn');
    deleteButton.addEventListener('click', () => {
        playList.removeChild(listSong);
    });
}

// Manejo de envío de formulario (EVENTOS)
songForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Evita que se recargue la página

    // Obtener los datos del formulario
    const songName = document.getElementById('song_name').value;
    const artistName = document.getElementById('artist_name').value;
    const songUrl = document.getElementById('url_song').value;

    // Agregar la canción a la lista
    addSong(songName, artistName, songUrl);

    // Limpiar el formulario
    songForm.reset();
});