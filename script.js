function udostepnijQR() {
  var kodQRDiv = document.getElementById('kodQR');
  var message = document.getElementById('message');
  if (!navigator.share){
    setStyles(message, 0, -3)
  }else {
    setStyles(message, 1, 3)
  }

  setStyles(kodQRDiv, 1, 3)
  kodQRDiv.style.pointerEvents = 'auto';
}

function setStyles(element, opacity, zIndex) {
  if (opacity !== ''){
    element.style.opacity = opacity;
  }
  if (zIndex !== ''){
    element.style.zIndex = zIndex;
  }
}

function sendMessage(){
  var tekstDoQR = window.location.href;

  var wiadomosc = "Wirtualna Wizytówka";
  if (navigator.share) {
    navigator.share({
      title: "Tartak Wądroże Małe",
      text: wiadomosc,
      url: tekstDoQR
    })
      .then(() => textInfo("Wysłanie wiadomości zakończone powodzeniem"))
      .catch((error) => console.error('Błąd podczas udostępniania: ', error));
  } else {
    alert("Niestety próba załadowania listy aplikacji, których można użyć do udostępnienia treści zakończyła się niepowodzeniem");
  }
}

function showQrCode(){
  var kodQRDiv = document.getElementById('qr'); // Use 'qr' for the first assignment
  var sharing = document.getElementById('sharing');
  var qrButton = document.getElementById('qrButton');

  if (kodQRDiv.style.opacity === '0'){
    sharing.style.opacity = '0';
    setStyles(kodQRDiv, 1, 2);
    qrButton.style.zIndex = '2';
  }else{
    sharing.style.opacity = '1';
    setStyles(kodQRDiv, 0, -1);
    qrButton.style.zIndex = '-1';
  }
}

function showOffer() {
  var offerDiv = document.getElementById('offer');
  offerDiv.style.pointerEvents = 'auto';
  setStyles(offerDiv, 1, 3);

  var contactIcons = document.querySelectorAll('.data a i');
  contactIcons.forEach(icon => {
    icon.style.color = 'transparent';
  });
}
function hiddeOffer(id, event) {
  var offerDiv = document.getElementById(id);

  if (event.target.tagName.toLowerCase() !== 'p' || id !== 'kodQR') {
    setStyles(offerDiv, 0, -1)
    offerDiv.style.pointerEvents = 'auto';
    location.href = '#';

    var contactIcons = document.querySelectorAll('.data a i');
    contactIcons.forEach(icon => {
      icon.style.color = 'white';
    });
  }
}

function copyLink(){
  var currentUrl = window.location.href;

  // Skopiuj adres do schowka
  navigator.clipboard.writeText(currentUrl).then(function() {
    textInfo("Adres strony pomyślnie skopiowany do schowka");
  }).catch(function(err) {
    textInfo("Próba skopiowania adresu strony nieudana");
  });
}

function textInfo(text) {
  var infoDiv = document.getElementById('infoDiv');
  var infoText = document.getElementById('text');
  console.log(text);

  setStyles(infoDiv, 1, 7)
  infoText.textContent = text;  // Użyj textContent zamiast text

  setTimeout(function () {
    setStyles(infoDiv, 0, -4)
  }, 6000);
}