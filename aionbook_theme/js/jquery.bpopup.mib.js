
(function(b){b.fn.bPopup=function(z,F){function K(){a.contentContainer=b(a.contentContainer||c);switch(a.content){case "iframe":var h=b('<iframe class="b-iframe" '+a.iframeAttr+"></iframe>");h.appendTo(a.contentContainer);r=c.outerHeight(!0);s=c.outerWidth(!0);A();h.attr("src",a.loadUrl);k(a.loadCallback);break;case "image":A();b("<img />").load(function(){k(a.loadCallback);G(b(this))}).attr("src",a.loadUrl).hide().appendTo(a.contentContainer);break;default:A(),b('<div class="b-ajax-wrapper"></div>').load(a.loadUrl,a.loadData,function(){k(a.loadCallback);G(b(this))}).hide().appendTo(a.contentContainer)}}function A(){a.modal&&b('<div class="b-modal '+e+'"></div>').css({backgroundColor:a.modalColor,position:"fixed",top:0,right:0,bottom:0,left:0,opacity:0,zIndex:a.zIndex+t}).appendTo(a.appendTo).fadeTo(a.speed,a.opacity);D();c.data("bPopup",a).data("id",e).css({left:"slideIn"==a.transition||"slideBack"==a.transition?"slideBack"==a.transition?g.scrollLeft()+u:-1*(v+s):l(!(!a.follow[0]&&m||f)),position:a.positionStyle||"absolute",top:"slideDown"==a.transition||"slideUp"==a.transition?"slideUp"==a.transition?g.scrollTop()+w:x+-1*r:n(!(!a.follow[1]&&p||f)),"z-index":a.zIndex+t+1}).each(function(){a.appending&&b(this).appendTo(a.appendTo)});H(!0)}function q(){a.modal&&b(".b-modal."+c.data("id")).fadeTo(a.speed,0,function(){b(this).remove()});a.scrollBar||b("html").css("overflow","auto");b(".b-modal."+e).unbind("click");g.unbind("keydown."+e);d.unbind("."+e).data("bPopup",0<d.data("bPopup")-1?d.data("bPopup")-1:null);c.undelegate(".bClose, ."+a.closeClass,"click."+e,q).data("bPopup",null);H();return!1}function G(h){var b=h.width(),e=h.height(),d={};a.contentContainer.css({height:e,width:b});e>=c.height()&&(d.height=c.height());b>=c.width()&&(d.width=c.width());r=c.outerHeight(!0);s=c.outerWidth(!0);D();a.contentContainer.css({height:"auto",width:"auto"});d.left=l(!(!a.follow[0]&&m||f));d.top=n(!(!a.follow[1]&&p||f));c.animate(d,250,function(){h.show();B=E()})}function L(){d.data("bPopup",t);c.delegate(".bClose, ."+a.closeClass,"click."+e,q);a.modalClose&&b(".b-modal."+e).css("cursor","pointer").bind("click",q);M||!a.follow[0]&&!a.follow[1]||d.bind("scroll."+e,function(){B&&c.dequeue().animate({left:a.follow[0]?l(!f):"auto",top:a.follow[1]?n(!f):"auto"},a.followSpeed,a.followEasing)}).bind("resize."+e,function(){w=y.innerHeight||d.height();u=y.innerWidth||d.width();if(B=E())clearTimeout(I),I=setTimeout(function(){D();c.dequeue().each(function(){f?b(this).css({left:v,top:x}):b(this).animate({left:a.follow[0]?l(!0):"auto",top:a.follow[1]?n(!0):"auto"},a.followSpeed,a.followEasing)})},50)});a.escClose&&g.bind("keydown."+e,function(a){27==a.which&&q()})}function H(b){function d(e){c.css({display:"block",opacity:1}).animate(e,a.speed,a.easing,function(){J(b)})}switch(b?a.transition:a.transitionClose||a.transition){case "slideIn":d({left:b?l(!(!a.follow[0]&&m||f)):g.scrollLeft()-(s||c.outerWidth(!0))-C});break;case "slideBack":d({left:b?l(!(!a.follow[0]&&m||f)):g.scrollLeft()+u+C});break;case "slideDown":d({top:b?n(!(!a.follow[1]&&p||f)):g.scrollTop()-(r||c.outerHeight(!0))-C});break;case "slideUp":d({top:b?n(!(!a.follow[1]&&p||f)):g.scrollTop()+w+C});break;default:c.stop().fadeTo(a.speed,b?1:0,function(){J(b)})}}function J(b){b?(L(),k(F),a.autoClose&&setTimeout(q,a.autoClose)):(c.hide(),k(a.onClose),a.loadUrl&&(a.contentContainer.empty(),c.css({height:"auto",width:"auto"})))}function l(a){return a?v+g.scrollLeft():v}function n(a){return a?x+g.scrollTop():x}function k(a){b.isFunction(a)&&a.call(c)}function D(){x=p?a.position[1]:Math.max(0,(w-c.outerHeight(!0))/2-a.amsl);v=m?a.position[0]:(u-c.outerWidth(!0))/2;B=E()}function E(){return w>c.outerHeight(!0)&&u>c.outerWidth(!0)}b.isFunction(z)&&(F=z,z=null);var a=b.extend({},b.fn.bPopup.defaults,z);a.scrollBar||b("html").css("overflow","hidden");var c=this,g=b(document),y=window,d=b(y),w=y.innerHeight||d.height(),u=y.innerWidth||d.width(),M=/OS 6(_\d)+/i.test(navigator.userAgent),C=200,t=0,e,B,p,m,f,x,v,r,s,I;c.close=function(){a=this.data("bPopup");e="__b-popup"+d.data("bPopup")+"__";q()};return c.each(function(){b(this).data("bPopup")||(k(a.onOpen),t=(d.data("bPopup")||0)+1,e="__b-popup"+t+"__",p="auto"!==a.position[1],m="auto"!==a.position[0],f="fixed"===a.positionStyle,r=c.outerHeight(!0),s=c.outerWidth(!0),a.loadUrl?K():A())})};b.fn.bPopup.defaults={amsl:50,appending:!0,appendTo:"body",autoClose:!1,closeClass:"layer_close",content:"ajax",contentContainer:!1,easing:"swing",escClose:!0,follow:[!0,!0],followEasing:"swing",followSpeed:500,iframeAttr:'scrolling="no" frameborder="0"',loadCallback:!1,loadData:!1,loadUrl:!1,modal:!0,modalClose:!0,modalColor:"#000",onClose:!1,onOpen:!1,opacity:0.7,position:["auto","auto"],positionStyle:"absolute",scrollBar:!0,speed:250,transition:"fadeIn",transitionClose:!1,zIndex:9997}})(jQuery);
 
// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

   jQuery.ajaxTransport(function( s ) {
       // Cross domain only allowed if supported through XMLHttpRequest
       if ( !s.crossDomain || jQuery.support.cors ) {

           var callback;

           return {
               send: function( headers, complete ) {

                   // Get a new xhr
                   var xhr = s.xhr(),
                       handle,
                       i;

                   // Open the socket
                   // Passing null username, generates a login popup on Opera (#2865)
                   if ( s.username ) {
                       xhr.open( s.type, s.url, s.async, s.username, s.password );
                   } else {
                       xhr.open( s.type, s.url, s.async );
                   }

                   // Apply custom fields if provided
                   if ( s.xhrFields ) {
                       for ( i in s.xhrFields ) {
                           xhr[ i ] = s.xhrFields[ i ];
                       }
                   }

                   // Override mime type if needed
                   if ( s.mimeType && xhr.overrideMimeType ) {
                       xhr.overrideMimeType( s.mimeType );
                   }

                   // X-Requested-With header
                   // For cross-domain requests, seeing as conditions for a preflight are
                   // akin to a jigsaw puzzle, we simply never set it to be sure.
                   // (it can always be set on a per-request basis or even using ajaxSetup)
                   // For same-domain requests, won't change header if already provided.
                   if ( !s.crossDomain && !headers["X-Requested-With"] ) {
                       headers[ "X-Requested-With" ] = "XMLHttpRequest";
                   }

                   // Need an extra try/catch for cross domain requests in Firefox 3
                   try {
                       for ( i in headers ) {
                           xhr.setRequestHeader( i, headers[ i ] );
                       }
                   } catch( _ ) {}

                   // Do send the request
                   // This may raise an exception which is actually
                   // handled in jQuery.ajax (so no try/catch here)
                   xhr.send( ( s.hasContent && s.data ) || null );

                   // Listener
                   callback = function( _, isAbort ) {

                       var status,
                           statusText,
                           responseHeaders,
                           responses,
                           xml;

                       // Firefox throws exceptions when accessing properties
                       // of an xhr when a network error occured
                       // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
                       try {

                           // Was never called and is aborted or complete
                           if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

                               // Only called once
                               callback = undefined;

                               // Do not keep as active anymore
                               if ( handle ) {
                                   xhr.onreadystatechange = jQuery.noop;
                                   if ( xhrOnUnloadAbort ) {
                                       delete xhrCallbacks[ handle ];
                                   }
                               }

                               // If it's an abort
                               if ( isAbort ) {
                                   // Abort it manually if needed
                                   if ( xhr.readyState !== 4 ) {
                                       xhr.abort();
                                   }
                               } else {
                                   status = xhr.status;
                                   responseHeaders = xhr.getAllResponseHeaders();
                                   responses = {};
                                   xml = xhr.responseXML;

                                   // Construct response list
                                   if ( xml && xml.documentElement /* #4958 */ ) {
                                       responses.xml = xml;
                                   }
                                   responses.text = xhr.responseText;

                                   // Firefox throws an exception when accessing
                                   // statusText for faulty cross-domain requests
                                   try {
                                       statusText = xhr.statusText;
                                   } catch( e ) {
                                       // We normalize with Webkit giving an empty statusText
                                       statusText = "";
                                   }

                                   // Filter status for non standard behaviors

                                   // If the request is local and we have data: assume a success
                                   // (success with no data won't get notified, that's the best we
                                   // can do given current implementations)
                                   if ( !status && s.isLocal && !s.crossDomain ) {
                                       status = responses.text ? 200 : 404;
                                   // IE - #1450: sometimes returns 1223 when it should be 204
                                   } else if ( status === 1223 ) {
                                       status = 204;
                                   }
                               }
                           }
                       } catch( firefoxAccessException ) {
                           if ( !isAbort ) {
                               complete( -1, firefoxAccessException );
                           }
                       }

                       // Call complete if needed
                       if ( responses ) {
                           complete( status, statusText, responses, responseHeaders );
                       }
                   };

                   // if we're in sync mode or it's in cache
                   // and has been retrieved directly (IE6 & IE7)
                   // we need to manually fire the callback
                   if ( !s.async || xhr.readyState === 4 ) {
                       callback();
                   } else {
                       handle = ++xhrId;
                       if ( xhrOnUnloadAbort ) {
                           // Create the active xhrs callbacks list if needed
                           // and attach the unload handler
                           if ( !xhrCallbacks ) {
                               xhrCallbacks = {};
                               jQuery( window ).unload( xhrOnUnloadAbort );
                           }
                           // Add to list of active xhrs callbacks
                           xhrCallbacks[ handle ] = callback;
                       }
                       xhr.onreadystatechange = callback;
                   }
               },

               abort: function() {
                   if ( callback ) {
                       callback(0,1);
                   }
               }
           };
       }
   });
}