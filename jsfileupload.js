const inputElement = document.getElementById('fileInput');

inputElement.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    console.log('File name:', file.name);
    console.log('File size (in bytes):', file.size);
    console.log('File type:', file.type);
});




