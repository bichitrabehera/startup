
const products = [
    {
        image: "images/demo.jpg", 
        name: 'Product 1',
        description: 'Fresh plants for your home.',
        price: 500
    },
    {
        image: 'https://example.com/plant2.jpg',
        name: 'Product 2',
        description: 'Decorative pots for your plants.',
        price: 300
    },
    {
        image: 'https://example.com/plant3.jpg', 
        name: 'Product 3',
        description: 'Organic soil for better growth.',
        price: 250
    }
];

function generateProductCards() {
    const container = document.querySelector('.product-container');

    

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <h4>Rs. ${product.price}</h4>
            <button id="btn-1">Add to cart</button>
        `;

        container.appendChild(productCard);
    });
}


generateProductCards();


