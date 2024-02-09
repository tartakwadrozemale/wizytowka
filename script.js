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

  var wiadomosc = "Tartak Wądroże Małe - Wirtualna Wizytówka";
  if (navigator.share) {
    navigator.share({
      title: "",
      text: wiadomosc,
      url: tekstDoQR
    })
      .then(() => console.log('Udostępniono kod QR'))
      .catch((error) => console.error('Błąd podczas udostępniania: ', error));
  } else {
    alert("Niestety próba załadowania listy aplikacji, których można użyć do udostępnienia treści zakończyła się niepowodzeniem");
  }
}

function showQrCode(){
  var kodQRDiv = document.getElementById('qr'); // Use 'qr' for the first assignment
  var sharing = document.getElementById('sharing');

  if (kodQRDiv.style.opacity === '0'){
    sharing.style.opacity = '0';
    kodQRDiv.style.opacity = '1';
    kodQRDiv.style.zIndex = '2';
  }else{
    sharing.style.opacity = '1';
    kodQRDiv.style.zIndex = '-1'; 
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
    alert("Adres strony pomyślnie skopiowany do schowka");
  }).catch(function(err) {
    alert("Próba skopiowania adresu strony nieudana");
  });
}