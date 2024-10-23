document.addEventListener('DOMContentLoaded', function() {
    const qrcodeContainer = document.querySelector('.qrcode');
    const urlInput = document.getElementById('urlInput');
    const generateBtn = document.getElementById('generateBtn');

    function generateQRCode() {
        const url = urlInput.value;
        if (url) {
            qrcodeContainer.innerHTML = '';
            new QRCode(qrcodeContainer, url);
        }
    }

    urlInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            generateQRCode();
        }
    });

    generateBtn.addEventListener('click', generateQRCode);
});
