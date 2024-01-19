document.addEventListener("DOMContentLoaded", function () {
    const poligonos = document.querySelectorAll(".rectangulo-modificado");

    function cambiarColorOpacidad(poligono, opacidad, color) {
        poligono.style.opacity = opacidad;
        poligono.style.backgroundColor = color;
    }

    function generarColorInicial() {
        const tonoGris = Math.floor(Math.random() * 36) + 120;
        return `rgba(255, 255, 255, ${tonoGris / 255})`; // Blanco con opacidad inicial aleatoria
    }

    function seleccionarAleatorios(cantidad, inicio, fin) {
        const indices = [];

        while (indices.length < cantidad) {
            const indice = Math.floor(Math.random() * (fin - inicio + 1)) + inicio;
            if (!indices.includes(indice)) {
                indices.push(indice);
            }
        }

        return indices.map((indice) => poligonos[indice]);
    }

    async function realizarTransicion(seleccion, tiempoEspera) {
        await new Promise(resolve => setTimeout(resolve, tiempoEspera));

        seleccion.forEach((poligono, index) => {
            const intervalo = (index + 1) * 4000;
            setInterval(() => cambiarColorOpacidad(poligono, 0.2, 'white'), intervalo);
        });
    }
    /*opcial viable tambien*/
    /*async function realizarTransicion(seleccion, tiempoEspera) {
    await new Promise(resolve => setTimeout(resolve, tiempoEspera));

    const duracionTransicion = 2000; // Duración de la transición en milisegundos

    seleccion.forEach((poligono, index) => {
        const intervalo = index * 1000; // Espaciado entre las transiciones en milisegundos
        setTimeout(() => {
            cambiarColorOpacidad(poligono, 0.1, 'white');
            setTimeout(() => cambiarColorOpacidad(poligono, 0.8, 'white'), duracionTransicion);
        }, intervalo);
    });
} */

    async function iniciarNuevaSeleccion() {
        // Establecer colores y opacidades iniciales
        poligonos.forEach((poligono) => {
            const colorInicial = generarColorInicial();
            cambiarColorOpacidad(poligono, 0.3, colorInicial);
        });

        const seleccion1 = seleccionarAleatorios(2, 0, 5);
        const seleccion2 = seleccionarAleatorios(2, 6, 11);
        const seleccion3 = seleccionarAleatorios(2, 12, 17);
        const seleccion4 = seleccionarAleatorios(3, 18, 25);

        await Promise.all([
            realizarTransicion(seleccion1, 4000),
            realizarTransicion(seleccion2, 4000),
            realizarTransicion(seleccion3, 4000),
            realizarTransicion(seleccion4, 4000),
        ]);

        // Después de que todas las transiciones han terminado, volver a estado original y luego iniciar nueva selección
        poligonos.forEach((poligono) => {
            cambiarColorOpacidad(poligono, 0.8, generarColorInicial());
        });

        iniciarNuevaSeleccion();
    }

    // Iniciar la animación
    iniciarNuevaSeleccion();
});
