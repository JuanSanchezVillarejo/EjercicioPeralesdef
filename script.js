<script>
$.ajax("https://fakestoreapi.com/products", {
dataType: 'json',
success: function (data) {
    $(".titulo0").append(data[0].title);
    $(".titulo1").append(data[1].title);
    $(".titulo2").append(data[2].title);
    $(".titulo3").append(data[3].title);
    $(".titulo4").append(data[4].title);

    $(".imagen0").append(' <img src ="'+data[0].image+'\" class = "img">');
    $(".imagen1").append(' <img src ="'+data[1].image+'\" class = "img">');
    $(".imagen2").append(' <img src ="'+data[2].image+'\" class = "img">');
    $(".imagen3").append(' <img src ="'+data[3].image+'\" class = "img">');
    $(".imagen4").append(' <img src ="'+data[4].image+'\" class = "img"s>');

},
error: function (jqXHR, texStatus, error) {
    alert("Error:" + texStatus + " " + error);
}
});
</script>