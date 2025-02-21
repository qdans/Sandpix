document.addEventListener('DOMContentLoaded', () => {
    const dropArea = document.getElementById('drop-area');
    const previewImage = document.getElementById('preview');
    const resetButton = document.getElementById('reset-image');
    const downloadButton = document.querySelector('.download-btn');
    const formatButtons = document.querySelectorAll('.format-btn');
    let selectedFormat = 'png';
    let uploadedImage = null;

    // Handle file drop
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.style.borderColor = 'gold';
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.style.borderColor = 'white';
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.style.borderColor = 'white';
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                uploadedImage = event.target.result;
                previewImage.src = uploadedImage;
                previewImage.classList.remove('hidden');
                resetButton.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
        }
    });

    // Reset image
    resetButton.addEventListener('click', () => {
        previewImage.src = '';
        previewImage.classList.add('hidden');
        resetButton.classList.add('hidden');
        uploadedImage = null;
    });

    // Handle format selection
    formatButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedFormat = button.textContent.toLowerCase();
        });
    });

    // Download image
    downloadButton.addEventListener('click', () => {
        if (!uploadedImage) return;
        const link = document.createElement('a');
        link.href = uploadedImage;
        link.download = `sandpix_image.${selectedFormat}`;
        link.click();
    });

    // Apply animation effects
    document.querySelectorAll('.pixel-font, .pixel-title, .drop-container, .download-btn').forEach(el => {
        el.classList.add('animated');
    });
});
