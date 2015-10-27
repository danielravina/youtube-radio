(function() {
  var $videoContainer = $(".html5-video-container");
  var $body           = $("body")
  $videoContainer.prepend("<h1 id='radio-title'>Youtube Radio <a href='#' id='raido-toggle'>disable</a></h1>")

  $body.addClass("dismiss-youtube-radio")


  $("#raido-toggle").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    toggleVideo($(this))
  })

  var toggleVideo = function($title) {
    $body.toggleClass("dismiss-youtube-radio")
    if($body.is(".dismiss-youtube-radio")) {
        $title.html("YR enable")
        showVideo()
    } else {
      hideVideo()
      $title.html("disable")
    }
  }

  var showVideo = function() {
    var currentHeight = parseInt($('video').css('height'));
    var newHeight     = currentHeight + 36; // the height of the control bar

    // #player-api is the video master-wrapper
    $('#player-api').attr('style', 'height:' + newHeight + 'px !important;');
    // #player-mole-container is the element that pushes the rest of the content down
    $("#player-mole-container").css('height', (newHeight - currentHeight*0.1) + "px" );
  }

  var hideVideo = function() {
    $('#player-api').attr('style', 'height: 90px !important;')
    $("#player-mole-container").css('height', 0);
  }

  toggleVideo($(this))
})();