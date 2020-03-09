function Accordion(options){
  var self = this;
  this.buttons = $(options.buttons);

  this.buttons.on('click',function(){
    self.buttons.data('open',false);
    $(this).data('open',true);
    self.buttons.each(function(){
      self.update($(this));
    })
  })

  this.update = function(btn){
    var target = $(btn.attr('target'));
    if(target.length > 0){
      btn.data('open') ? target.slideDown() : target.slideUp()
    }
  }
}
