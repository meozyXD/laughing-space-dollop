const products = [
    {
      name: "Twixx",
      price: 1100,
      description: "2200",
      type: "chocolate",
      image:
      "https://sc04.alicdn.com/kf/Uf57a25fee1394b87bea87f9ff3341ece4.jpg"
    },
    {
      name: "Snickers",
      price: 1200,
      description: "2400",
      type: "gummy",
      image:
        "https://images.albertsons-media.com/is/image/ABS/960079586-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available",
    },
    {
      name: "Bounty",
      price: 2400,
      description: "4800",
      type: "chocolate",
      image:
        "https://www.kff.co.uk/images_products/L_bounty.jpg",
    },
    {
      name: "Haribo",
      price: 550,
      description: "1050",
      type: "gummy",
      image:
        "https://m.media-amazon.com/images/I/91745c3+LFL.jpg",
    },
    {
      name: "Jolly",
      price: 3200,
      description: "6400",
      type: "chocolate",
      image:
        "https://www.hersheyland.in/content/dam/Hersheyland_India/en_in/products/jolly-rancher/JR-Lollipops-FOP.png?im=Resize=(322)",
    },
    {
      name: "M&M",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image: "https://m.media-amazon.com/images/I/612tImT7+dL.jpg",
    },
    {
      name: "Famous Amos",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71825D5OGHL.jpg",
    },
    {
      name: "Twizzler",
      price: 1600,
      description: "3200",
      type: "chocolate",
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71jcEeKRJiL.jpg",
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