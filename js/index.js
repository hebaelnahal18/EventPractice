let images = Array.from(document.querySelectorAll("img"));
const lightBoxContainer = document.getElementById("lightBoxContainer");
const containerBox = document.getElementById("containerBox");
const prevBtn = document.getElementById("prevBtn");
const close = document.getElementById("close");
const nextBtn = document.getElementById("nextBtn");
console.log(images)
let currentIndex;
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function (event) {
    lightBoxContainer.style.display = "flex";
    let imgSrc = event.target.getAttribute("src");
    console.log(imgSrc)
    containerBox.style.backgroundImage = `url(${imgSrc})`;
    currentIndex=images.indexOf(event.target)
    console.log(currentIndex)
  });
}
close.addEventListener("click", () => {
  lightBoxContainer.style.display = "none";
});
nextBtn.addEventListener('click',function(){
    currentIndex++;
    if(currentIndex===images.length){
        currentIndex=0;
    }
    console.log(currentIndex)
    let imgSrc=images[currentIndex].getAttribute('src')
     containerBox.style.backgroundImage = `url(${imgSrc})`;

})
prevBtn.addEventListener('click',function(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=images.length-1;
    }
    console.log(currentIndex)
    let imgSrc=images[currentIndex].getAttribute('src')
     containerBox.style.backgroundImage = `url(${imgSrc})`;

})
