const countdownEl = document.getElementById("countdown");
const dateInput = document.getElementById("dateInput");
const startBtn = document.getElementById("startBtn");

let timer; // interval'i saklamak için

startBtn.addEventListener("click", () => {
  // Önceki zamanlayıcıyı temizle (yeni tarih seçilirse sorun çıkmasın)
  clearInterval(timer);

  // Kullanıcının seçtiği tarihi al
  const hedefTarih = new Date(dateInput.value).getTime();

  if (!hedefTarih) {
    countdownEl.textContent = "Lütfen geçerli bir tarih seç!";
    return;
  }

  // Her saniyede geri sayımı güncelle
  timer = setInterval(() => {
    const simdi = new Date().getTime();
    const fark = hedefTarih - simdi;

    if (fark <= 0) {
      clearInterval(timer);
      countdownEl.textContent = "Süre doldu! 🎉";
      return;
    }

    const gun = Math.floor(fark / (1000 * 60 * 60 * 24));
    const saat = Math.floor((fark % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const dakika = Math.floor((fark % (1000 * 60 * 60)) / (1000 * 60));
    const saniye = Math.floor((fark % (1000 * 60)) / 1000);

    countdownEl.textContent = `${gun}g ${saat}s ${dakika}d ${saniye}sn`;
  }, 1000);
});