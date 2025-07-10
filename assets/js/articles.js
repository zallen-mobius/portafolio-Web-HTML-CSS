
let articles = document.querySelector(".layout__articles");

let posts = [
    {
        title: "Articulo 1",
        date: "30/12/2028",
        body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum et, aliquid laudantium voluptatibus sapiente voluptas dolorem blanditiis tempore nihil ipsum unde ratione quasi repellat dolor? Architecto nam sint veniam. Reiciendis.
        Mollitia officiis voluptas, harum iste minus totam vitae porro et quo error obcaecati ea consectetur nulla vel voluptatibus aspernatur id labore magnam ratione nam impedit veniam. Sapiente animi optio suscipit?`
    },
    {
        title: "Articulo 2",
        date: "10/12/2019",
        body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum et, aliquid laudantium voluptatibus sapiente voluptas dolorem blanditiis tempore nihil ipsum unde ratione quasi repellat dolor? Architecto nam sint veniam. Reiciendis.
        Mollitia officiis voluptas, harum iste minus totam vitae porro et quo error obcaecati ea consectetur nulla vel voluptatibus aspernatur id labore magnam ratione nam impedit veniam. Sapiente animi optio suscipit?`
    },
    {
        title: "Articulo 3",
        date: "20/10/2025",
        body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum et, aliquid laudantium voluptatibus sapiente voluptas dolorem blanditiis tempore nihil ipsum unde ratione quasi repellat dolor? Architecto nam sint veniam. Reiciendis.
        Mollitia officiis voluptas, harum iste minus totam vitae porro et quo error obcaecati ea consectetur nulla vel voluptatibus aspernatur id labore magnam ratione nam impedit veniam. Sapiente animi optio suscipit?`
    },
    {
        title: "Articulo 4",
        date: "13/04/2028",
        body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum et, aliquid laudantium voluptatibus sapiente voluptas dolorem blanditiis tempore nihil ipsum unde ratione quasi repellat dolor? Architecto nam sint veniam. Reiciendis.
        Mollitia officiis voluptas, harum iste minus totam vitae porro et quo error obcaecati ea consectetur nulla vel voluptatibus aspernatur id labore magnam ratione nam impedit veniam. Sapiente animi optio suscipit?`
    }
];

posts.forEach(article => {
    articles.innerHTML += `
        <article class="articles__article" >
            <h3 class="article__title" > ${article.title} </h3>
            <span class="article__date" > ${article.date} </span>
            <p class="article__body" >
                ${article.body}
            </p>
            <a href="#" class="article__btn" > Leer más </a>
        </article>
    `
});