function colorChanger(color){
    document.body.style.backgroundColor = color
    let txt = document.getElementsByClassName("text")
    if(color == 'rgb(0, 0, 0)'){
        for(let elm of txt){
            elm.style.color = "white";
        }
    }else{
        for(elm of txt){
            elm.style.color = "black"
        }
    }
}