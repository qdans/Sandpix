document.addEventListener("DOMContentLoaded", function () {
    const uploadBox = document.getElementById("upload-area");
    const fileInput = document.getElementById("file-input");

    uploadBox.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            console.log("File uploaded:", file.name);
            // TODO: Lakukan konversi ke pixel art di sini
        }
    });

    uploadBox.addEventListener("dragover", function (event) {
        event.preventDefault();
        uploadBox.style.background = "rgba(255,255,255,0.2)";
    });

    uploadBox.addEventListener("dragleave", function () {
        uploadBox.style.background = "transparent";
    });

    uploadBox.addEventListener("drop", function (event) {
        event.preventDefault();
        uploadBox.style.background = "transparent";
        const file = event.dataTransfer.files[0];
        if (file) {
            console.log("File dropped:", file.name);
            fileInput.files = event.dataTransfer.files;
        }
    });
});
