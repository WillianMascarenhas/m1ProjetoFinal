let quantidadeInicial = document.querySelector(".quantidadeProdutos")
    quantidadeInicial.innerHTML = 0

let totalInicial = document.querySelector(".somaTotal")
    totalInicial.innerHTML = 0

let listaData   = []
let quantidade  = 0
let total       = 0



function percorrendoDataBase(arr){
    for(let i = 0; i < arr.length; i++){
        listaData.push(arr[i])
        let valor = arr[i].value
    }
}
percorrendoDataBase(data)

let body = document.body
let tagUL = document.querySelector(".listaProdutos")
// let li = document.querySelector(".produtos")
// let divEx = document.querySelector(".expecifica")

function criarLista(lista){
    let img = lista.img
    let name = lista.nameItem
    let description = lista.description
    let value = lista.value
    let addCart = lista.addCart
    let tag = lista.tag
    let id = lista.id
    
    // let tagImg = document.querySelector(".imgLista")
    // let tagTag = document.querySelector(".tag")
    // let tagNameItem = document.querySelector("nameItem")
    // let tagDescription = document.querySelector(".description")
    // let tagValue = document.querySelector(".value")
    // let tagAddCart = document.querySelector("addCart")

    let tagLi = document.createElement("li")
    tagLi.setAttribute("class", "produtos")
    
    
    let tagImg = document.createElement("img")
    tagImg.setAttribute ( 'class' ,  'imgLista' ) 
    
    let divEx = document.createElement("div")
    divEx.setAttribute("class" ,"expecifica")
    
    let tagTag = document.createElement("a")
    tagTag.setAttribute("class" , "tag")
    
    let tagNameItem = document.createElement("h2")
    tagNameItem.setAttribute("class", "nameItem")
    
    let tagDescription = document.createElement("p")
    tagDescription.setAttribute("class", "description")
    
    let tagValue = document.createElement("p")
    tagValue.setAttribute("class", "value")
    
    let tagAddCart = document.createElement("button")
    tagAddCart.setAttribute("class", "addCart")
    tagAddCart.setAttribute("id", `${id}`)
    
    tagImg.src = `./${img}`
    tagImg.alt = `${name}`
    
    tagTag.innerHTML = `${tag}`
    
    tagNameItem.innerHTML = `${name}`
    
    tagDescription.innerHTML = `${description}`
    
    tagValue.innerHTML = `R$${value}`
    
    tagAddCart.innerHTML = `${addCart}`
    
    divEx.append( tagTag, tagNameItem, tagDescription, tagValue, tagAddCart)
    tagLi.append(tagImg, divEx)
    
    tagUL.appendChild(tagLi)
    
    return tagLi
}

function passarListaHtml(lista){
    for(let i = 0; i < lista.length; i++){
        let criarUl = criarLista(lista[i])
        tagUL.appendChild(criarUl)
    }
}
passarListaHtml(listaData)


let ulCard = document.querySelector(".ulCard")
let clickAddCart = document.querySelectorAll(".addCart");

for(let i = 0; i <clickAddCart.length; i++){
    let botao = clickAddCart[i]
    
    botao.addEventListener("click", function(e){
        quantidade++
        
        let quantidadePro = document.querySelector(".quantidadeProdutos")
        quantidadePro.innerHTML = `${quantidade}`
        
        // console.log(e.target.id)
        let idBotao = parseInt(e.target.id)
        let produto = achandoProdutoPor(idBotao)

        total += produto.value
        totalInicial.innerText = `${total}`

        criarListaCard(produto)
        
        ulCard.appendChild(criarListaCard(produto))
        let divteste = document.querySelector(".vazio")
        let carrinhoCompra = document.querySelector(".carrinhoCompra")

        if(ulCard.children !== []){
            divteste.remove()
        }else{
            carrinhoCompra.appendChild(divteste)
            console.log(carrinhoCompra)
        }
    })
}


function achandoProdutoPor(id){
    for(let i =0; i < data.length; i++){
        if(data[i].id == id){
            return data[i]
        }
    }
    return "Produto não encontrado"
}


function criarListaCard(produto){
    let img = produto.img
    let name = produto.nameItem
    let value = produto.value
    let id = produto.id
    
    let liCard = document.createElement("li")
    liCard.setAttribute("class", "produtosFinalizar")
    liCard.id = "li"+id
    
    let divBox = document.createElement("div")
    divBox.setAttribute("class", "divBox")
    
    let imgCard = document.createElement("img")
    imgCard.setAttribute("class", "imgCard")
    imgCard.src = `${img}`
    imgCard.alt = `${name}`
    
    let divCarct = document.createElement("div")
    divCarct.setAttribute("class", "itensCarrinho")
    
    let h2Card = document.createElement("h2")
    h2Card.setAttribute("class", "nameItem")
    h2Card.innerHTML = `${name}`
    
    let pCard = document.createElement("p")
    pCard.setAttribute("class", "valueItem")
    pCard.innerHTML = `R$${value}`
    
    let buttonCard = document.createElement("button")
    buttonCard.setAttribute("class", "removerProdt")
    buttonCard.setAttribute("id", `del_${id}`)
    buttonCard.innerHTML = "Remover produto"
    
    
    buttonCard.addEventListener("click", function(e){
        let li = document.querySelector("#li"+id)
        li.remove()
        quantidade--
        let quantidadePro = document.querySelector(".quantidadeProdutos")
        quantidadePro.innerHTML = (`${quantidade}`)
        
        total-= value
        totalInicial.innerText= `${total}`


    })
    
    
    divBox.appendChild(imgCard)
    divCarct.append(h2Card, pCard, buttonCard)
    liCard.append(divBox, divCarct)
    
    
    
    return liCard
}

let removeCard = document.querySelector(".removerProdt")






