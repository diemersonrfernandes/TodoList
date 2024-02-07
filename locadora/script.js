const listaFilmes = document.querySelector("#listaFilmes")

const filmes = [
    {Nome: "Uma linda mulher, ", Genero: "Romance"},
    {Nome:"US, ", Genero: "Terror"},
    {Nome: "Ate que a sorte nos separe, ", Genero: "Comedia"}
];

const criaElementosUi = function(){
    let aux = "";
    filmes.forEach((filme) => {
    aux += `<li>Nome: ${filme.Nome} Genero: ${filme.Genero}`
});
    listaFilmes.innerHTML = aux;
}

function exibeFilmes(){
setTimeout(criaElementosUi, 1000);
}


function adicionaFilme(filme){
    const promise = (resolve, reject) =>{
    setTimeout(()=> {
        if(filme.Nome === ""){
            reject(new Error ("Nome do filme é inválido"))
        } else{
            filmes.push(filme);
            resolve(filme); 
        }

    },2000);
}
return new Promise(promise);
}

async function funcaoAsync(){
    try{
    const oContratempo = await adicionaFilme ({Nome: "Vingadores 1, ", Genero: "Ação"})
    console.log(oContratempo);
    await adicionaFilme ({Nome: "Vingadores 2, ", Genero: "Ação"});
    await adicionaFilme ({Nome: "Vingadores 3, ", Genero: "Ação"});
    await adicionaFilme ({Nome: "Vingadores 4, ", Genero: "Ação"});
    exibeFilmes();
} catch(erro){
    console.error(erro);
}
}



adicionaFilme({Nome:"O contratempo", Genero: "Suspense"})
.then (() => {
    return adicionaFilme ({Nome: "Vingadores 1, ", Genero: "Ação"})
})
.then (() => {
    return adicionaFilme ({Nome: "Vingadores 2, ", Genero: "Ação"})
})
//.then (() => {
 //   return adicionaFilme ({Nome: "", Genero: "Ação"})
//})
.then (() => {
    return adicionaFilme ({Nome: "Vingadores 3, ", Genero: "Ação"})
})
.then (() => {
    return adicionaFilme ({Nome: "Vingadores 4, ", Genero: "Ação"})
})
.then(exibeFilmes)
.catch((erro) => {
    console.log(erro);
})