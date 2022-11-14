
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin123" || login == "jean_otaku" && senha == "otaku123" || login == "radio_arterial" && senha == "123456" || login == "anarok" && senha=="anarok"){
        location.href = "pag01.html";
    } else{
        alert("Usuario ou senha incorretos!");
    }


}
