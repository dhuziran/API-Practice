let background = document.getElementById('bg')
background.style.backgroundColor = 'grey'


async function fetchProducts() {
    try {
        let response = await fetch('https://dummyjson.com/products')
        let translatedResponse = await response.json()
        let actualData = translatedResponse.products
        return actualData
    } catch (error) {
        console.log(error)
    }
}

async function renderProducts(){
    let productContainer = document.getElementById('product-container')

    myProducts = await fetchProducts()

    for(let i = 0; i < myProducts.length; i++){

        let newElement = document.createElement('p')

        newElement.innerText = `Product: ${myProducts[i].title} Description: ${myProducts[i].description}`
        newElement.style.textAlign = 'center'
        newElement.style.color = 'white'
        newElement.style.display = 'inline-block'

        productContainer.appendChild(newElement)
    }
}

renderProducts()


async function fetchPosts() {
    try {
        let response = await fetch('https://dummyjson.com/posts')
        let translatedResponse = await response.json()
        let postData = translatedResponse.posts
        return postData
    } catch (error) {
        console.log(error)
    }
}

async function renderPosts(){
    let postContainer = document.getElementById('post-container')

    let myPost = await fetchPosts()

    for(let i = 0; i < myPost.length; i++){
        let newElement = document.createElement('p')

        newElement.innerText = `Post: ${myPost[i].title} Description: ${myPost[i].body} Tags: ${myPost[i].tags}`
        newElement.style.textAlign = 'center'
        newElement.style.color = 'white'
        newElement.style.display = 'inline-block'

        postContainer.appendChild(newElement)
    }
}

renderPosts()