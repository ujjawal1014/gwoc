
const textEl = document.querySelector("#text");

const texts = JSON.parse(textEl.getAttribute("data-text"));


let index = 0;

let charIndex = 0;

let delta = 500;


let start = null;

let isDeleting = false;

function type(time) {
  window.requestAnimationFrame(type);
  
  if (!start) start = time;
  
  let progress = time - start;
 
  if (progress > delta) {
    
    let text = texts[index];

    if (!isDeleting) {
     
      textEl.innerHTML = text.slice(0, ++charIndex);
      
      delta = 500 - Math.random() * 400;
    } else {
      
      textEl.innerHTML = text.slice(0, charIndex--);
    }
    
    start = time;

   
    if (charIndex === text.length) {
      
      isDeleting = true;
      
      delta = 700;
      
      start = time + 1500;
    }

   
    if (charIndex < 0) {
      isDeleting = false;
      
      start = time + 500;
      
      index = ++index % texts.length;
    }
  }
}

window.requestAnimationFrame(type);
