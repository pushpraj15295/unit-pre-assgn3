//store the products array in localstorage as "data"

var array = JSON.parse(localStorage.getItem("data")) || [];
console.log(array);

function product(i, b, n, p) {
  this.image = i;
  this.brand = b;
  this.name = n;
  this.price = p;
}

function storeProduct() {
  event.preventDefault();

  var form = document.querySelector("#product_form");

  var brand = form.product_brand.value;
  var name = form.product_name.value;
  var price = form.product_price.value;
  var image = form.product_image.value;

  let product1 = new product(image, brand, name, price);

  array.push(product1);
  //    console.log(array);
  localStorage.setItem("data", JSON.stringify(array));
}
