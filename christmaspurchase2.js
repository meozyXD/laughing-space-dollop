const products = [
    {
      name: "CHRISTMAS PACK",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://www.mlive.com/resizer/LhvJ26-krbzvQkjww22VVvkapjU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/B6O7ZEGTVZFZRB3BJFQGEJIKGI.jpg",
    },
    {
        name: "nicecandy",
        price: 1000,
        description: "2000",
        type: "chocolate",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXx5-60HCYj_bLs3r9_WN09TLUT9G4Z16uqA&usqp=CAU",
    },
    {
        name: "cane candy",
        price: 1000,
        description: "2000",
        type: "chocolate",
        image:
          "https://w7.pngwing.com/pngs/727/911/png-transparent-candy-cane-christmas-christmas-candy-food-candy-corn-lollipop-thumbnail.png",
    },
    {
        name: "CANDY PACK",
        price: 1000,
        description: "2000",
        type: "chocolate",
        image:
          "https://cdn.shopify.com/s/files/1/2028/7269/products/ChristmasCandyPartyTray_2022_grande.jpg?v=1659481356",
    },
    {
      name: "SANTA PACK",
      price: 1200,
      description: "2400",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp98eYJWwwMROs_YcnAG0NFB65bXHuSiq0Kw&usqp=CAU",
    },
    {
      name: "CHOCOLATES PACK",
      price: 2300,
      description: "4600",
      type: "chocolate",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/christmas-candy-calendar-1669836126.png?crop=0.963xw:0.963xh;0.0208xw,0.0228xh&resize=1920:*",
    },
    {
      name: "ICE CREAM PACK",
      price: 550,
      description: "1050",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyznODiVlFZsLsVUg_1AY8DK2lreILV-MSgg&usqp=CAU",
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