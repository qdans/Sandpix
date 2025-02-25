document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            const preview = document.getElementById('image-preview');
            preview.innerHTML = '';
            preview.appendChild(img);
        };
    };

    reader.readAsDataURL(file);
});

document.getElementById('download-btn').addEventListener('click', function() {
    const canvas = document.getElementById('result-canvas');
    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = canvas.toDataURL();
    link.click();
});
