const products = [
    {
      name: "Trolli",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70qlyXFgfRcnQz5IhFiLUTJBEiQe15iY87Q&usqp=CAU",
    },
    {
      name: "VALCHOCO",
      price: 1200,
      description: "2400",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOeWAwx-jfXhXs0PreLfEC8y7J_Jqt_MwdA&usqp=CAU",
    },
    {
      name: "FUNDIP",
      price: 2300,
      description: "4600",
      type: "chocolate",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/01/best-valentine-s-day-candy-fun-dip.png?fit=728%2C524",
    },
    {
      name: "CHOCO",
      price: 550,
      description: "1050",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYU9_aSQOkBYfmsYCp_JQBRm0Su2URHxeIg&usqp=CAU",
    },
    {
        name: "BUTTERFINGERS",
        price: 2050,
        description: "3050",
        type: "gummy",
        image:
          "https://1.bp.blogspot.com/-m40UIdHDJp0/UuSM1e2CfmI/AAAAAAAAH6s/sfuNAas4DDY/s1600/1+ps+Valentine+Butterfinger+(15).jpg",
      },
      {
        name: "THREATS",
        price: 4000,
        description: "6000",
        type: "gummy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTznDQxxSoLUNRvI0IB6mLppyMlASVwh-diRA&usqp=CAU",
      },
      {
        name: "CHOCOPACK",
        price: 1000,
        description: "2000",
        type: "gummy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcyg-IrMmtOf13v7fyzuaQmlQcv9NvnNCxax6HvMNhe_nUDqJT6Qg3jB8ywVC8CsM3Xg&usqp=CAU",
      },
      {
        name: "XOXO",
        price: 3600,
        description: "7200",
        type: "gummy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5xg2lUpHv2bdva-5HXlRQbkMEFEXy9J2EFQ&usqp=CAU",
      },
      {
        name: "HUBBA",
        price: 5000,
        description: "10000",
        type: "gummy",
        image:
          "https://m.media-amazon.com/images/I/91+VZsLW8+L.jpg",
      },
      {
        name: "BRACHTINY",
        price: 4200,
        description: "8400",
        type: "gummy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uJkbFZDNvH1Zn6lAnhVrVWzqbiG-vFwpLg&usqp=CAU",
      },
      {
        name: "CANDYPACK",
        price: 3900,
        description: "7800",
        type: "gummy",
        image:
          "https://www.spanglercandy.com/media/catalog/product/cache/f93d626b5df97b7785a35bf5b2bd3381/m/i/mintss8001801-1_2.jpg",
      },
      {
        name: "DINGDONG",
        price: 1200,
        description: "2400",
        type: "gummy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjpLc1zhJ5YuDaYgNMpPePAfgC4Z018o91OSg3jyiVg&s",
      },
      {
        name: "CookieFough",
        price: 2550,
        description: "5100",
        type: "gummy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWNQrDHVbVomWQA4ULIfjyu3QxrkUq8cymw&usqp=CAU",
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