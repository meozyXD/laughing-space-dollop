const products = [
    {
      name: "COOKIE",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://bakerbynature.com/wp-content/uploads/2021/12/30-Gift-Worthy-Chirtsmas-Candy-Recipes-1-of-1.jpg",
    },
    {
      name: "CHRISTMAS CANDY",
      price: 1200,
      description: "2400",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-zllH5H3qu5pt_JGw64Sj2Ycz2BVB6nkVQ&usqp=CAU",
    },
    {
      name: "SNOWCANDY PACK",
      price: 2300,
      description: "4600",
      type: "chocolate",
      image:
        "https://i2.wp.com/www.twosisterscrafting.com/wp-content/uploads/2017/10/christmas-candy-centerpiece-main.jpg",
    },
    {
      name: "SOUR PATCH",
      price: 550,
      description: "1050",
      type: "gummy",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/best-christmas-candy-copy-1667940593.jpg",
    },
    {
        name: "CHOCO PACKAGE",
        price: 2050,
        description: "3050",
        type: "gummy",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/delish-christmas-fudge-vertical-1542310113.png?resize=480:*",
      },
      {
        name: "CHOCOLATE",
        price: 4000,
        description: "6000",
        type: "gummy",
        image:
          "https://b1925919.smushcdn.com/1925919/wp-content/uploads/2020/12/christmas-dessert-recipe-823x1024-1.jpeg?lossy=1&strip=1&webp=1",
      },
      {
        name: "HOT CHOCO",
        price: 1000,
        description: "2000",
        type: "gummy",
        image:
          "https://www.vermontcountrystore.com/ccstore/v1/images/?source=/file/v6734393258320544520/products/65235.ast.png&height=475&width=475",
      },
      {
        name: "XOXO",
        price: 3600,
        description: "7200",
        type: "gummy",
        image:
          "https://parade.com/.image/t_share/MTkwNTgwMjgxMzAxODY5Njkz/peppermintbark2_bakedbyrachel.jpg",
      },
      {
        name: "ICE CREAM",
        price: 5000,
        description: "10000",
        type: "gummy",
        image:
          "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/10/36/86/SXoGEFFiSny5hiK2lNv6_candy-cane-sleighs-02139.jpg",
      },
      {
        name: "CANDY",
        price: 3900,
        description: "7800",
        type: "gummy",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY9C8N0iB7ki7pLRP-SG0bNH7Bbd12FGTVSQqtFPxGzaVeFaHQzOO9DCiwIyq6JQ5La0&usqp=CAU",
      },
      {
        name: "CANDY",
        price: 1200,
        description: "2400",
        type: "gummy",
        image:
          "https://i2.wp.com/www.twosisterscrafting.com/wp-content/uploads/2019/11/christmas-dessert-board-1200-candy.jpg",
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