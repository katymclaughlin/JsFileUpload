document.querySelector("#file").addEventListener("change", (e) =>{
    if(window.File && window.FileReader && window.FileList && window.Blob){
const files = e.target.files;
const output = document.querySelector("#result");

for (let images = 0; images <files.length; images++){
    if(!files[images].type.match("image")) continue;
    const picReader = new FileReader();
    picReader.addEventListener("load", function(event){
        const picFile = event.target;
        const div = document.createElement("div");
        div.innerHTML = `<img class="thumbnail" src ="${picFile.result}" title=${picFile.name}"/>`;
        output.appendChild(div);
    })
    picReader.readAsDataURL(files[images]);
    }
} else {
    alert("Your browser does not support the File API")
}
})

myfunction=()=>{
  var x = document.getElementById("file");
  var txt = "";
  if('files' in x){
    if(x.files.length == 0){
        txt = "Select One More Than One Files";
        }
    else{
        for(var i=0; i<x.files.length; i++){
            txt += "<br> <strong>" + (i+1) + ".File </strong> <br>";
            var file = x.files[i];
            if ('name' in file){
                txt += "Name: " + file.name + "<br>";    
            }
            if ('size' in file){
                txt += "Size: " + file.size + "bytes <br>";
            }
            if ('type' in file){
                txt += "Type: " + file.type + "<br>";
            }
        
            console.log(file);
        }
    }
}
    else{
        if (x.value ==""){
            txt += "Select One or More Than One Files";
        }
        else{
            txt += "The File Property is not supported in your Browser";
        }
    }
    document.getElementById("demo").innerHTML = txt;
    }

//drag and drop
const initApp = () => {
    const droparea = document.querySelector ('.droparea');

    const active = () => droparea.classList.add("red-border");
    const inactive = () => droparea.classList.remove ("red-border");
    const prevents = (e) => e.preventDefault ();

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evtName => {
        droparea.addEventListener(evtName, prevents);
    });
    ['dragenter', 'dragover']. forEach(evtName => {
        droparea.addEventListener(evtName, active);
    });
    ['dragleave', 'drop'].forEach(evtName =>{
        droparea.addEventListener(evtName, inactive);
    });
}

document.addEventListener("DOMContentLoaded", initApp);

const handleDrop = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    const fileArray = [...files];
    console.log(files);
    console.log(fileArray);
  
}
