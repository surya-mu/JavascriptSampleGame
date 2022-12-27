var Character = document.getElementById("Character");
var Block = document.getElementById("Block");
function jump() {
    Character.classList.add("animate");
    setTimeout(function () {
        Character.classList.remove("animate");
    }, 500)


}

var checkDead = setInterval(function () {

    var ChacracterTop = parseInt(window.getComputedStyle(Character).getPropertyValue("top"));
    var BlockLeft = parseInt(window.getComputedStyle(Block).getPropertyValue("left"));
    if (BlockLeft < 45 && BlockLeft > 15 && ChacracterTop > 410) {
        alert("you ded xd");
        Block.style.display = "none";
        Character.style.display = "none";
    }
}, 10);
