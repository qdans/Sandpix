const uploadInput = document.getElementById('upload-input');
const uploadArea = document.getElementById('upload-area');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('download-btn');

uploadArea.addEventListener('click', () => uploadInput.click());
uploadInput.addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function() {
            const size = 300;
            canvas.width = size;
            canvas.height = size;
            ctx.drawImage(img, 0, 0, size, size);
            applyPixelation();
        };
    };
    reader.readAsDataURL(file);
}

function applyPixelation() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    for (let i = 0; i < pixels.length; i += 4) {
        const avg = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
        pixels[i] = avg;
        pixels[i + 1] = avg;
        pixels[i + 2] = avg;
    }
    ctx.putImageData(imageData, 0, 0);
}

downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'pixelated.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
});
