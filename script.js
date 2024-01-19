/*
document.addEventListener("DOMContentLoaded", function () {
    const poligonos = document.querySelectorAll(".rectangulo-modificado");
    const poligono25 = document.getElementById("polygon25"); // Agregado para obtener el polígono 25

    function cambiarColorOpacidad(poligono, opacidad, color) {
        poligono.style.opacity = opacidad;
        poligono.style.backgroundColor = color;
    }

    function generarColor(r, g, b) {
        const tonoGris = Math.floor(Math.random() * 36) + 120;
        return `rgba(${r}, ${g}, ${b}, ${tonoGris / 255})`;
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
            setInterval(() => cambiarColorOpacidad(poligono, 0.6, generarColor(255, 255, 255)), intervalo);
        });
    }

    async function iniciarNuevaSeleccion() {
        // Establecer colores y opacidades iniciales
        poligonos.forEach((poligono) => {
            cambiarColorOpacidad(poligono, 0.3 , generarColor(255, 255, 255));
        });

        // Agregado: Establecer color y opacidad inicial para el polígono 25
        cambiarColorOpacidad(poligono25, 0.3, generarColor(255, 255, 255));

        const seleccion1 = seleccionarAleatorios(2, 0, 5);
        const seleccion2 = seleccionarAleatorios(2, 6, 11);
        const seleccion3 = seleccionarAleatorios(2, 12, 17);
        const seleccion4 = seleccionarAleatorios(3, 18, 24);

        await Promise.all([
            realizarTransicion(seleccion1, 4000),
            realizarTransicion(seleccion2, 4000),
            realizarTransicion(seleccion3, 4000),
            realizarTransicion(seleccion4, 4000),
        ]);

        // Después de que todas las transiciones han terminado, volver a estado original y luego iniciar nueva selección
        poligonos.forEach((poligono) => {
            cambiarColorOpacidad(poligono, 0.8, generarColor(255, 255, 255));
        });

        // Agregado: Restaurar opacidad y color inicial para el polígono 25
        cambiarColorOpacidad(poligono25, 0.3, generarColor(255, 255, 255));

        iniciarNuevaSeleccion();
    }

    // Iniciar la animación
    iniciarNuevaSeleccion();
});
*/
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
/*opcion negro y gris*/
document.addEventListener("DOMContentLoaded", function () {
    const poligonos = document.querySelectorAll(".rectangulo-modificado");
    const poligono25 = document.getElementById("polygon25");

    function cambiarColorOpacidad(poligono, opacidad, color) {
        poligono.style.opacity = opacidad;
        poligono.style.backgroundColor = color;
    }
    /*--------------------*//*para cambiar de color solo bloquear el que este sin y desbloquear el /* */ 
    /*negro y gris */
    function generarColor() {
        // Genera colores entre negro y gris claro
        const r = Math.floor(Math.random() * 56); // Entre 0 y 55 para obtener tonos oscuros
        const g = Math.floor(Math.random() * 56); // Entre 0 y 55 para obtener tonos oscuros
        const b = Math.floor(Math.random() * 200) + 56; // Entre 56 y 255 para obtener tonos claros
        const tonoGris = (r + g) / 2; // Calcula un tono de gris promedio
        return `rgba(${tonoGris}, ${tonoGris}, ${tonoGris}, ${b / 255})`;
    }
    /*--------------------*/
    /* blanco y negro*/
    /*    
    function generarColor() {
        // Genera colores entre negro y blanco
        const r = Math.floor(Math.random() * 256); // Rojo entre 0 y 255
        const g = Math.floor(Math.random() * 256); // Verde entre 0 y 255
        const b = Math.floor(Math.random() * 256); // Azul entre 0 y 255
        const tonoGris = (r + g + b) / 3; // Calcula un tono de gris promedio
        return `rgba(${tonoGris}, ${tonoGris}, ${tonoGris}, 1)`;
    }
    *//*--------------------*/
    /*blanco y gris*/
    /*
    function generarColor() {
        // Genera colores entre blanco y gris
        const tonoGris = Math.floor(Math.random() * 156) + 100; // Genera un tono de gris entre 100 y 255
        return `rgba(${tonoGris}, ${tonoGris}, ${tonoGris}, 1)`;
    }
    *//*--------------------*/ 
    

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
            setInterval(() => cambiarColorOpacidad(poligono, 0.9, generarColor(255, 255, 255)), intervalo);
        });
    }

    async function iniciarNuevaSeleccion() {
        poligonos.forEach((poligono) => {
            cambiarColorOpacidad(poligono, 0.3, generarColor(255, 255, 255));
        });

        cambiarColorOpacidad(poligono25, 0.3, generarColor(255, 255, 255));

        const seleccion1 = seleccionarAleatorios(2, 0, 5);
        const seleccion2 = seleccionarAleatorios(2, 6, 11);
        const seleccion3 = seleccionarAleatorios(2, 12, 17);
        const seleccion4 = seleccionarAleatorios(3, 18, 24);

        await Promise.all([
            realizarTransicion(seleccion1, 4000),
            realizarTransicion(seleccion2, 4000),
            realizarTransicion(seleccion3, 4000),
            realizarTransicion(seleccion4, 4000),
        ]);

        poligonos.forEach((poligono) => {
            cambiarColorOpacidad(poligono, 0.8, generarColor(255, 255, 255));
        });

        cambiarColorOpacidad(poligono25, 0.8, generarColor(255, 255, 255));

        iniciarNuevaSeleccion();
    }

    iniciarNuevaSeleccion();
});
