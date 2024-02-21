// let cat = {
//   name: "Honey Badger",
//   age: 3,
//   bread:"mix",
//   meow: function(){
//     alert("Meeeeoww!");
//   },
//   owner:{
//     name: "Stephenie",
//     state: "CA"
//   }
// }
// cat.name
///********XMLHttpRequest */
// let request = new XMLHttpRequest();

// request.open('GET', 'https://hplussport.com/api/products/');

// request.onload = function(){
//   let response = request.response;
//   let parsedData = JSON.parse(response);
//   console.log(parsedData);
// }
// request.send();
//********jquery 
// $.get('https://hplussport.com/api/products/',
// function(response){
//   console.log(response)
// }
// )
// *******fetch

// fetch('https://hplussport.com/api/products/')
// .then(
//   function(response){
//     return response.json();
//   }
// )
// .then(
//   function(respData){
//     console.log(respData);
//   }
// )


// fetch('https://hplussport.com/api/products/?order=name')
// .then( (response)=> response.json())
// .then(function(jsonData){
//   for(items in jsonData){
//     let body = document.body;

//     //Display all the product names
//     let productName = jsonData[items].name;
//     let div = document.createElement('div')
//     let products = document.createElement('li');
//     div.innerHTML = productName;
//     products.innerHTML = productName;
//     body.appendChild(div);

//     //Display all the product images
//     let productImg = jsonData[items].image;
//     let image = document.createElement('img');
//     image.setAttribute('src',productImg)
//     div.appendChild(image)
    
//     //Display all the product images
//     let productPrice = jsonData[items].price;
//     let price = document.createElement('h6')
//     price.innerHTML = `$${productPrice}`;
//     div.appendChild(price);
  
//     }
// })


// fetch('https://api.giphy.com/v1/gifs/random?api_key=8vBlMgGsuGXswy5qMfhID5b3kXeQJ3ZQ&tag=see+otter&rating=g')
// .then( (response)=> {
//   if(response.status==200){
//      return response.json()
//   }else{
//     console.error(response.status);
//   }
// })
// .then((jsonData)=>{
//   console.log(jsonData);
  
//     let gifUrl = jsonData.data.images.original.url;
//     let img = document.createElement('img')
//     img.setAttribute('src',gifUrl )
//     //img.innerHTML = jsonData[gif].image
//     document.body.appendChild(img);
    
//     let gitTitle = jsonData.data.title;
    
//     let titleElem  = document.createElement('h3')
//     titleElem.innerHTML = gitTitle;
//     document.body.appendChild(titleElem)
  
  
// }).catch((error)=>{
//   console.log("There is a problem",error)
// })


//fetch("https://swapi-graphql.netlify.app/.netlify/functions/index?query={allFilms{films{title}}}")
fetch("https://swapi.dev/api/films")
.then((response)=>{
    return response.json()
}).then((jsonData)=>{
   console.log(jsonData);
})

