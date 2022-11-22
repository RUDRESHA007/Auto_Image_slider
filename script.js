const date = new Date();
const second = date.getSeconds() ;
console.log(second);


const image = document.querySelector(".image");
console.log(image.length)
setInterval(() => {

     image.append(image.children[0]);

}, 1000);





