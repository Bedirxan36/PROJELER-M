const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

// Sayfa yüklendiğinde bir şaka getir
generateJoke()

function generateJoke() {
  // Türkçe Soğuk Espri Havuzu
  const sakalar = [
    "Adamın biri gülmüş, saksıya koymuşlar.",
    "Geçen gün taksi çevirdim hala dönüyor.",
    "Yıkanan tona ne denir? Washington.",
    "Ben yedigün içiyorum sen onbeşgün iç.",
    "En temiz böcek hangisidir? Hamamböceği.",
    "Adamın biri güneşte yanmış, ay da düz.",
    "Ben kahve içiyorum, Nurgül Yeşilçay.",
    "Hangi çiçek hem kafaya takılır hem de içinde yazı yazılır? Kabak çiçeği.",
    "İngilizler benzinliği neden sever? Çünkü 'Pump' oradadır.",
    "Siviller hangi dili konuşur? Sivilce.",
    "Kelebekler benzin içerse ne olur? 'Kele-Benzin' olur.",
    "4. Murat neden intihar etmiş? İlk 3'e giremediği için.",
    "Temel taşıt, kim sallar?",
    "Masada hangi örtü kullanılmaz? Bitki örtüsü.",
    "Röntgen Filmi çektirdik, yakında sinemalarda.",
    "Gidenin arkasından dizlerini dövme, ah dizim vah dizim dersin.",
    "Adamın kafası atmış, bacakları eşek."
  ]

  // Listeden rastgele bir sayı belirle
  const rastgeleSayi = Math.floor(Math.random() * sakalar.length)

  // Seçilen şakayı ekrana yaz
  jokeEl.innerHTML = sakalar[rastgeleSayi]
}