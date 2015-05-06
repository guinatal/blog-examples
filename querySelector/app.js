var querySelector_Click = function(){

  var name = document.querySelector("#name"), // name
      age = document.querySelector("#age"), // age
      phones = document.querySelectorAll(".phone"), // all phones
      phone1 = phones[0], // phone 1
      phone2 = phones[1], // phone 2
      phone3 = phones[2], // phone 3
      article = document.querySelector("#content > .articles > .article");

  console.log("--- querySelector_Click ---");
  console.log(name);
  console.log(age);
  console.log(phones);
  console.log(phone1);
  console.log(phone2);
  console.log(phone3);
  console.log(article);

};

var getElementById_Click = function(){

  var name = document.getElementById("name"), // name
      age = document.getElementById("age"), // age
      phones = document.getElementsByClassName("phone"), // all phones
      phone1 = phones[0], // phone 1
      phone2 = phones[1], // phone 2
      phone3 = phones[2], // phone 3
      article = document.getElementById("content");

  console.log("--- getElementById_Click ---");
  console.log(name);
  console.log(age);
  console.log(phones);
  console.log(phone1);
  console.log(phone2);
  console.log(phone3);

};
