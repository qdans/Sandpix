document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("file-input");
    const dropZone = document.querySelector(".drop-zone");
    const preview = document.getElementById("preview");
    const resetBtn = document.querySelector(".reset-btn");
    const downloadBtn = document.getElementById("download-btn");
    const formatSelect = document.getElementById("format-select");

    dropZone.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", handleFile);

    function handleFile(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = () => {
            preview.src = reader.result;
            preview.classList.remove("hidden");
            resetBtn.classList.remove("hidden");
        };
        reader.readAsDataURL(file);
    }

    resetBtn.addEventListener("click", () => {
        preview.src = "";
        preview.classList.add("hidden");
        resetBtn.classList.add("hidden");
        fileInput.value = "";
    });

    downloadBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = preview.src;
        link.download = `sandpix-image.${formatSelect.value}`;
        link.click();
    });
});
