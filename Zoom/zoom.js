$.Zoom = function (el) {
  this.$el = $(el);
  this.boxSize = 20;
  this.$el.on('mouseenter', this.showFocusBox.bind(this) );
  this.$el.on('mouseleave', this.removeFocusBox.bind(this) );

};

$.Zoom.prototype.showFocusBox = function() {
  this.$focusBox = $('<div class="focus-box">');
  this.$focusBox.css("height", this.boxSize).css("width", this.boxSize);
  this.$focusBox.css("top", event.x).css("left", event.y).css('z-index', 1);
  this.$el.append(this.$focusBox);
  console.log(this.$focusBox);
}

$.Zoom.prototype.removeFocusBox = function() {

}
$.fn.zoom = function () {
  return this.each(function () {
    new $.Zoom(this);
  });
};
