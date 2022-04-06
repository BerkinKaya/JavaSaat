const user = prompt ("Lütfen Kullanıcı Adı Giriniz")

if (user) {
document.getElementById('isim').innerHTML= ` Merhaba ${user}! Hoşgeldin! `;
    
}

var bugun = new Date();
document.getElementById("tarihGoster").innerHTML = Tarihinde;