const jugadores = [
    { nombre: "César Gil", categoria: "Afiliado", puntos: 2000 },
    { nombre: "Juan José", categoria: "Profesor", puntos: 1000 },
    { nombre: "Kevin", categoria: "Afiliado", puntos: 0 },
    { nombre: "Blade", categoria: "Profesor", puntos: 0 },
    { nombre: "Jorge Buendía", categoria: "Afiliado", puntos: 0 }
];

const rankingList = document.getElementById('ranking');
jugadores.sort((a, b) => b.puntos - a.puntos).forEach(jugador => {
    const item = document.createElement('li');
    item.textContent = `${jugador.nombre} - ${jugador.categoria} - ${jugador.puntos} puntos`;
    rankingList.appendChild(item);
});