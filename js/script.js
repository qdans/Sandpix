document.addEventListener("DOMContentLoaded", () => {
    const dropZone = document.getElementById("drop-zone");
    const fileInput = document.getElementById("file-input");
    const downloadBtn = document.getElementById("download-btn");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let uploadedImage = null;

    dropZone.addEventListener("click", () => fileInput.click());
    
    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropZone.classList.add("dragover");
    });
    
    dropZone.addEventListener("dragleave", () => dropZone.classList.remove("dragover"));
    
    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.classList.remove("dragover");
        const file = event.dataTransfer.files[0];
        handleImageUpload(file);
    });

    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0];
        handleImageUpload(file);
    });

    function handleImageUpload(file) {
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage = new Image();
                uploadedImage.src = e.target.result;
                uploadedImage.onload = () => {
                    canvas.width = uploadedImage.width;
                    canvas.height = uploadedImage.height;
                    ctx.drawImage(uploadedImage, 0, 0);
                };
            };
            reader.readAsDataURL(file);
        }
    }

    downloadBtn.addEventListener("click", () => {
        if (!uploadedImage) return;
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "pixel-art.png";
        link.click();
    });
});
