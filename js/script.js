document.addEventListener("DOMContentLoaded", function () {
    const fileUpload = document.getElementById("file-upload");
    const dropArea = document.querySelector(".drop-area");
    const downloadBtn = document.getElementById("download-btn");
    const formatSelect = document.getElementById("format-select");
    let uploadedImage = null;

    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.classList.add("highlight");
    });

    dropArea.addEventListener("dragleave", () => {
        dropArea.classList.remove("highlight");
    });

    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.classList.remove("highlight");
        const file = e.dataTransfer.files[0];
        handleFile(file);
    });

    fileUpload.addEventListener("change", (e) => {
        const file = e.target.files[0];
        handleFile(file);
    });

    function handleFile(file) {
        if (file && file.type.startsWith("image")) {
            const reader = new FileReader();
            reader.onload = function (event) {
                uploadedImage = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

    downloadBtn.addEventListener("click", () => {
        if (!uploadedImage) {
            alert("Please upload an image first!");
            return;
        }
        const format = formatSelect.value;
        const link = document.createElement("a");
        link.href = uploadedImage;
        link.download = `sandpix_image.${format}`;
        link.click();
    });
});
