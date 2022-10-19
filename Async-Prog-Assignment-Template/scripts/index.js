var array = [
  [
    "https://images.unsplash.com/photo-1649878190052-d00375ef7398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8aFNQNkp4OHc0WjR8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
  ],

  [
    "https://images.unsplash.com/photo-1649878200204-9c08cda26d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGhTUDZKeDh3NFo0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ],

  [
    "https://images.unsplash.com/photo-1649878195726-2d4cf571f904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGhTUDZKeDh3NFo0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ],
  [
    "https://images.unsplash.com/photo-1649878192983-470e5c6e56f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8aFNQNkp4OHc0WjR8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
  ],
];

let image_div = document.getElementById("slideshow");
let i = 0;

let img = document.createElement("img");

setInterval(function () {
  if (i == array.length - 1) {
    i = 0;
  }

  img.src = array[i];

  image_div.append(img);

  i++;
}, 2000);

//   movie list ‘name, release date, poster (add url of a poster), IMDb rating, etc.

movieArray = [
  { image: "https://img.soap2day.rs/resize/178x268/4f/00/4f000c10d4e9b22066ffa3fc5155541e/4f000c10d4e9b22066ffa3fc5155541e.jpg", name: "X", releaseDate: "15-feb", rating: 9.5 },
  { image: "https://img.soap2day.rs/resize/178x268/44/54/4454b905c18670de60b09fd624fccd0c/4454b905c18670de60b09fd624fccd0c.jpg", name: "SPIDER-MAN: NO WAY HOME", releaseDate: "16-march", rating:7.6 },
  { image: "https://img.soap2day.rs/resize/178x268/21/2d/212d2d95b9d515504a4de227d49a769f/212d2d95b9d515504a4de227d49a769f.jpg", name: "THE BATMAN", releaseDate: "16-fab", rating: 7 },
  { image: "https://img.soap2day.rs/resize/178x268/17/6a/176a20f346fd851a98c88f6c46acb6f5/176a20f346fd851a98c88f6c46acb6f5.jpg", name: "ALL THE OLD KNIVES", releaseDate: "17-fab", rating: 6},
  { image: "https://img.soap2day.rs/resize/178x268/07/ee/07ee1d0becc43df040a6c8e500c8f249/07ee1d0becc43df040a6c8e500c8f249.jpg", name: "INFINITE STORM", releaseDate: "18-fab", rating: 4 },
  { image: "https://img.soap2day.rs/resize/178x268/91/73/9173b5f3c471eb1ee522b0aeda98821a/9173b5f3c471eb1ee522b0aeda98821a.jpg", name: "MOONFALL", releaseDate: "10-jun", rating: 8 },
  { image: "https://img.soap2day.rs/resize/178x268/52/e7/52e73712ff776222f6d8b666bb7334b3/52e73712ff776222f6d8b666bb7334b3.jpg", name: "TURNING RED", releaseDate: "28-oct", rating: 3},
  { image: "https://img.soap2day.rs/resize/178x268/43/6a/436a437777a1783ab18e985600744cb8/436a437777a1783ab18e985600744cb8.jpg", name: "METAL LORDS", releaseDate: "10-jan", rating: 7 },
  { image: "https://img.soap2day.rs/resize/178x268/1b/f2/1bf2262fec02cece53401463f55f4cb4/1bf2262fec02cece53401463f55f4cb4.jpg", name: "THE LOST CITY", releaseDate: "8-nov", rating: 6 },
];


getdata(movieArray)


function low()
{ 
  // movieArray.sort((a,b) => a.rating-b.rating)
  movieArray.sort(function(a,b){
     return a.rating - b.rating
   
  })
  console.log(movieArray);
  getdata(movieArray)

}

function high()
{
  movieArray.sort(function(a,b){
    return b.rating - a.rating
    
  })
  getdata(movieArray)

}



function getdata(movieArray) {
    
var d= document.querySelector("#movies")
d.innerHTML=null;

movieArray.forEach(function(elem){
  var box= document.createElement("div")

   var image= document.createElement("img");
   image.src=elem.image;

   var name= document.createElement("h4")
   name.innerHTML=elem.name;

   var rel= document.createElement("p")
   rel.innerHTML=elem.releaseDate;

   var rate = document.createElement("h6")
   rate.innerHTML=elem.rating;

   box.append(image,name,rel,rate)
   document.querySelector("#movies").append(box)

  
})


}






