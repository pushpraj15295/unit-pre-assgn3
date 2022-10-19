

var array= JSON.parse(localStorage.getItem("data")) || [];


array.map(function(elem,index){

    var box= document.createElement("div")

    var img= document.createElement("img")
    img.src=elem.image;

    var brand= document.createElement("h2")
     brand.innerText= elem.brand;

    var name = document.createElement("h4")
      name.innerText= elem.name;

    var price = document.createElement("p")
    price.innerText= elem.price;

    var btn = document.createElement("button")
    btn.innerText="remove"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click", function(){
        
        call(index)
    })

    box.append(img,brand,name,price,btn)

    document.querySelector("#products_data").append(box)
})

function call(index) {

     array.splice(index,1)

     localStorage.setItem("data",JSON.stringify(array))

     window.location.reload()
}