const lightbox=document.querySelector(".light-box");
const lightboximages=lightbox.querySelector(".light-box img");
const container=document.querySelector(".container");
const thumbnailimages=document.querySelectorAll(".main-content div img");
thumbnailimages.forEach((image) => { image.addEventListener("click", ()=>{
    container.style.opacity="0.4";
    lightboximages.src=image.src;
    lightbox.style.display="flex";
})});

let closefullimage = () =>{
    container.style.opacity="1";
    lightbox.style.display="none";
}
