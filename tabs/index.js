//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.

function openPage(pageName,elmnt,color){
    // var i, tabcontent, tablinks;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for( var i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tabchange");
    for(var i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click(); 