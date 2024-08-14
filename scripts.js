function toggleMenu() {
  const navbarContainer = document.querySelector('.navbar-menu');
  navbarContainer.classList.toggle('active');
}

function validateText(text) {
  const regex = /^[a-z]+$/;
  return regex.test(text);
}

function encryptText() {
  const text = document.getElementById('text-to-encrypt').value;

  if (!validateText(text)) {
    alert('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
    return;
  }

  const encryptedText = text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  
  document.getElementById('encrypted-text').textContent = encryptedText;
}

function decryptText() {
  const encryptedText = document.getElementById('encryptedText').value;

  if (!validateText(encryptedText.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u'))) {
    alert('El texto encriptado debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
    return;
  }

  const decryptedText = encryptedText
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  document.getElementById('outputText').textContent = decryptedText;
}

function copyToClipboard(elementId) {
  const text = document.getElementById(elementId).textContent;
  navigator.clipboard.writeText(text)
    .then(() => alert('Texto copiado al portapapeles'))
    .catch(err => alert('Error al copiar el texto: ' + err));
}
