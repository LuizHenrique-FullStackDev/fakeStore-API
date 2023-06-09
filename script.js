function buscsarCategorias()
{
    fetch("https://fakestoreapi.com/products/categories")
    .then(res => res.json())
    .then(listaCategorias => {
        listaCategorias.forEach(cada => {
            categorias.innerHTML += `
            <li class="list-group-item">
                    <h6>
                    <input type="checkbox">
                    <span>${cada}</span>
                    </h6>
                    </li>
              `;
        })
    })
}
buscsarCategorias();

function buscaProdutos()
{
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(listaProdutos => {
        listaProdutos.forEach(cada => {
            products.innerHTML +=`
            <li>
            <div class="card">
                <img src="${cada.image}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${cada.title}</h5>
                    <p class="card-text">${cada.description}</p>
                    <a href="" class="btn btn-primary">Adicionar ao carrinho</a>
                </div>
            </div>
        </li>`
        })
    })
} buscaProdutos();