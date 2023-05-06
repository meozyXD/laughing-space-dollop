const products = [
    {
      name: "LUNAR CANDY",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
      "data:image/jpeg;base64,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"
    },
    {
      name: "LUNAR CANDY",
      price: 1200,
      description: "2400",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkyAS_Pt2Kf2yioEEjif3srQHcmd1MtAjk7Q&usqp=CAU",
    },
    {
      name: "LUNAR CANDY",
      price: 2300,
      description: "5600",
      type: "chocolate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBMzgyDQAL4Y09AlnMTaCz13wigLrH8ex_VukNMUfWH7T-OWkdGaF628c1m9I8imFyoA&usqp=CAU",
    },
    {
      name: "LUNAR CANDY",
      price: 550,
      description: "1050",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Cc-ZbF-JZGzauEbhNFp0Jgltru0xdnfpCkamM7q2Q1fnrYRAE9KECaJXOgtIBYoN9jw&usqp=CAU",
    },
    {
      name: "LUNAR CANDY",
      price: 3200,
      description: "6400",
      type: "chocolate",
      image:
        "https://www.sugarfina.com/media/catalog/product/cache/8ad121041dce420798fc87daebcf4306/9/p/9pc_sugarfina_preset_01-angled-summer_insert-hi-res.jpg",
    },
    {
      name: "LUNAR CANDY",
      price: 1500,
      description: "3000",
      type: "chocolate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPa_NAxFi36p5prBQAm3a9mC5KWaPx0rey6g&usqp=CAU",
    },
    {
      name: "LUNAR CANDY",
      price: 1000,
      description: "2000",
      type: "chocolate",
      image:
        "https://i5.walmartimages.ca/images/Enlarge/072/866/6000206072866.jpg",
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