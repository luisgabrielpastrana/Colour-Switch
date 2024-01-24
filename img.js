//changed variable name & array values
const Img = ["url(ChilliBeef.jpg)", "url(HotDog.jpg)", "url(Icecream.jpg)"];
const btn = document.getElementById("btn");
const Imgs = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomImg = getRandomNumber();
  // console.log(randomNumber);

 //changed to backgroundImage & changed variables to match new variable names
  document.body.style.backgroundImage = Img[randomImg];
  Imgs.textContent = Img[randomImg];
});
//changed variables to match new variable names
function getRandomNumber() {
  return Math.floor(Math.random() * Img.length);
}