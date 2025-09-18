const quotes = [
  { text: "Ananı Arıyorum", author: "İso" },
  { text: "Elektronik sigara sesi", author: "İso,Cem" },
  { text: "Obi obi obi", author: "Arda" },
  { text: "Kaçma ermeni", author: "Canser" },
  { text: "Mermim gitmiyo", author: "Canser" },
  { text: "Devam eden elektronik sigara sesi", author: "Cem" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");

// Yeni alıntı seçme fonksiyonu
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteEl.textContent = `"${quote.text}"`;
  authorEl.textContent = `- ${quote.author}`;
}

// İlk açılışta rastgele alıntı gelsin
getRandomQuote();

// Butona tıklayınca yeni alıntı gelsin
newQuoteBtn.addEventListener("click", getRandomQuote);