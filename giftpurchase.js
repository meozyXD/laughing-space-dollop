const products = [
    {
      name: "BITE SIZER EASTER CANDY GIFT BOX",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91vNF6qzLXL.jpg",
    },
    {
      name: "EASTER CANDY VARIETY PACKAGE",
      price: 1200,
      description: "2400",
      type: "gummy",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81WVGKu9pIL.jpg",
    },
    {
      name: "KIDS EASTER GIFT BOX",
      price: 2300,
      description: "4600",
      type: "chocolate",
      image:
        "https://cdn.shopify.com/s/files/1/0566/9624/2363/products/KIDSCANDY-Cover-_1_-UPDATED-7-11-22_1946x.jpg?v=1671381927",
    },
    {
      name: "FUNPACK",
      price: 550,
      description: "1050",
      type: "gummy",
      image:
        "https://m.media-amazon.com/images/I/81Q-I3ZY8TL._SL1500_.jpg",
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