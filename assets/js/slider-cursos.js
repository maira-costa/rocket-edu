

new Glide(".cursos",{
  type:'carousel',
  hoverPause: true,
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


