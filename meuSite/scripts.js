const modal_overlay = document.querySelector('.modal_overlay')
const cards =document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener ("click" ,function(){
        const videosid = card.getAttribute ("id")
        modal_overlay.classList.add ("active")
        modal_overlay.querySelector("iframe") .src =`https://www.youtube.com/embed/${videosid}`;
    })

}
document.querySelector (".close_modal").addEventListener("click" ,function(){
    modal_overlay.classList.remove("active")
    modal_overlay.querySelector("iframe") .src ="";
})

