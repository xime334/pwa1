const listaVideos = [
    { titulo: 'video 1', descripcion: 'descripcion video 1', url: 'videos/ok.mp4'},
    { titulo: 'video 2', descripcion: 'descripcion video 2', url: 'videos/un.mp4'},
    { titulo: 'video 3', descripcion: 'descripcion video 3', url: 'https://www.youtube.com/embed/Zlmswo0S0e0?si=wzHMqrryBC06OJfW'}
];

var catalogoVideos = document.getElementById("cat");

function mostrarCatalogoVideos(videosMostrados) {

    catalogoVideos.innerHTML = '';

    videosMostrados.forEach(function (indexVideo) {

        var filVdeo = document.createElement('div');

        var col1Vdeo = document.createElement('div');
        var urlVdeo = document.createElement('iframe');

        filVdeo.setAttribute('class', 'row mt-5');
        col1Vdeo.setAttribute('class', 'col');

        urlVdeo.setAttribute('src', indexVideo.url);
        urlVdeo.setAttribute('width', '400px');
        urlVdeo.setAttribute('height', '250px');

        col1Vdeo.appendChild(urlVdeo);
        filVdeo.appendChild(col1Vdeo);

        var col2Titulo = document.createElement('div');
        var h4Titulo = document.createElement('h4');
        var h6Descripcion = document.createElement('h6');
        col2Titulo.setAttribute('class', 'col');

        h4Titulo.textContent = indexVideo.titulo;
        h6Descripcion.textContent = indexVideo.descripcion;

        col2Titulo.appendChild(h4Titulo);
        col2Titulo.appendChild(h6Descripcion);
        filVdeo.appendChild(col2Titulo);

        var col3Icono = document.createElement('div');
        var svg = document.createElement('svg');
        var path = document.createElement('path');
        col3Icono.setAttribute('class', 'col');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('width', '32');
        svg.setAttribute('height', '32');
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('class', 'bi bi-heart-fill');
        svg.setAttribute('viewBox', '0 0 16 16');
        path.setAttribute('d', 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15')

        svg.appendChild(path);
        col3Icono.appendChild(svg);
        filVdeo.appendChild(col3Icono);

        catalogoVideos.appendChild(filVdeo);

    });

}
function buscarVideos() {
    var contendoBuscar = document.getElementById('buscar').value;
    var videosBuscados = listaVideos.filter(
        function (indexVideo) {
            return indexVideo.titulo.toLocaleLowerCase().includes(contendoBuscar);
        }
    );
    // alert(contendoBuscar);
    mostrarCatalogoVideos(videosBuscados);
}

mostrarCatalogoVideos(listaVideos);
