// Menunggu sampai halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

    // Ambil tombol dan gambar dari HTML
    const tombol = document.getElementById("tombolPromo");
    const gambar = document.getElementById("gambarCrepes");

    // Event kalau tombol diklik
    tombol.addEventListener("click", function () {
        alert("Promo spesial! Beli 2 gratis 1 🍓");
    });

    // Efek klik pada gambar
    gambar.addEventListener("click", function () {
        gambar.src = "crepes2.jpg"; // ganti ke gambar lain
    });

});
