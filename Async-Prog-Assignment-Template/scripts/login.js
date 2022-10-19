var data= JSON.parse(localStorage.getItem("data"))

var arrEmail=[];

var arrPass=[];

function loginData(elem)
{
    event.preventDefault();

    var form = document.getElementById("loginForm");

    var login = form.Lemail.value;
    
    var password = form.Lpassword.value;

    arrEmail.push(login);
    arrPass.push(password);

    // console.log(arr1);
    console.log(arrEmail);

    data.map(function(elem){

        if(arrEmail[arrEmail.length-1]==elem.email && arrPass[arrPass.length - 1]==elem.pass)
        {
            window.location.href="index.html"
            
        }
        else
        {
            // alert("Please inter valid details")
            // console.log("bdopjpj")
            // window.location.reload();
        }

       
    })


}