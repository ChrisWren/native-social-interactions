(function() {
    
   var images = [
       'images/AndroidChrome.png',
       'images/Facebook.png',
       'images/hangouts.png',
       'images/imessage.png',
       'images/instagram.png',
       'images/iOS6Share.png',
       'images/iOS7Share.png',
       'images/LinkedIn.png',
       'images/pinterest.png',
       'images/twitter.png',
       'images/tumblr.png',
       'images/WindowsPhone8.png'
   ];
    
    setInterval(function() {
        $('.favicon').attr('href', images[Math.floor(Math.random() * images.length)]);
    }, 2000);
}());