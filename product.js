
var productArray = [

{name:"Creative Christmas", desc: "Share your holiday happiness.", price:"$29.99", img:"images/christmas.jpg"},
{name:"Colorful Animals", desc:"Sweet animals you can use your imagination to add color.", price:"$17.99", img:"images/animals.jpg"},
{name:"Beards and Bacon the hipster coloring book", desc:"As colorful as reclaimed wood.", price:"$10.99", img:"images/hipster.jpg"},
{name:"Mandala Magic", desc:"Like yoga on the page.", price:"$9.99", img:"images/mandala.jpg"},
{name:"Lost Ocean", desc:"As relaxing as the low tide.", price:"$29.99", img:"images/ocean.jpg"},
{name:"Under the Sea", desc:"Beautiful seascape to float away with.", price:"$12.99", img:"images/sea.jpg"},
{name:"Game of Thrones", desc:"Relive your favorite dramatic scenes - this time, you get to direct.", price:"$12.99", img:"images/thrones.jpg"},
{name:"Tropical World", desc:"Take a vacation with your crayons.", price:"$12.99", img:"images/tropical.jpg"},
{name:"Sweary Coloring Book", desc:"Make your colorful language even more colorful!", price:"$12.99", img:"images/swear.jpg"}
]

document.getElementById("products").innerHTML = "";
for (var i = 0; i < productArray.length; i++) {
 document.getElementById("products").innerHTML += "<div class='items'><h3 class='title'>" + productArray[i].name + "</h3>" + "<img src='" + productArray[i].img +"'>" + "<p class='description'>Description</p><p class='description-text'>" + productArray[i].desc + "</p><p class='price'>Your Price</p><p class='price-text'>" + productArray[i].price + "</p><p class='button'>Add to Cart</p>" + "</div>";
}
 

// original js
// for (var i = 0; i < productArray.length; i++) {
//  document.getElementById("products").innerHTML += "<div class='items'><h3 class='title'>" + productArray[i].title + "</h3>" + "<img src='" + productArray[i].imageURL +"'>" + "<p class='description'>Description</p><p class='description-text'>" + productArray[i].description + "</p><p class='price'>Your Price</p><p class='price-text'>" + productArray[i].price + "</p><p class='button'>Add to Cart</p>" + "</div>";
// // }
// /*Changes made on 2-11: 
// had to change description to desc in line 17 as in: productArray[i] desc

 
