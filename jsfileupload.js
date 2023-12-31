

 /* var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  */

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