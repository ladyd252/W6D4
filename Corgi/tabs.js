$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data('content-tabs'));
  this.$activeTab = $('#content-tabs > .active');
  this.$el.on('click','a',this.clickTab.bind(this));
};

$.Tabs.prototype.clickTab = function(){
  event.preventDefault();
  $('.active').removeClass("active");
  this.$activeTab.addClass("transitioning");
  var $link = $(event.target);
  $link.addClass("active");
  var tab = this;
  $('body').one("transitionend", function(){
    tab.$activeTab.removeClass("transitioning");
    tab.$activeTab = $($link.attr("href"));
    tab.$activeTab.addClass("active");
    tab.$activeTab.addClass("transitioning");
    
    setTimeout(function(){
      console.log('in callback');
      tab.$activeTab.removeClass("transitioning");
    }, 1);

  });
}

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};
