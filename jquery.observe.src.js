(function( $ ){

  $.fn.observe = function( callback, options ) {  

    var settings = $.extend( {
            attributes: true, 
            childList: true, 
            characterData: true
        }, 
        options );

    return this.each(function() {        
        var self = this,
            observer,
            MutationObserver = window.MutationObserver || 
                               window.WebKitMutationObserver || 
                               window.MozMutationObserver; 
        
        if (MutationObserver && callback) {
            observer = new MutationObserver(function(mutations) { 
                callback.call(self, mutations);
            });              
            observer.observe(this, settings);
        }         
    });
  };
})( jQuery );