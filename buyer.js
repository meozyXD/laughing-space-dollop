const products = [
    {
      name: "Juicy Fruit",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81R3ENwsArL.jpg"
    },
    {
      name: "ORGANIC CANDY",
      price: 1200,
      description: "2400",
      type: "gummy",
      image:
        "https://images.heb.com/is/image/HEBGrocery/002187699",
    },
    {
      name: "candyThree",
      price: 2300,
      description: "5600",
      type: "chocolate",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "KitKat",
      price: 550,
      description: "1050",
      type: "gummy",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71MZdEMSOaL._SL1500_.jpg",
    },
    {
      name: "TIC TAC PACKS",
      price: 3200,
      description: "6400",
      type: "chocolate",
      image:
        "https://www.snackandbakery.com/ext/resources/ci/2022/05/25/Tic-Tac_web.jpg?1670345123",
    },
    {
      name: "BUBBLE",
      price: 1500,
      description: "3000",
      type: "chocolate",
      image: "https://i0.wp.com/magicalflavour.com/wp-content/uploads/2022/02/61EP1DEhXNL._AC_SL1500_.webp?fit=510%2C388&ssl=1",
    },
    {
      name: "candypack",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://m.media-amazon.com/images/I/81FyZI++5EL.jpg",
    },
    {
      name: "Kings",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://cdn.shopify.com/s/files/1/0507/2384/8356/products/cancig_400x.jpg?v=1611920052",
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