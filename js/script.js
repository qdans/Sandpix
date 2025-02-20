document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.getElementById("drop-area");
    const fileInput = document.getElementById("file-input");
    const convertButton = document.getElementById("convert-button");
    const downloadButton = document.getElementById("download-button");
    
    dropArea.addEventListener("click", () => fileInput.click());
    
    dropArea.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropArea.style.background = "rgba(255, 255, 255, 0.2)";
    });
    
    dropArea.addEventListener("dragleave", () => {
        dropArea.style.background = "";
    });
    
    dropArea.addEventListener("drop", (e) => {
        e.preventDefault();
        dropArea.style.background = "";
        const file = e.dataTransfer.files[0];
        fileInput.files = e.dataTransfer.files;
        console.log("File uploaded:", file.name);
    });

    convertButton.addEventListener("click", () => {
        alert("Conversion started! (This feature will be implemented)");
    });
    
    downloadButton.addEventListener("click", () => {
        alert("Downloading image! (This feature will be implemented)");
    });
});
