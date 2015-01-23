$.Thumbnails = function (el) {
  this.$el = $(el);
  this.$images = this.$el.find('.all-images > img');
  this.$gutterImages = this.$el.find('.gutter-images > img');
  this.$activeImg = this.$images.first();
  this.activate(this.$activeImg);
  this.gutterIdx = 0;
  this.fillGutterImages();

  $(".gutter-images").on("click", "img", this.bindImgClick.bind(this));
  $(".gutter-images").on("mouseenter", "img", this.bindImgHover.bind(this));
  $(".gutter-images").on("mouseleave", "img", this.bindLeaveImgHover.bind(this));
  $('.nav').on("click", this.bindNavClick.bind(this));
};

$.Thumbnails.prototype.activate = function($img){
  var $newActive = $img.clone();
  var $activeDiv = $("div.active");
  $activeDiv.html($newActive);
}

$.Thumbnails.prototype.bindImgClick = function(){
  this.$activeImg = $(event.target);
  this.activate(this.$activeImg);
}

$.Thumbnails.prototype.bindImgHover = function(){
  this.activate($(event.target));
}

$.Thumbnails.prototype.bindLeaveImgHover= function(){
  this.activate(this.$activeImg);
}

$.Thumbnails.prototype.fillGutterImages = function(){
  this.$el.find(".gutter-images").html("");
  this.$gutterImages = this.$images.slice(this.gutterIdx, this.gutterIdx + 5).clone();
  this.$el.find(".gutter-images").html(this.$gutterImages);
}

$.Thumbnails.prototype.bindNavClick = function(){
  event.preventDefault();
  var classStr = $(event.target).attr("class");
  if (classStr === "nav right") {
    this.gutterIdx += 1;
  } else {
    this.gutterIdx -= 1;
  }
  if(this.gutterIdx < 0){
    this.gutterIdx = this.$images.length - 5;
  }else if(this.gutterIdx > this.$images.length - 5){
    this.gutterIdx = 0;
  }
  this.fillGutterImages();
}

$.fn.thumbnails = function () {
  return this.each(function () {
    new $.Thumbnails(this);
  });
};
