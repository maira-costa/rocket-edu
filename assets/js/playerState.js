var player
function onYouTubeIframeAPIReady() {
    player = new YT.Player( 'player', {
        events: { 'onStateChange': onPlayerStateChange }
    });
}

let rocketCoins = 0
function onPlayerStateChange(event) {
  if (event.data == 0)  {        
    rocketCoins = 100

    alert(`rocketCoins = ${rocketCoins}`)      
  }
    
}