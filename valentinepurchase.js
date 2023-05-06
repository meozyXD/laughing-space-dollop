const products = [
    {
      name: "candyOne",
      price: 1000,
      description: "Candy",
      type: "chocolate",
      image:
        "https://m.media-amazon.com/images/I/71Wcpwfv7rL.jpg",
    },
    {
      name: "candyTwo",
      price: 1200,
      description: "Candy",
      type: "gummy",
      image:
        "https://m.media-amazon.com/images/I/91lrDfBRyzL.jpg",
    },
    {
      name: "candyThree",
      price: 2300,
      description: "Candy",
      type: "chocolate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhWxrzR2a6b4lT2Bk4CxVO_DK-y5SHQ11jyPnrtJRyWkH0tZlhWf-4Qgehw9bU1nO7zw&usqp=CAU",
    },
    {
      name: "candyFour",
      price: 550,
      description: "Candy",
      type: "gummy",
      image:
        "https://www.foodandwine.com/thmb/-cbOvOHcKJnY1s0yoAPOhO-rzGA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/conversation-hearts-FT-BLOG0120-8d5e974641d54d648b45f261488adc61.jpg",
    },
    {
      name: "candyFive",
      price: 3200,
      description: "Candy",
      type: "chocolate",
      image:
        "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639762795-3-1639762790.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      name: "candyOne",
      price: 1000,
      description: "Candy",
      type: "chocolate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ0JhjEbOvo3sGnUhwEg84dBSnfvhwCy-4D8ylyT9O0LE12UinUGivTuMx_3Meo723m_c&usqp=CAU",
    }
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