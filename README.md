# jquery observe plugin

The new [MutationObserver](https://developer.mozilla.org/en/DOM/DOM_Mutation_Observers) thingy is implemented in current versions of FF and Chrome. It nicely replaces the DomSubTreeModified event... with some quirks.

This plugin aims to simplify and streamline the "listening", I mean observing, of mutations.

### plugin usage:

> `$('div').observe( function (mutations) { console.log(this, mutations); }).addClass('yatta').append('<span>genki desu</span>');`

 
In this particular example, the callback will be fired when the span is appended, _not_ when the class is added. MutationRecord groups changes which occur over a short span of time. So it will not fire until all changes are made, and the final element state is reached.
* "this" represents individual DOM elements, exactly like in [$.each()](http://api.jquery.com/each/). 
* "mutations" is an array of MutationRecords. In short, it's a list of changes, but it only records new "NodeLists" types changes in current implementations of MutationObserver. 

In order to limit observed "events", 3 options for the observer are present: attributes, childList and characterData, usage:

> `$('div')observe( function () { console.log(this); }, {childList: false} ).addClass('yata');`

MutationRecord isn't yet complete, and this plugin, even if limited in it's scope, increases MutationRecord utility. It's most useful with $.clone(). You can trace document versions, and it can help for debugging. But you can too clone _windows_ in real time, even on different computers with a bit of ajaxing and server forwarding! This is extremely promising: web apps might be able to provide efficient real time _pure_ html "remote desktop" support. As well, it provides userscripts writers who have to look up for ajax DOM updates with a more elegant method than setTimeout check loops.

Still lots to do...
A "state" shall be added in order to able to destroy/disconnect observers, even if overloading an element with observers scales extraordinarily well. Maybe some kind of "container" can be added too, as the $.on() ( $('table').observeChidldren('td', callback); ), which should loop MutationRecord to select only records affecting children.

You can check **[this fiddle](http://jsfiddle.net/E7Kn2/5/)** for a live demo (and copy the plugin for your needs until I find a way to git it )