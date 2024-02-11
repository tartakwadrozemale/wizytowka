function udostepnijQR() {
  var kodQRDiv = document.getElementById('kodQR');
  var message = document.getElementById('message');
  if (!navigator.share){
    message.style.opacity = '0'
    message.style.zIndex = '-3'
  }else {
    message.style.opacity = '1'
    message.style.zIndex = '3'
  }

  kodQRDiv.style.opacity = 1;
  kodQRDiv.style.pointerEvents = 'auto';
  kodQRDiv.style.zIndex = '3';
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
    kodQRDiv.style.opacity = '1';
    kodQRDiv.style.zIndex = '2';
    qrButton.style.zIndex = '2'
  }else{
    sharing.style.opacity = '1';
    kodQRDiv.style.zIndex = '-1';
    qrButton.style.zIndex = '-1' 
    kodQRDiv.style.opacity = '0';
  }
}

function showOffer() {
  var offerDiv = document.getElementById('offer');
  offerDiv.style.opacity = 1;
  offerDiv.style.pointerEvents = 'auto';
  offerDiv.style.zIndex = '3';

  var contactIcons = document.querySelectorAll('.data a i');
  contactIcons.forEach(icon => {
    icon.style.color = 'transparent';
  });
}
function hiddeOffer(id, event) {
  var offerDiv = document.getElementById(id);

  if (event.target.tagName.toLowerCase() !== 'p' || id !== 'kodQR') {
    offerDiv.style.opacity = 0;
    offerDiv.style.pointerEvents = 'auto';
    location.href = '#';
    offerDiv.style.zIndex = '-1';

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
    alert("Próba skopiowania adresu strony nieudana");
  });
}
function textInfo(text) {
  var infoDiv = document.getElementById('infoDiv');
  var infoText = document.getElementById('text');
  console.log(text);

  infoDiv.style.opacity = '1';
  infoDiv.style.zIndex = '7';
  infoText.textContent = text;  // Użyj textContent zamiast text

  setTimeout(function () {
    infoDiv.style.opacity = '0';
    infoDiv.style.zIndex = '-4';
  }, 6000);
}