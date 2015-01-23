$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.imageLength = $($('img')).length;
  this.$activeImg = $($('img')[this.activeIdx]).addClass("active");
  $('.slide-left').on("click", this.slide.bind(this, 1));
  $('.slide-right').on("click", this.slide.bind(this, -1));
  this.transitioning = false;
};

$.Carousel.prototype.slide = function (dir){
  if (this.transitioning){
    return ;
  } else {
    this.transitioning = true;
  }
  if( dir === 1){
    var slideIn = "left";
    var slideOut = "right";
  }else{
    var slideIn = "right";
    var slideOut = "left";
  }
  // this.$activeImg.removeClass("active");
  var $oldActive = this.$activeImg;
  this.activeIdx += dir;
  if(this.activeIdx < 0){
    this.activeIdx = this.imageLength - 1;
  }else if(this.activeIdx >= this.imageLength){
    this.activeIdx = 0;
  }
  this.$activeImg = $($('img')[this.activeIdx]).addClass("active");
  var that = this;

  $oldActive.addClass(slideOut);
  this.$activeImg.addClass(slideIn);
  setTimeout(function(){
    that.$activeImg.removeClass(slideIn)
  }, 0);

  $oldActive.one("transitionend", function(){
    $oldActive.removeClass(slideOut).removeClass("active");
    that.transitioning = false;
  })
}



$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};
