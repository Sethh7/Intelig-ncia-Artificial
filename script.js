function pesquisar() {
    let section = document.getElementById('resultados-pesquisa')
    let campoPesquisar = document.getElementById("campo-pesquisa").value.toLowerCase()
    if (campoPesquisar == "") {
            section.innerHTML = '<p1>Campo de Pesquisa Obrigatório :)</p1>'
        return;
    }
        let resultados = "";

        for (let dado of dados) {
        if (dado.title.toLowerCase().includes(campoPesquisar) ||
        dado.descricao.toLowerCase().includes(campoPesquisar) ||
        dado.tags.toLowerCase().includes(campoPesquisar))  {
        resultados += `<div class="item-resultado">
        <h2>
        <a href="#">${dado.title}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Acessar o Google Gemini</a>
        </div>`;
}};

    if(!resultados){  
        resultados = '<p1>Não temos nehuma Inteligência Artificial com esse nome :(</p1>'
    }

    section.innerHTML = resultados;
};
