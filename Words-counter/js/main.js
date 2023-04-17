let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function () {
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let word = text.split(" ");
    let cleanList = word.filter(function (elm) {
        return elm != "";
    });
    document.getElementById('word').innerHTML = cleanList.length
})

var a = new Date()
var option = {hour : 'numeric' , minute : "numeric" ,second : 'numeric'}
document.querySelector(".date").textContent = a.toLocaleTimeString("en-US",option)