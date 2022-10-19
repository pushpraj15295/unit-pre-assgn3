function userdetail(n,c,e,p,p){
    this.name = n;
    this.contact = c;
    this.email = e;
    this.pass = p;
    this.repass = p;
}
var data = JSON.parse(localStorage.getItem(data))||[]

function userData(){
    event.preventDefault();
    var form = document.getElementById("Signup")
    var name = form.Uname.value;
    var contact = form.Ucontact.value;
    var email = form.Uemail.value;
    var pass = form.Upassword.value;
    var repass = form.Upassword2.value;
    if(pass == repass){
        var userCreds = new userdetail(name,contact,email,pass,repass)
        data.push(userCreds);
        alert("proceed to login page")
        localStorage.setItem('data',JSON.stringify(data));
    }
    else{
        alert("password Not same!")
    }
    
    }