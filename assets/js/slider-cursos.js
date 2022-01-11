
/*
document.querySelector("#items")
.addEventListener("wheel", event => {
  if(event.deltaY > 0) {
    event.target.scrollBy(300,0)     
  } else {
    event.target.scrollBy(-300,0)    
  }
})

*/

new Glide(".cursos",{
  type:'carousel',
  hoverPause: true,
  autoPlay: 1000,
  perView: 4,  
  gap: 40,
  autoplay: 4000,
  hoverpause:true,
  
  breakpoints:{
    960:{
      perView: 3
    },
    500:{
      perView: 1.3
    }
  }
  
  
}).mount();


