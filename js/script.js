document.getElementById("uploadArea").addEventListener("click", function() {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        processImage(file);
    }
});

function processImage(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");

            // Set canvas size
            canvas.width = img.width;
            canvas.height = img.height;

            // Apply pixelation effect (Basic implementation)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Implement further pixelation logic based on user selection (not included here)
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

document.getElementById("downloadBtn").addEventListener("click", function() {
    const canvas = document.getElementById("canvas");
    const format = document.getElementById("formatSelect").value;
    const link = document.createElement("a");

    link.download = `sandpix-image.${format}`;
    link.href = canvas.toDataURL(`image/${format}`);
    link.click();
});
