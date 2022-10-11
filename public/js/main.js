$(function() {
  onImgLoad(".post-image>img, .fresh-post__img img, .post-img img", function() {
    if (this.naturalWidth / this.naturalHeight > 2) {
      $(this).css("object-fit", "cover");
    }
  });

  $("time").each(function() {
    $(this).attr("title", new Date($(this).attr("datetime")).toLocaleString());
  });

  $("pre code").each(function() {
    hljs.highlightBlock($(this)[0]);
  });

  function onImgLoad(selector, callback) {
    $(selector).each(function() {
      var self = this;
      if (self.complete) {
        callback.apply(self);
      } else {
        $(self).on("load", function() {
          callback.apply(self);
        });
      }
    });
  }
});
