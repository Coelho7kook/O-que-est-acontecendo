https://github.com/Coelho7kook/O-que-est-acontecendo.git

noBtn.addEventListener("mouseover", () {

const newX = Math.floor(Math.random() *

questionContainer.offsetWidth);

const newy = Math.floor(Math.random() *

questionContainer.offsetWidth);

noBtn.style.left = '${newX}px';

noBtn.style.top = '${newY}px';

});

yesBtn.addEventListener("click", () = {

const timeoutId = setTimeout(() = {

heartLoader.style.display = "none";

resultContainer.style.display = "inherit";

gifResult.play();

}, 3000);

});
