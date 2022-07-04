let competidores = ["Rafael", "Manoel", "Daniel"]

function position(arrayCompetidores) {
    let posicaoDaniel = arrayCompetidores.indexOf("Daniel")

    if (posicaoDaniel === 0) {
        return "Daniel é o vencedor!"
    } else {
        let aux = arrayCompetidores[posicaoDaniel-1]
        arrayCompetidores[posicaoDaniel-1] = arrayCompetidores[posicaoDaniel];arrayCompetidores[posicaoDaniel] = aux
        return "Esse é o pódio: " + arrayCompetidores
    }
}

console.log(position(competidores))