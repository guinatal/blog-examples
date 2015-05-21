var username = document.getElementById("username");
console.log(username);

var username = document.querySelector("#userForm #username");
console.log(username);

var products = document.getElementsByClassName("product");
console.log(products);

var products = document.querySelectorAll("#productForm .product");
console.log(products);

var sum = 0;

var cells = document.querySelectorAll("#tableProducts>tbody>tr>td:nth-of-type(2)");
console.log(cells);

for (var i = 0; i < cells.length; i++)
  sum += parseFloat(cells[i].firstChild.data);

console.log(sum);
