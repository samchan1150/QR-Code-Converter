const generateBtn = document.getElementById('generateBtn');
const linkInput = document.getElementById('linkInput');
const qrcodeContainer = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
    const link = linkInput.value;
    if (link.trim() === '') {
        alert('Please enter a link.');
        return;
    }
    // Clear previous QR code
    qrcodeContainer.innerHTML = '';
    // Generate new QR code
    new QRCode(qrcodeContainer, link);
});