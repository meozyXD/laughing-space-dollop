const products = [
    {
      name: "candyOne",
      price: 1000,
      description: "Candy",
      type: "chocolate",
      image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81StWn1bAuL.jpg"
    },
    {
      name: "candyTwo",
      price: 1200,
      description: "Candy",
      type: "gummy",
      image:
        "https://m.media-amazon.com/images/I/91+VZsLW8+L.jpg",
    },
    {
      name: "candyThree",
      price: 2300,
      description: "Candy",
      type: "chocolate",
      image:
        "https://www.spanglercandy.com/media/catalog/product/cache/f93d626b5df97b7785a35bf5b2bd3381/m/i/mintss8001801-1_2.jpg",
    },
    {
      name: "candyFour",
      price: 550,
      description: "Candy",
      type: "gummy",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "candyFive",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://cdn.shopify.com/s/files/1/0279/6329/3831/products/IMG_7057_1024x1024.jpg?v=1649306527",
    },
  ];
  
  function PrintProducts() {
    const productsContainer = document.getElementById("products");
    let newDiv = "";
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
  
      //console.log(${product.name} - ${product.price});
  
      const div = document.createElement("div");
      div.classList.add("product");
      div.innerHTML = `
        <img class='productImage' src="${product.image}"
        <h3 class="title">${product.name}</h3>
        <p>${product.description}</p>
        <p id="price">${product.price}</p>
        <button onclick="AddItem('${product.name}')">add</button>
        <button onclick="MinusItem('${product.name}')">minus</button>
      `;
  
      newDiv += div.outerHTML;
    }
  
    productsContainer.innerHTML = newDiv;
  }
  
  window.onload = PrintProducts;
  
  const userbasket = [];
  
  function AddItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity += 1;
    } else {
      userbasket.push({ name: itemName, quantity: 1 });
    }
  
    Basket();
  }
  
  function MinusItem(itemName) {
    const itemIndex = userbasket.findIndex((item) => item.name === itemName);
  
    if (itemIndex !== -1) {
      userbasket[itemIndex].quantity -= 1;
  
      if (userbasket[itemIndex].quantity === 0) {
        userbasket.splice(itemIndex, 1);
      }
    }
  
    Basket();
  }
  
  function Purchase() {
    let total = 0;
    for (let i = 0; i < userbasket.length; i++) {
      const { name, quantity } = userbasket[i];
      const product = products.find((p) => p.name === name);
      if (product) {
        total += product.price * quantity;
      }
    }
  
    document.getElementById("total").innerHTML = total;
    Clear();
  }
  
  function Clear() {
    userbasket = [];
  }
  
  function Basket() {
    const basketDiv = document.getElementById("basket");
    const basketHtml = userbasket
      .map(
        ({ name, quantity }) => `
      <h1>${name} - ${quantity}</h1>
    `
      )
      .join("");
    basketDiv.innerHTML = basketHtml;
  }