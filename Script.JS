const noticias = [
    {
        titulo: "Brasil se prepara para a próxima Copa",
        texto: "A seleção brasileira continua seus treinamentos visando os próximos desafios internacionais.",
        imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200"
    },
    {
        titulo: "Campeonato Brasileiro",
        texto: "A disputa pela liderança está cada vez mais acirrada entre os principais clubes."
    },
    {
        titulo: "Jogador da Semana",
        texto: "O atacante marcou três gols na rodada e foi o grande destaque do campeonato."
    }
];

const container = document.getElementById("posts");

noticias.forEach(noticia => {
    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
        ${noticia.imagem ? `<img src="${noticia.imagem}" alt="${noticia.titulo}">` : ""}
        <h2>${noticia.titulo}</h2>
        <p>${noticia.texto}</p>
    `;

    container.appendChild(post);
});