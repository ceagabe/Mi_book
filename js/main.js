cad = `
<div class="header-logo"> <a href="index.html"><img src="./imagenes/OIP (8).jpg" alt=""></a>
<h1>
    My book online
   
</h1>

</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="index.html">My book </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="index.html" role="button">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="series.html" role="button">Series</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="novedades.html" role="button">Novedades</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="libros_api.html" role="button">Mas Libros(API)</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="registro.html" role="button">Registro</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contactos.html" role="button">Contactos</a>
            </li>
        </ul>
    </div>
</div>

</nav> `
document.querySelector("header").innerHTML = cad

let cad2 = ` <h4>Redes Sociales</h4>
<nav class="footer"> <!-- redes sociales-->

    <a href="https://www.facebook.com/">
        <img class=navimagen src="./imagenes/facebook.png" alt=""></a>
    <a href="https://ar.linkedin.com">
        <img class=navimagen src="./imagenes/linkedin.png" alt=""></a>
    <a href="https://www.instagram.com">
        <img class=navimagen src="./imagenes/instagram.png" alt=""></a>
    <a href="https://web.telegram.org/">
        <img class=navimagen src="./imagenes/telegrama.png" alt=""></a>
    <a href="https://api.whatsapp.com/send?phone=+5491151610644">
        <img id="tel" class=navimagen src="./imagenes/whatsapp.png" alt=""> </a>
</nav>

<p> &copy; Desarrollado por GRUPO Tienda Online  </p> `

document.querySelector("footer").innerHTML = cad2