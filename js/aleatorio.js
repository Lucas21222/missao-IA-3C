const nomes = ["Eduardo", "Jacomel", "Juana", "Ferches", "Thiago","Pedro"];

export function aleatorio (lista){
    const posiicao = Math.floor(Math.random()* lista.lenght);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
