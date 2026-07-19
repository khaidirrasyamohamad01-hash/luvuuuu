function love(){

    document.getElementById("loveText").style.display = "block";

    for(let i = 0; i < 80; i++){

        let heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 40) + "px";
        heart.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}