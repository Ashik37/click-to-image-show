const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const img = document.querySelector(".img");

btn1.addEventListener("click", function(){
    img.src = "image/1.jpg";
});
btn2.addEventListener("click", function(){
    img.src = "image/2.jpg";
});
btn3.addEventListener("click", function(){
    img.src = "image/3.jpg";
});