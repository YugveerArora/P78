var images=["Brawl Stars.jpg", "f1.jpg", "f2.jpg", "Brawl Stars 2.jpg"];
var i=0;
function update(){
    document.getElementById("FavoriteImage").src=images[i];
    i++;
    if (i > 3){
        i=0;
    }
}