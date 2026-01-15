function abrirWhatsapp() {

    let numero = "51913287440";
    let mensaje = "Hola, vi tu página web y quiero información";

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");
}
