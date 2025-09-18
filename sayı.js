let gizliSayi;
let kalanHak;

function oyunuBaslat() {
    gizliSayi = Math.floor(Math.random() * 100) + 1;
    kalanHak = 5;
    document.getElementById("mesaj").textContent = "";
    document.getElementById("tahmin").value = "";
    document.getElementById("kontrolBtn").disabled = false;
    document.getElementById("tekrarBtn").style.display = "none";
}

document.getElementById("kontrolBtn").addEventListener("click", function() {
    let tahmin = Number(document.getElementById("tahmin").value);

    if (!tahmin || tahmin < 1 || tahmin > 100) {
        document.getElementById("mesaj").textContent = "Lütfen 1-100 arası geçerli bir sayı gir.";
        return;
    }

    if (kalanHak > 0) {
        if (tahmin < gizliSayi) {
            kalanHak--;
            document.getElementById("mesaj").textContent = "Daha büyük bir sayı dene! Kalan hakkın: " + kalanHak;
        } 
        else if (tahmin > gizliSayi) {
            kalanHak--;
            document.getElementById("mesaj").textContent = "Daha küçük bir sayı dene! Kalan hakkın: " + kalanHak;
        } 
        else {
            document.getElementById("mesaj").textContent = "🎉 Tebrikler! Doğru sayı: " + gizliSayi;
            document.getElementById("kontrolBtn").disabled = true;
            document.getElementById("tekrarBtn").style.display = "inline-block";
            return;
        }

        if (kalanHak === 0) {
            document.getElementById("mesaj").textContent = "😢 Hakkın bitti! Doğru sayı: " + gizliSayi;
            document.getElementById("kontrolBtn").disabled = true;
            document.getElementById("tekrarBtn").style.display = "inline-block";
        }
    }
});

document.getElementById("tekrarBtn").addEventListener("click", oyunuBaslat);


oyunuBaslat();