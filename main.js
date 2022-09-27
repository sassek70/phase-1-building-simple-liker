// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')
let heartArray = document.getElementsByClassName('like-glyph')
let likeArray = document.getElementsByClassName('like')
modal.classList = "hidden"
// Your JavaScript code goes here!


for(let heartGlyph of heartArray){
  heartGlyph.addEventListener('click', (e) =>{
    mimicServerCall()
    .then(() => {
      if(heartGlyph.textContent === '♥'){
        heartGlyph.removeAttribute('activated-heart')
        heartGlyph.textContent = '♡'
        heartGlyph.style.color = "rgb(170,184,194)"
        console.log('I\'ve been unliked')
      } else {
        heartGlyph.textContent = '♥'
        heartGlyph.style.color = "red"
        heartGlyph.classList = ('activated-heart')
        console.log('I\'ve been liked')
      }
    })
  .catch((error) => {
    console.error(error)
    modal.classList.remove('hidden')
    setTimeout(() => modal.classList = "hidden",3000)}
  )
})

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

