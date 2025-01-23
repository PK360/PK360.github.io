window.onload = function() {
    document.getElementById('inputfile').addEventListener('change', function selectedFileChanged() {
        if (this.files.length === 0) {
            console.log('No file selected.');
            return;
        }
    
        let reader = new FileReader();
        reader.onload = function fReadCmpl() {
            var x = document.getElementById('emoji');
            if (reader.result.localeCompare("WIKIPEDIA") == 0) {
                window.location.href = "https://en.wikipedia.org/wiki/Main_Page"
            }
            else if (reader.result.localeCompare("POKEMON") == 0) {
                window.location.href = "../index.html"
            }
            else if (reader.result.localeCompare("GITHUB") == 0) {
                window.location.href = "../pages/NO.html";
            }
            inputfile.value = null;
        };
        reader.readAsText(this.files[0]);
    });
}