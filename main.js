const body = document.querySelector("body");

const values = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

function getGradientColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        const randomIndex = Math.trunc(Math.random() * values.length)
        color += values[randomIndex]
        
    }
    return color;
}

function setGradient(){
    const color1 = getGradientColor();
    const color2 = getGradientColor();
    const randomDeg = Math.trunc(Math.random() * 360);
    const bgColor = `linear-gradient(${randomDeg}deg, ${color1}, ${color2})`;
    body.style.background = bgColor;
    console.log(bgColor);
    
}

const shoppingData = [
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        category: 'Electronics',
        inStock: true,
        description: 'A high-performance laptop for professionals.',
        imageUrl: 'https://minapi.beemarket.uz/prod-media/productImages/1739278650rgO2m7EehTof.webp'
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 499.99,
        category: 'Mobile',
        inStock: true,
        description: 'A latest model smartphone with advanced features.',
        imageUrl: 'https://minapi.beemarket.uz/prod-media/productImages/1726834060TwbMtMgFOQZk.webp'
    },
    {
        id: 3,
        name: 'Headphones',
        price: 199.99,
        category: 'Cars',
        inStock: false,
        description: 'Noise-cancelling headphones for immersive sound.',
        imageUrl: 'https://servicemanuals.info/2425-large_default/audi-a7-4g-4ga-4ge-2011-to-2017-service-repair-manual-wiring-diagrams.jpg'
    },
    {
        id: 4,
        name: 'Smartwatch',
        price: 299.99,
        category: 'Electronics',
        inStock: true,
        description: 'A smartwatch with fitness tracking capabilities.',
        imageUrl: 'https://mionline.uz/image/cachewebp/catalog/02.12.2024/001/amazfitcheetah-1-600x600.webp'
    },
    {
        id: 5,
        name: 'Tablet',
        price: 399.99,
        category: 'Mobile',
        inStock: true,
        description: 'A versatile tablet for work and play.',
        imageUrl: 'https://minapi.beemarket.uz/prod-media/productImages/1729158340PgC6zIRhmA5e.webp'
    },
    {
        id: 6,
        name: 'bwm x5',
        price: 59999.99,    
        category: 'Cars',
        inStock: true,  
        description: 'A luxury SUV with advanced features.',
        imageUrl: 'https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFnz5cRoHSWRzMES0XMqmyDuciqnklfqoQaFboGlBgvHdvl38SN3uRIMESoTzLMb3uQ9YQSrjGUP3m9W8J13882q0zAan%25Ol382hhq0zkRNSQBL4QSW8zLAd8W8J1ExSnQNUMESQdoBo3UQqoQEdcNq0zj25rqoQqRrjGzIEtN3WCIqx8W8zWu3ndqogqaRVHl3ilUQ4ecRScH86oMbnMdoISyJGy536UrQ%25r9RXHW8zWubx7qogqaFH8l3ilUj8ocRScH78IMbnMd0zJyJGy5BHErQ%25r9YpHW8zWunUQqogqaGb7l3ilU%25JdcRScHzQ7MbnMdg3YyJGy5iRBrQ%25r9SnbW8zWunDRqogqaGnHl3ilU%25a1cRScHzCoMbnMdg4ayJGy5i6BrQ%25r9SejW8zWuKDQqogqaDJ%25l3ilUCQ1cRScH48WMbnMdezkyJGy5QsnrQ%25r98BYW8zWuob9qogqa3Jal3ilURQGcRScHbziMbnMdJbtyJGy5QARrQ%25r98eFW8zWuomEqogqaaInl3ilUU0dcRScHHBWMbnMdj%253yJGy5765rQbZUe8nIulBgbR9Kl38vontCcYiRCF'
    },
    {
        id: 7,
        name: 'Woomen\'s Jacket',
        price: 89.99,
        category: 'Clothing',
        inStock: true,
        description: 'A stylish jacket for',
        imageUrl: 'https://ermannofirenze.com/cdn/shop/files/55TD008EY5-MF545-02_6d350109-30d6-4771-a849-73b5f0ddac10.jpg?v=1747433624&width=360'
    },
    {
        id: 8,
        name: 'Men\'s Sneakers',
        price: 69.99,
        category: 'Footwear',
        inStock: true,
        description: 'Comfortable sneakers for everyday wear.',
        imageUrl: 'https://arianoboutique.com/97012-medium_default/nike-dunk-low-sneakers.jpg'
    },
    {
        id: 9,
        name: 'Backpack',
        price: 49.99,           
        category: 'Clothing',
        inStock: true,
        description: 'A durable backpack for travel and daily use.',
        imageUrl: 'https://sandstormkenya.com/cdn/shop/products/3011LEAMPUL_1a.jpg?v=1742480373&width=700'
    },
    {
        id: 10,
        name: 'Running Shoes',
        price: 89.99,
        category: 'Footwear',
        inStock: true,
        description: 'Lightweight running shoes for athletes.',
        imageUrl: 'https://admin.di-sport.uz/storage/thumbnails/galleries/19552/BuG5siytTAshdANJPpimU5lclHoZo7LvrDmP94mH-large.webp'
    }
]

function handleCategory(category){
    const btns = document.querySelectorAll(".btn-category");
    btns.forEach((btn)=>{
        btn.classList.remove("active"); 
        if(btn.innerText === category){
            btn.classList.add("active");
        }
    }
    )
    
    
    
    const filterData = shoppingData.filter(item => item.category === category);
    shoppingList.innerHTML = ""
    filterData.map((item)=>{
        shoppingList.innerHTML += `
        <div class="shopping-card" key="${item.id}">
            <img src="${item.imageUrl}" alt="" />
            <h3>${item.name}</h3>
            <h5>${item.description}</h5>
            <div class="sale">
              <p>${item.price}</p>
              <button>+</button>
            </div>
          </div>
    `
    })
    if(category === "All"){
        shoppingList.innerHTML = "";
        shoppingData.map((item)=>{
            shoppingList.innerHTML += `
            <div class="shopping-card" key="${item.id}">
                <img src="${item.imageUrl}" alt="" />
                <h3>${item.name}</h3>
                <h5>${item.description}</h5>
                <div class="sale">
                  <p>${item.price}</p>
                  <button>+</button>
                </div>
              </div>
        `
        })
    }
    
}

const shoppingList = document.querySelector(".shopping-cards");

shoppingData.map((item)=>{
    shoppingList.innerHTML += `
        <div class="shopping-card" key="${item.id}">
        <small>${item.inStock ? "Mavjud" : 'Hozircha qolmagan'}</small>
            <img src="${item.imageUrl}" alt="" />
            <h3>${item.name}</h3>
            <h5>${item.description}</h5>
            <div class="sale">
              <p>${item.price}</p>
              <button>+</button>
            </div>
        </div>
    `
})