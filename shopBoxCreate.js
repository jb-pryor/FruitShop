

function createShopBox (name, cost, imageName) {

  const divBox = document.createElement('div');
  divBox.classList.add('shopBox');
  const image = document.createElement('img');
  image.src = imageName;
  const nameCreate = document.createElement('div');
  nameCreate.textContent = name;
  nameCreate.classList.add('name');
  const costCreate = document.createElement('div');
  costCreate.textContent = cost;
  costCreate.classList.add('cost');
  const cartButton = document.createElement('button');
  cartButton.textContent = 'Add to cart';

  divBox.appendChild(image);
  divBox.appendChild(nameCreate);
  divBox.appendChild(costCreate);
  divBox.appendChild(cartButton);

  const container = document.querySelector('.shopContainer');
  container.appendChild(divBox);
}

createShopBox('Strawberry', '$4.50', 'images/strawberry.png');
createShopBox('Carrot', '$2.50', 'images/carrot.png');
createShopBox('Dragonfruit', '$6.50', 'images/drawgonfruit.png');
createShopBox('Cabbage', '$4.50', 'images/cabbage.png');
createShopBox('Cauliflower', '$2.50', 'images/cauliflower.png');
createShopBox('Eggplant', '$6.50', 'images/eggplant.png');
createShopBox('Kale', '$4.50', 'images/green.png');
createShopBox('Kiwi', '$2.50', 'images/kiwi.png');
createShopBox('Mango', '$6.50', 'images/mango.png');
createShopBox('Orange', '$4.50', 'images/orange.png');
createShopBox('Pear', '$2.50', 'images/pear.png');
createShopBox('Tomato', '$6.50', 'images/tomato.png');