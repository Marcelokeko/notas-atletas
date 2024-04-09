function dadosAtletas() {
    let atletas = [
        {
            nome: "Cesar Abascal",
            notas: [10, 9.34, 8.42, 10, 7.88]
        },
        {
            nome: "Fernando Puntel",
            notas: [8, 10, 10, 7, 9.33]
        },
        {
            nome: "Daiane Jelinsky",
            notas: [7, 10, 9.5, 9.5, 8]
        },
        {
            nome: "Bruno Castro",
            notas: [10, 10, 10, 9, 9.5]
        }
    ];
    return atletas;
}

function notasOrdemCrescente(atletas) {
    let notasOrdenadas = [];
    for (const atleta of atletas) {
        notasOrdenadas.push(atleta.notas.sort((a, b) => a - b));
    }
    return notasOrdenadas;
}

function removeMaiorMenorNota(notasOrdenadas) {
    let notasValidas = [];
    for (const notas of notasOrdenadas) {
        notasValidas.push(notas.slice(1, -1));
    }
    return notasValidas;
}

function mediaNotasValidas(notasValidas) {
    let medias = [];
    for (const notas of notasValidas) {
        let media = notas.reduce((atl, nota) => atl + nota, 0) / notas.length;
        medias.push(media);
    }
    return medias;
}

let atletas = dadosAtletas();
let notasOrdenadas = notasOrdemCrescente(atletas);
let notasValidas = removeMaiorMenorNota(notasOrdenadas);
let medias = mediaNotasValidas(notasValidas);

for (let i = 0; i < atletas.length; i++) {
    console.log(`Atleta: ${atletas[i].nome}`);
    console.log(`Notas Obtidas: ${atletas[i].notas.join(', ')}`);
    console.log(`Média Válida: ${medias[i].toFixed(2)}\n`);
}
