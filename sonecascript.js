const items = [
    {
        id: 0, 
        nome: 'Batata',
        img: "fot.png",
        qnt: 0
    },

    {
        id: 1, 
        nome: 'Refrigerante',
        img: "fot.png",
        qnt: 0
    },

    {
        id: 2, 
        nome: 'Pizza',
        img: "fot.png",
        qnt: "pizza.png"
    }
]


iniciarloja = () => {
    var containerProdutos = document.getElementById('produtos')
    items.map((val) => {
        containerProdutos.innerHTML+=`
        <div class="produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href ="#"> Adicionar ao carrinho </a>
        </div>
        `           
    })
}


iniciarloja()

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho')
    containerCarrinho.innerHTML=""
        items.map((val)=>{
        if (val.quantidade > 0){
            console.log("cara ate aq td bem")
            containerCarrinho.innerHTML+=`

        <p>`+val.nome+` | Quantidade:`+val.quantidade+`</p>
        
        <hr>`
    }
    })
}




var links = document.getElementsByTagName('a')

for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function() {
        let key = this.getAttribute('key')
        items[key].quantidade++
        return false
        atualizarCarrinho()
        
    })
}
