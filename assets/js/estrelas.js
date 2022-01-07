function stars () {
    let count = 10;
    let scene = document.querySelector('.secao--inicio');
    let i = 0;
    while(i < count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        
        let duration = Math.random() * 1;
        let h = Math.random() * 40;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = h + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);
        i++
    } 

}

stars();