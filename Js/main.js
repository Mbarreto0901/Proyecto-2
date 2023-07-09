const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});


 window.addEventListener("load", function() {
    document.getElementById("alerta").addEventListener("click", function(){
    alert("Tu Mensaje ha sido enviado, Gracias")})
 })

    const boldButton = document.getElementById('boldButton');
    const text= document.getElementById('text');

    boldButton.addEventListener('click', function() {
        if (text.classList.contains('bold'))
        {
         text.classList.remove('bold');
        } else{
            text.classList.add('bold'); 
        }
         });
        
       
