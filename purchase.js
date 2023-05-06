const products = [
    {
      name: "candyOne",
      price: 1000,
      description: "Candy",
      type: "chocolate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70qlyXFgfRcnQz5IhFiLUTJBEiQe15iY87Q&usqp=CAU",
    },
    {
      name: "candyTwo",
      price: 1200,
      description: "Candy",
      type: "gummy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOeWAwx-jfXhXs0PreLfEC8y7J_Jqt_MwdA&usqp=CAU",
    },
    {
      name: "candyThree",
      price: 2300,
      description: "Candy",
      type: "chocolate",
      image:
        "https://publish.purewow.net/wp-content/uploads/sites/2/2022/01/best-valentine-s-day-candy-fun-dip.png?fit=728%2C524",
    },
    {
      name: "candyFour",
      price: 550,
      description: "Candy",
      type: "gummy",
      image:
        "https://eaglestaleonline.com/wp-content/uploads/2020/02/Cover-photo-option-II-Blake-uh-900x600.jpg",
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