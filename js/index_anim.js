!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*!
 * parallax-element.js
 * jQuery plugin to add parallax effect to individual elements
 * @author  Shaun M. Baer
 * @url     https://github.com/iamhexcoder/parallax-element
 * @license MIT
 */
(function( $, window, document, undefined ) { $.fn.parallaxElement = function(options) {

  /*! requestAnimationFrame Polyfill via Paul Irish: https://gist.github.com/paulirish/1579671 */
  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];

    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame  = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame   = window[vendors[x]+'CancelAnimationFrame'] ||
                                      window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                 timeToCall);
        lastTime = currTime + timeToCall;

        return id;
      };
    }

    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
    }

  }());
  /*! end requestAnimationFrame Polyfill */

  // Set default Options
  var defaults = {

    defaultSpeed:  0.2,   // Integer - Default speed if `data-speed` is not present
    useOffset:     true,  // Boolean - Whether or not to start animations below bottom of viewport
    defaultOffset: 200,   // Distance before element appears to start animation
    disableMobile: true, // Boolean - allow function to run on mobile devices
    minWidth:      false  // Integer - minimum width the function should fire

  };

  var opts = $.extend( {}, defaults, options );

  /**
   * Return false on function if is mobile and disableMobile is set to true
   */
  if( opts.disableMobile && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

    return false;

  }

  // Window Vars
  var windowYOffset = window.pageYOffset;
  var winHeight     = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
  var winWidth      = "innerWidth" in window ? window.innerWidth : document.documentElement.clientWidth;
  var navToggle     = $('#filter-toggle');
  var winBottom     = (windowYOffset + winHeight);
  var body          = document.body;
  var html          = document.documentElement;
  var docHeight     = Math.max( body.scrollHeight, body.offsetHeight,
                      html.clientHeight, html.scrollHeight, html.offsetHeight );

  /**
   * Recalc variables when the window is resized
   *
   */
  $(window).on('resize', function(){
    winHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    winWidth  = window.innerWidth;
    docHeight = Math.max( body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight );
  });


  /**
   * Run the functions needed to update translate on element
   * @param  {object} el object to run function on.
   *
   */
  function runScrollElement(el) {

    var thisTop = el.offset().top;

    /**
     * If the element is below the viewport, return false, as all others
     * after should be below as well.
     *
     */
    if( opts.useOffset && thisTop - opts.defaultOffset > ( winBottom ) ) {

      return false;

    }


    /**
     * If the element is within the viewport, get the speed and
     * adjust translate relative to top of el.
     *
     * speed variable made opposite of magnitude, so a negative number
     * scrolls _slower_, and a positive number scrolls _faster_.
     *
     * scrollThrough variable moves element relative to page placement
     *
     */
    var speed = el.attr('data-speed') ? ( el.attr('data-speed') * -1 ) : ( opts.defaultSpeed * -1 );
    var val;


    /**
     * Add `start-zero` class to element to have it start at zero
     *
     * Otherwise, adjust the position so when el is in the middle of
     * the viewport, it will be where is should be.
     *
     */
    if(el.hasClass('scroll-start-zero')) {

      val = ( windowYOffset * speed );

    } else {

      val = ( ( windowYOffset - thisTop ) + ( winHeight / 2 ) ) * speed;

    }

    if(val > docHeight) {

      val = docHeight;

    }

    /**
     * Set the CSS Style
     *
     */
    if(el.hasClass('banner-text')) {
      var styleVal = 'translate3d( 0px, ' + val + 'px, 0px) translateY(-50%)';
    } else {
      var styleVal = 'translate3d( 0px, ' + val + 'px, 0px)';
    }

    if(el.hasClass('scroll-lines')) {

      if ( (1.5 - (val/200)) < 1.5 ) {
        var lineVal = 1.5;
      } else {
        var lineVal = 1.5 - (val/200);
      }

      el.css({

        "-webkit-transform": styleVal,
        "-moz-transform": styleVal,
        "-ms-transform": styleVal,
        "-o-transform": styleVal,
        "transform": styleVal,
        "line-height": lineVal
      });

    } else {

      el.css({
        "-webkit-transform": styleVal,
        "-moz-transform": styleVal,
        "-ms-transform": styleVal,
        "-o-transform": styleVal,
        "transform": styleVal
      });

    }

  }


  /**
   * Run the jewels
   *
   */
  var scrollEls = [];

  // Create object with all elements
  this.each( function(i) {

    scrollEls.push( $(this) );

  });

  // Fire a single scroll event listener
  return document.addEventListener('scroll', function(){

    if( opts.minWidth && opts.minWidth > winWidth ) {

      $(this).removeAttr('style');

      return false;

    }

    $.each(scrollEls, function(i, el) {

      // Update Vars
      windowYOffset = window.pageYOffset;
      winBottom     = (windowYOffset + winHeight);

      // Run the scroll function when an animation frame is available
      window.requestAnimationFrame( function() {

        runScrollElement(el);

      });

    });

  });

}; }( jQuery, window, document ));

function initMap() {
	// Styles a map in night mode.
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39.9426, lng: -75.1652},
		zoom: 12,
		disableDefaultUI: true,
    scrollwheel: false,
		styles: [
		  {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#212121"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#757575"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#212121"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#242424"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#606060"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#292929"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape",
		    "stylers": [
		      {
		        "color": "#333333"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#333333"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#606060"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#292929"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#282828"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#606060"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#292929"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "stylers": [
		      {
		        "color": "#2e2e2e"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#2e2e2e"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#606060"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#292929"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#2e2e2e"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#606060"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#292929"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#242424"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#606060"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#292929"
		      }
		    ]
		  }
		]
	});
	/*var marker = new google.maps.Marker({
    position: {lat: 39.9527174, lng: -75.1712065},
    map: map,
    icon: '//rise.co/assets/award.png'
  });*/

}

window.bioEp = {
	// Private variables
	bgEl: {},
	popupEl: {},
	closeBtnEl: {},
	shown: false,
	overflowDefault: "visible",
	transformDefault: "",

	// Popup options
	width: 400,
	height: 220,
	html: "",
	css: "",
	fonts: [],
	delay: 5,
	showOnDelay: false,
	cookieExp: 30,
	showOncePerSession: false,
	onPopup: null,

	// Object for handling cookies, taken from QuirksMode
	// http://www.quirksmode.org/js/cookies.html
	cookieManager: {
		// Create a cookie
		create: function(name, value, days, sessionOnly) {
			var expires = "";

			if(sessionOnly)
				expires = "; expires=0"
			else if(days) {
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				expires = "; expires=" + date.toGMTString();
			}

			document.cookie = name + "=" + value + expires + "; path=/";
		},

		// Get the value of a cookie
		get: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(";");

			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == " ") c = c.substring(1, c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
			}

			return null;
		},

		// Delete a cookie
		erase: function(name) {
			this.create(name, "", -1);
		}
	},

	// Handle the bioep_shown cookie
	// If present and true, return true
	// If not present or false, create and return false
	checkCookie: function() {
		// Handle cookie reset
		if(this.cookieExp <= 0) {
			// Handle showing pop up once per browser session.
			if(this.showOncePerSession && this.cookieManager.get("bioep_shown_session") == "true")
				return true;

			this.cookieManager.erase("bioep_shown");
			return false;
		}

		// If cookie is set to true
		if(this.cookieManager.get("bioep_shown") == "true")
			return true;

		return false;
	},

	// Add font stylesheets and CSS for the popup
	addCSS: function() {
		// Add font stylesheets
		for(var i = 0; i < this.fonts.length; i++) {
			var font = document.createElement("link");
			font.href = this.fonts[i];
			font.type = "text/css";
			font.rel = "stylesheet";
			document.head.appendChild(font);
		}

		// Base CSS styles for the popup
		var css = document.createTextNode(
      this.css
		);

		// Create the style element
		var style = document.createElement("style");
		style.type = "text/css";
		style.appendChild(css);

		// Insert it before other existing style
		// elements so user CSS isn't overwritten
		document.head.insertBefore(style, document.getElementsByTagName("style")[0]);
	},

	// Add the popup to the page
	addPopup: function() {
		// Add the popup
		this.popupEl = document.getElementById("exit-intent");

		// Add the close button
		this.closeBtnEl = document.getElementById("exit-intent-close");
	},

	// Show the popup
	showPopup: function() {
		if(this.shown) return;

		this.popupEl.classList.add("in");

		this.shown = true;

		this.cookieManager.create("bioep_shown", "true", this.cookieExp, false);
		this.cookieManager.create("bioep_shown_session", "true", 0, true);

		if(typeof this.onPopup === "function") {
			this.onPopup();
		}
	},

	// Hide the popup
	hidePopup: function() {
		this.popupEl.classList.add("is-leaving");
    setTimeout(function () {
      this.popupEl.classList.remove("in");
      this.popupEl.classList.remove("is-leaving");
    }, 500);
	},

	// Event listener initialisation for all browsers
	addEvent: function (obj, event, callback) {
		if(obj.addEventListener)
			obj.addEventListener(event, callback, false);
		else if(obj.attachEvent)
			obj.attachEvent("on" + event, callback);
	},

	// Load event listeners for the popup
	loadEvents: function() {
		// Track mouseout event on document
		this.addEvent(document, "mouseout", function(e) {
			e = e ? e : window.event;

			// If this is an autocomplete element.
			if(e.target.tagName.toLowerCase() == "input")
				return;

			// Get the current viewport width.
			var vpWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

			// If the current mouse X position is within 50px of the right edge
			// of the viewport, return.
			if(e.clientX >= (vpWidth - 50))
				return;

			// If the current mouse Y position is not within 50px of the top
			// edge of the viewport, return.
			if(e.clientY >= 50)
				return;

			// Reliable, works on mouse exiting window and
			// user switching active program
			var from = e.relatedTarget || e.toElement;
			if(!from)
				bioEp.showPopup();
		}.bind(this));

		// Handle the popup close button
		this.addEvent(this.closeBtnEl, "click", function() {
			bioEp.hidePopup();
		});

		// Handle window resizing
		this.addEvent(window, "resize", function() {
			bioEp.scalePopup();
		});
	},

	// Set user defined options for the popup
	setOptions: function(opts) {
		this.width = (typeof opts.width === 'undefined') ? this.width : opts.width;
		this.height = (typeof opts.height === 'undefined') ? this.height : opts.height;
		this.html = (typeof opts.html === 'undefined') ? this.html : opts.html;
		this.css = (typeof opts.css === 'undefined') ? this.css : opts.css;
		this.fonts = (typeof opts.fonts === 'undefined') ? this.fonts : opts.fonts;
		this.delay = (typeof opts.delay === 'undefined') ? this.delay : opts.delay;
		this.showOnDelay = (typeof opts.showOnDelay === 'undefined') ? this.showOnDelay : opts.showOnDelay;
		this.cookieExp = (typeof opts.cookieExp === 'undefined') ? this.cookieExp : opts.cookieExp;
		this.showOncePerSession = (typeof opts.showOncePerSession === 'undefined') ? this.showOncePerSession : opts.showOncePerSession;
		this.onPopup = (typeof opts.onPopup === 'undefined') ? this.onPopup : opts.onPopup;
	},

	// Ensure the DOM has loaded
	domReady: function(callback) {
		(document.readyState === "interactive" || document.readyState === "complete") ? callback() : this.addEvent(document, "DOMContentLoaded", callback);
	},

	// Initialize
	init: function(opts) {
		// Handle options
		if(typeof opts !== 'undefined')
			this.setOptions(opts);

		// Add CSS here to make sure user HTML is hidden regardless of cookie
		this.addCSS();

		// Once the DOM has fully loaded
		this.domReady(function() {
			// Handle the cookie
			if(bioEp.checkCookie()) return;

			// Add the popup
			bioEp.addPopup();

			// Load events
			setTimeout(function() {
				bioEp.loadEvents();

				if(bioEp.showOnDelay)
					bioEp.showPopup();
			}, bioEp.delay * 1000);
		});
	}
}

;(function($) {

	$(document).ready(function() {

    /**
	     * Added for audit/review
	     */
	    $('#footer-web-review, #header-web-review').on('submit', function(e) {
	      e.preventDefault();
	      var $input = $(this).find('input[name=domain]');
	      window.location = "https://rise.co/tool?domain=" + $input.val();
	    });

		var testMobile;
		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		testMobile = isMobile.any();
    //testMobile = true; // Used to simulate no js / custom-scroll / parallaxing
		if (testMobile == null) {
      $('body').removeClass('no-js');
      var is_safari = navigator.userAgent.indexOf("Safari") > -1;
      if (!is_safari) {
        $('body').removeClass('is-safari');
      }
			$('.js-parallax').parallaxElement({
			  defaultSpeed:  0.2,   // Integer - Default speed if `data-speed` is not present
			  useOffset:     false,  // Boolean - Whether or not to start animations below bottom of viewport
			  defaultOffset: 200,   // Distance before element appears to start animation
			  disableMobile: false, // Boolean - allow function to run on mobile devices
			  minWidth:      false  // Integer - minimum width the function should fire
			});
		}

    var position = 0;
    var hidenav = 500;

    document.addEventListener('scroll', function(){
      updateHeader();
    });

    function isScrolledIntoView(elem){
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    var lastRememberedScroll = 0;

    var formTopOffsetOriginal; // handled after page is loaded, within isLoaded();
    function updateHeader() {

      var scroll = $(window).scrollTop();

      var newval = scroll - $(window).height() + 100;

      // Article social fixed position
      if ( $(window).width() > 750 && $('body').hasClass('is-loaded') ) {

        if ( $('.article-content').length && $('.article .content .social').length ) {
          var articleBottomOffset = $('.article-content').offset().top + $('.article-content').height();
          var socialBottomOffset = $('.article .content .social').offset().top + $('.article .content .social').height();

          if (newval >= articleBottomOffset - 1000) {
            $('.article .content .social').css('transform', 'translate3d(0px, ' + articleBottomOffset - 1000 + 'px, 0px)');
          } else if (newval > 0) {
            $('.article .content .social').css('transform', 'translate3d(0px, ' + newval + 'px, 0px)');
          } else if (newval < 0) {
            $('.article .content .social').css('transform', 'translate3d(0px, 0px, 0px)');
          }
        }

      } else {
        $('.article .content .social').css('transform', 'translate3d(0px, 0px, 0px)');
      }

      // Start-Project form fixed position
      if ( ($(window).width() > 1100) && ($(window).height() > 580) && $('body').hasClass('is-loaded') ) {

        if ( $('.startproject .recognition').length && $('.startproject .features .form').length ) {

          var bottomSectionOffset = parseInt($('.startproject .dont-wait').offset().top);
          var formBottomOffset = parseInt($('.startproject .features .form').offset().top) + parseInt($('.startproject .features .form').css('height'));
          var manualPadding = 150;
          var stopPoint = parseInt(bottomSectionOffset - manualPadding);

          var newOffset = parseInt(bottomSectionOffset - $(window).height() - parseInt($('.startproject .features .form').css('height')) - manualPadding);

          if ( $('body').hasClass('startproject') ) {

            // start project page
            if ( (formBottomOffset <= parseInt(bottomSectionOffset - manualPadding)) || (scroll < lastRememberedScroll) ) {
              lastRememberedScroll = scroll;
              $('.startproject .features .form').css('transform', 'translate3d(0px, ' + scroll + 'px, 0px)');
            }

          } else {

            // embedded on another page
            if ( ( (formBottomOffset <= parseInt(bottomSectionOffset - manualPadding)) || (scroll < lastRememberedScroll) ) && ( ( (scroll + manualPadding) > formTopOffsetOriginal) ) ) {
              lastRememberedScroll = scroll;
              $('.startproject .features .form').css('transform', 'translate3d(0px, ' + parseInt(scroll + manualPadding - formTopOffsetOriginal) + 'px, 0px)');
            }

          }

        }

      } else {
        $('.startproject .features .form').css('transform', 'translate3d(0px, 0px, 0px)');
      }

      if ( scroll <= 50 ) {
        $('header').removeClass('small');
      } else {
        $('header').addClass('small');
      }
    }

		setTimeout(function(){
      skipLoadAnim();
      //window.scrollTo(0, 0, 0);
		}, 1);

    function isLoaded() {
      if ( !$('body').hasClass('is-loaded') ) {
        $('body').addClass('is-loaded');
        setTimeout(function(){
          skipLoadAnim();
        }, 1);
        //window.scrollTo(0, 0, 0);
        setTimeout(function(){
          //window.scrollTo(0, 0, 0);
          $('body').addClass('finished-loading');
          $('body').removeClass('skip-loadanim');
          window.dispatchEvent(new Event('resize'));
          formTopOffsetOriginal = parseInt($('.startproject .features .form').offset().top);
        }, 1400);
      }
    }

    function skipLoadAnim() {
      if (window.performance) {
        if (performance.navigation.type == 1) {
          // Only skip page load animation if user has scrolled past intro section
          //if ( sessionStorage.getItem("refresh_height") >= $(window).height() ) {
            //$('body').addClass('skip-loadanim');
            //window.scrollTo(0, sessionStorage.getItem("refresh_height"), 0);
            //document.dispatchEvent(new Event('scroll'));
            //updateHeader();
            //document.dispatchEvent(new Event('scroll'));
          //}
        }
      }
    }

    function wiggleAnim() {
    	setTimeout(function() {
    		if ($('body').hasClass("finished-loading")) {
    			$('.home .intro .featured-projects .bg .wrap,.home.finished-loading .intro .featured-projects .project:first-child .wrap').addClass("wiggle");
    			setTimeout(function() {
    				$('.home .intro .featured-projects .bg .wrap,.home.finished-loading .intro .featured-projects .project:first-child .wrap').removeClass("wiggle");
    			}, 750);
          $('.home.finished-loading .intro .featured-projects .project:nth-child(2) .wrap').mouseover(function() {
            $('.home .intro .featured-projects .bg .wrap,.home.finished-loading .intro .featured-projects .project:first-child .wrap').removeClass("wiggle");
          });
    		}
    	}, 2000);
    }

    wiggleAnim();

  	$(window).on('load', function() {
  		isLoaded();
      wiggleAnim();
  	});

    setTimeout(function () {
      isLoaded();
    }, 3000);

		$(window).on('beforeunload', function(e) {
      //var scroll = $(window).scrollTop();
      //sessionStorage.setItem("refresh_height", scroll);
      $('body').addClass('is-leaving');

      // If leaver is stuck open, this will remove it eventually
      setTimeout(function() {
        $('body').removeClass('is-leaving');
      }, 5000);
		});

		$('a[href^="https://rise.co"]').click(function(e){
			e.preventDefault();
      var href = this.href;
      $('body').addClass('is-leaving');
      setTimeout(function() {
        window.location = href;
      }, 500);
		});

    /*$(window).on('pageshow', function(e) {
      $('body').removeClass('is-leaving');
		});*/

    $(window).bind("pageshow", function(event) {
      if (event.originalEvent.persisted) {
        //console.log("persisted");
        $('body').removeClass('is-leaving');
      } else {
        //console.log("not persisted");
      }
    });

		$('.menu-toggle').click(function() {
      $('header').toggleClass('in');
			$('.menu-toggle,.menu').toggleClass('in');
		});

    function isset(object) {
      return (typeof object !=='undefined');
    }

		$('.scroll-home').click(function() {
      $('html,body').animate({
        scrollTop: $('.home .work').offset().top
      }, 800);
		});
    $('.backtoform').click(function() {
      $('html,body').animate({
        scrollTop: $('#theform').offset().top
      }, 800);
		});
    $('.careers .cta a').click(function() {
      $('html,body').animate({
        scrollTop: $('.careers .positions').offset().top
      }, 800);
		});
    $('.partners .scroll-form').click(function() {
      $('html,body').animate({
        scrollTop: $('.partners .refer .referral').offset().top
      }, 800);
		});

    $('header .startproject a').click(function() {

      if ( $('.startproject .features .form').length ){
        // scroll to form on page if available
        event.preventDefault();
        $('html,body').animate({
          scrollTop: parseInt($('.startproject .features .form').offset().top - 150)
        }, 800);
      }

		});

		$('.home .slick-wrap').slick({
			slidesToShow: 2,
			nextArrow: $('.slider .right'),
			prevArrow: $('.slider .left'),
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1
          }
        }
      ]
	  });

    $('.partners .slick-wrap').slick({
			slidesToShow: 2,
			nextArrow: $('.slider .right'),
			prevArrow: $('.slider .left'),
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1
          }
        }
      ]
	  });

    $('.startproject .slick-wrap').slick({
			slidesToShow: 2,
			nextArrow: $('.slider .right'),
			prevArrow: $('.slider .left'),
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1
          }
        }
      ]
	  });

    $('.about .slick-wrap').slick({
			slidesToShow: 3,
			nextArrow: $('.slider .right'),
			prevArrow: $('.slider .left'),
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1
          }
        }
      ]
	  });

    $('.careers .slick-wrap').slick({
      infinite: false,
      slidesToShow: 3,
			nextArrow: $('.slider .right'),
			prevArrow: $('.slider .left'),
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1
          }
        }
      ]
	  });

    $('.socialproof .slider .slick-wrap').slick({
			slidesToShow: 6,
			nextArrow: $('#socialproof-right'),
			prevArrow: $('#socialproof-left'),
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1
          }
        }
      ]
	  });

    $('.newsroom .intro .featured-image .slider .slick-wrap').slick({
			slidesToShow: 1,
			nextArrow: $('#newsbanner-right'),
			prevArrow: $('#newsbanner-left'),
			dots: true
	  });

    $('.newsroom .filters select[name="publication"]').change(function() {
      var publication_slug = $(this).val().toLowerCase().replace(' ','-');
      if (publication_slug == "all") {
        window.location = "https://rise.co/news";
      } else {
        window.location = "https://rise.co/news/publication/" + publication_slug;
      }
		});

    $('.newsroom .filters select[name="year"]').change(function() {
      var year_slug = $(this).val().toLowerCase().replace(' ','-');
      if (year_slug == "all") {
        window.location = "https://rise.co/news";
      } else {
        window.location = "https://rise.co/news/year/" + year_slug;
      }
		});

    $('.newsroom .filters select[name="type"]').change(function() {
      var type_slug = $(this).val().toLowerCase().replace(' ','-');
      if (type_slug == "all") {
        window.location = "https://rise.co/news";
      } else {
        window.location = "https://rise.co/news/type/" + type_slug;
      }
		});

    $('.article .article-content img').click(function() {
      $('.article-overlay .gallery-image').css('background-image','url(' + $(this).attr('src') + ')');
			$('.article-overlay').addClass('in');
		});

    $('.casestudy .featured-images .img').click(function() {
      $('.casestudy .work-overlay .gallery-image').css('background-image',$(this).children('.ctn').css('background-image'));
      $('.work-overlay').addClass('in');
    });

    $('.gallery-open').click(function() {
			$('.gallery-overlay').addClass('in');
		});
    $('.gallery-close').click(function() {
			$('.gallery-overlay,.article-overlay,.work-overlay').removeClass('in');
		});

    /*$('#form-open-new-business').click(function() {
			$('.contact .intro .form .form-wrap:not(#wrap-new-business)').addClass('out');
      $('.contact .intro .form #wrap-new-business').removeClass('out');
		});*/

    $('#form-open-misc').click(function() {
			$('.contact .intro .form .form-wrap:not(#wrap-misc)').addClass('out');
      $('.contact .intro .form #wrap-misc').removeClass('out');
		});

    $('.contact .form-back').click(function() {
			$('.contact .intro .form .form-wrap:not(#wrap-original)').addClass('out');
      $('.contact .intro .form #wrap-original').removeClass('out');
		});

    $('.article .user-comments form .author').click(function() {
      $('.article .user-comments form').addClass('open');
      setTimeout(function() {
        $('.article .user-comments form textarea').focus();
      }, 0);
		});

    $('.article .user-comments form #comment-cancel').click(function() {
      $('.article .user-comments form').removeClass('open');
      $('.article .user-comments form input[type="text"],.article .user-comments form textarea').val('');
		});

    $("#comment_form").submit(function(event) {

      event.preventDefault();

      var thisForm = $(this);

      var data = $(this).serialize();
      var url = $(this).attr("action");
      var posting = $.ajax( url, {
        method: "POST",
        data: data,
        statusCode: {
         200: function (response) {

          gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'comments'});

           if ( $('#comment-username').length ) {
             $('.article .user-comments form .details .name').html($('#comment-username').html());
           } else {
             $('.article .user-comments form .details .name').html($('.article .user-comments form .wrap input[name="name"]').val());
           }
           var date = new Date(Date.now());
           $('.article .user-comments form .details .date').html(date.toLocaleString("en-us",{month:"short"}) + ' ' + date.getDate() + ', ' + (date.getYear()+1900));

           $('.article .user-comments form').addClass('accepted');

           setTimeout(function() {
             $('.article .user-comments form .wrap,.article .user-comments form .checkbox,.article .user-comments form .submission, .article .user-comments form .comment-captcha').hide();
             $('.article .user-comments form .contents').append('<p id="new_comment">' + $('.article .user-comments form .wrap textarea').val() +'</p>');
             $('.article .user-comments form .contents').css('height', 80 + $('.article .user-comments form .contents #new_comment').height());
           }, 600);

         }
       }, success: function () {
         //$('#exit-intent form,#exit-intent .container').removeClass('out');
     }});

    });

    function socialWindow(url) {
      var left = (screen.width - 570) / 2;
      var top = (screen.height - 570) / 2;
      var params = "menubar=no,toolbar=no,status=no,width=570,height=570,top=" + top + ",left=" + left;
      window.open(url,"NewWindow",params);
    }

    var pageUrl = encodeURIComponent(document.URL);
    var tweet = encodeURIComponent($("meta[property='og:description']").attr("content"));

    $(".social-share.facebook").on("click", function() {
      url = "https://www.facebook.com/sharer.php?u=" + pageUrl;
      socialWindow(url);
    });

    $(".social-share.twitter").on("click", function() {
      url = "https://twitter.com/intent/tweet?url=" + pageUrl + "&text=" + tweet;
      socialWindow(url);
    });

    $(".social-share.linkedin").on("click", function() {
      url = "https://www.linkedin.com/shareArticle?mini=true&url=" + pageUrl;
      socialWindow(url);
    });

    bioEp.init();

    $("form.nl").submit(function(event) {

      event.preventDefault();

      var thisForm = $(this);

      var data = $(this).serialize();
      var url = $(this).attr("action");
      var posting = $.post( url, data, function(data) {
        // Newsletter sign-ups

        if ( thisForm.is('#exit-intent form') ) {
          $('#exit-intent form,#exit-intent .container').addClass('out');
        } else if ( thisForm.is('.menu .social form') ) {
          $('.menu .social form').removeClass('form-is-loaded');
        } else if ( thisForm.is('footer form') ) {
          $('footer form').removeClass('form-is-loaded');
        } else if ( thisForm.is('.newsletter-form form') ) {
          $('.newsletter-form form').removeClass('form-is-loaded');
          $('.article .newsletter-signup').removeClass('form-is-loaded');
        } else if ( thisForm.is('.article .newsletter-signup form') ) {
          $('.article .newsletter-signup form').removeClass('form-is-loaded');
        }

        var response = JSON.parse(data);

        setTimeout(function() {

          if ( response.status == 'success' ) {

            gtag('event', 'subscribe', { 'event_category': 'forms', 'event_label': 'newsletter'});

            if ( thisForm.is('#exit-intent form') ) {
              $('#exit-intent .wrap,#exit-intent .submit').hide();
              $('#exit-intent strong').html('You’re in');
              $('#exit-intent p').html('Check your inbox for us.');
              $('#exit-intent .container').addClass('finished');
            } else if ( thisForm.is('.menu .social form') ) {
              $('.menu .social form .wrap input').val('');
              $('.menu .social form .text strong').html('You’re in');
              $('.menu .social form .text span').html('Check your inbox for us.');
              $('.menu .social form').addClass('form-is-loaded');
            } else if ( thisForm.is('footer form') ) {
              $('footer form .wrap input').val('');
              $('footer form .text strong').html('You’re in');
              $('footer form .text span').html('Check your inbox for us.');
              $('footer form').addClass('form-is-loaded');
            } else if ( thisForm.is('.newsletter-form form') ) {
              $('.newsletter-form form .wrap input').val('');
              //$('.contact .newsletter .newsletter-form h3').html('You’re in<br>&nbsp;');
              $('.newsletter .newsletter-form h3').html('You’re in<br>&nbsp;');
              $('.newsletter-form form').addClass('form-is-loaded');
            } else if ( thisForm.is('.article .newsletter-signup form') ) {
              $('.article .newsletter-signup form .wrap input').val('');
              $('.article .newsletter-signup strong').html('You’re in');
              $('.article .newsletter-signup p').html('Check your inbox for us.');
              $('.article .newsletter-signup form').addClass('form-is-loaded');
            }

          } else {

            if ( thisForm.is('#exit-intent form') ) {
              $('#exit-intent strong').html('Oops...');
              $('#exit-intent p').html(response.message);
            } else if ( thisForm.is('.menu .social form') ) {
              $('.menu .social form .text strong').html('Oops...');
              $('.menu .social form .text span').html(response.message);
            } else if ( thisForm.is('footer form') ) {
              $('footer form .text strong').html('Oops...');
              $('footer form .text span').html(response.message);
            } else if ( thisForm.is('.newsletter-form form') ) {
              //$('.contact .newsletter .newsletter-form h3').html('Oops... <br>' + response.message);
              $('.newsletter .newsletter-form h3').html('Oops... <br>' + response.message);
              $('.newsletter-form form').addClass('form-is-loaded');
            } else if ( thisForm.is('.article .newsletter-signup form') ) {
              $('.article .newsletter-signup strong').html('Oops...');
              $('.article .newsletter-signup p').html(response.message);
              $('.article .newsletter-signup form').addClass('form-is-loaded');
            }

          }

          if ( thisForm.is('#exit-intent form') ) {
            $('#exit-intent form,#exit-intent .container').removeClass('out');
          } else if ( thisForm.is('.menu .social form') ) {
            $('.menu .social form').addClass('form-is-loaded');
          } else if ( thisForm.is('footer form') ) {
            $('footer form').addClass('form-is-loaded');
          } else if ( thisForm.is('.newsletter-form form') ) {
            $('.newsletter-form form').addClass('form-is-loaded');
          } else if ( thisForm.is('.article .newsletter-signup form') ) {
            $('.article .newsletter-signup form').addClass('form-is-loaded');
          }

        }, 3300);

      });

    });

    $("form.ap").submit(function(event) {

      event.preventDefault();

      var thisForm = $(this);

      if ( thisForm.is('.apply form') ) {
        $('.apply form').removeClass('form-is-loaded');
      }

      /*var data = $(this).serialize();*/
      var data = new FormData($(this)[0]);
      var url = $(this).attr("action");
      /*var posting = $.post( url, data, function(data) {*/

        data.append('rise_referrer', getCookie("rise_referrer"));
        data.append('rise_entry', getCookie("rise_entry"));
        data.append('rise_ip', getCookie("rise_ip"));
        data.append('rise_traffic', getCookie("rise_traffic"));
        data.append('rise_gclid', getCookie("rise_gclid"));
        data.append('rise_page', getCookie("rise_page"));
        data.append('rise_affiliate', getCookie("rise_affiliate"));

        $.ajax({
          url: url,
          type: "POST",
          data: data,
          enctype: 'multipart/form-data',
          processData: false,  // tell jQuery not to process the data
          contentType: false   // tell jQuery not to set contentType
        }).done(function(data) {

        var response = data;

        setTimeout(function() {

          if ( response.status == 'success' ) {

            if(thisForm.is('.apply form#form-contact-scholarship')) {
              gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'scholarship'});
            } else {
              gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'jobapplication'});
            }

            if ( thisForm.is('.apply form') ) {
              $('.apply form .wrap input').val('');
              $('.apply form .wrap textarea').val('');
              $('.apply form .wrap select').prop('selectedIndex',0);
              $(".scholarship .apply .form .wrap.file label").attr("data-before",'');
              $('.apply form h4').html('We’ve received your submission.');
            }

          } else {

            if ( thisForm.is('.apply form') ) {
              $('.apply form h4').html('Oops... ' + response.message);
            }

          }

          if ( thisForm.is('.apply form') ) {
            $('.apply form').addClass('form-is-loaded');
          }

        }, 3300);

      });
    });

    $("#transcript").change(function() {
  		$(".scholarship .apply .form .wrap.file label").attr("data-before", $(this).val() );
  	});


    if ( $('input.start').length ) {
      $('input.start').datepicker({
        onSelect: function(dateText) {
          $('input.start').removeClass('invalid');
        }
      });
    }
    if ( $('input.start').length ) {
      $('input.due').datepicker({
        onSelect: function(dateText) {
          $('input.due').removeClass('invalid');
        }
      });
    }

    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    var allowPost;
    $(".startproject:not(.startreview) .features .form form input[type=submit]").click(function(event) {

      event.preventDefault();

      // check for required fields

      var thisForm = $(this).parents(".startproject .features .form form");

      var data;
      if ( thisForm.is('.three') ) {
        var projectType = $('input[name="project-type"]:checked').val().replace(/\s+/g, '').toLowerCase();
        var chosenStepTwo = '.startproject .features .form form.two.' + projectType;
        data_prev = $('.startproject .features .form form.one,'+chosenStepTwo).serializeArray();
        data = new FormData($(thisForm)[0]);
        $.each(data_prev, function(key, input) {
          if(input.name == 'type') { return; }
          if(input.name == 'email') { return; }
          if(input.name == 'company') { return; }
          data.append(input.name, input.value);
        });

      } else {
        //data = thisForm.serialize();
        data = new FormData($(thisForm)[0]);
      }

      data.append('rise_referrer', getCookie("rise_referrer"));
      data.append('rise_entry', getCookie("rise_entry"));
      data.append('rise_ip', getCookie("rise_ip"));
      data.append('rise_traffic', getCookie("rise_traffic"));
      data.append('rise_gclid', getCookie("rise_gclid"));
      data.append('rise_page', getCookie("rise_page"));
      data.append('rise_affiliate', getCookie("rise_affiliate"));

      var url = thisForm.attr("action");
      var id = thisForm.attr("id");
      allowPost = true;

      // Form validation
      // Radio inputs
      if ( $("#"+id+" input[type='radio']").length && $("#"+id+" input[type='radio']").is(":checked") ) {
        $("#"+id+" .wrap.checks.radio label").removeClass('invalid');
      } else if ( $("#"+id+" input[type='radio']").length ) {
        $("#"+id+" .wrap.checks.radio label").addClass('invalid');
        allowPost = false;
      }
      if ( $("#"+id+" input[type='checkbox']").length && $("#"+id+" input[type='checkbox']").is(":checked") ) {
        $("#"+id+" .wrap.checks.checkbox label").removeClass('invalid');
      } else if ( $("#"+id+" input[type='checkbox']").length && !thisForm.hasClass("three") ) {
        $("#"+id+" .wrap.checks.checkbox label").addClass('invalid');
        allowPost = false;
      }
      $(".startproject .features .form form input,select,textarea").each(function() {
        var thisElement = $(this);
        if ( thisElement.prop('required') && !thisElement.val() ) {
          thisElement.addClass('invalid');
        } else {
          thisElement.removeClass('invalid');
        }
      });
      $(".startproject .features .form form:not(.hidden) input,select,textarea").each(function() {
        var thisElement = $(this);
        if ( thisElement.parent().is("#"+id) ) {
          if ( thisElement.prop('required') && !thisElement.val() ) {
            allowPost = false;
          }
        }
      });

      if ( allowPost ) {

        // Only post if form validated

        thisForm.removeClass('form-is-loaded');

        //var posting = $.post( url, data, function(data) {

          //var data = new FormData($(thisForm)[0]);

          $.ajax({
            url: url,
            type: "POST",
            data: data,
            enctype: 'multipart/form-data',
            processData: false,  // tell jQuery not to process the data
            contentType: false   // tell jQuery not to set contentType
          }).done(function(data) {

          var response = data;

            if ( response.status == 'success' ) {

              $(".startproject .features .form form input,select,textarea").removeClass('invalid');

              if ( ($(window).width() < 1100) && $('body').hasClass('is-loaded') ) {
                $('html,body').animate({
                  scrollTop: $('#theform').offset().top
                }, 800);
              }

              if ( thisForm.is('.one') ) {

                $('.startproject .features .form form.two input.hiddenemail,.startproject .features .form form.three input.hiddenemail').val( $('.startproject .features .form form.one input.email').val() );
                $('.startproject .features .form form.two input.hiddencompany,.startproject .features .form form.three input.hiddencompany').val( $('.startproject .features .form form.one input.company').val() );

                gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'startprojectone' });

                var projectType = $('input[name="project-type"]:checked').val().replace(/\s+/g, '').toLowerCase();
                var chosenForm = '.startproject .features .form form.two.' + projectType;

                if ( projectType == 'website' || projectType == 'mobileapp' ) {
                  $('.startproject .features .form .wrap.projectbudget').removeClass("hidden");
                  $('.startproject .features .form .wrap.monthlybudget').addClass("hidden");
                } else if ( projectType == 'marketing' || projectType == 'seo' || projectType == 'full-serviceretainer' || projectType == 'other' ) {
                  $('.startproject .features .form form.three .wrap.projectbudget').addClass("hidden");
                  $('.startproject .features .form form.three .wrap.monthlybudget').removeClass("hidden");
                }

                $(thisForm).addClass('accepted');
                $(chosenForm).removeClass('hidden');
                $('.startproject .features .form .wrap input[name="favorites"]').remove();
                $('.startproject .features .form .wrap.extend').prepend('<input name="favorites" class="favorites[0]" autocomplete="on" type="text">');

                setTimeout(function() {
                  thisForm.addClass('form-is-loaded');
                  thisForm.addClass('hidden');
                  $(chosenForm).removeClass('accepted');
                  var originalHeight = parseInt($('.startproject .features .form').css('height'));
                  var paddingVal = parseInt( parseInt($('.startproject .features .form').css('padding-top')) + parseInt($('.startproject .features .form').css('padding-bottom')) );
                  var newHeight = parseInt(paddingVal + $(chosenForm).height());
                  //var heightDifference = Math.abs(originalHeight - newHeight);
                  //var newTop = parseInt(620 + (heightDifference/2))*-1;
                  $('.startproject .features .form').css('height',newHeight);
                  //$('.startproject .features .form').css('top',newTop);
                }, 600);

              } else if ( thisForm.is('.two') ) {

                gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'startprojecttwo' });

                $(thisForm).addClass('accepted');
                $('.startproject .features .form form.three').removeClass('hidden');

                setTimeout(function() {
                  thisForm.addClass('form-is-loaded');
                  $('.startproject .features .form form.two').addClass('hidden');
                  $('.startproject .features .form form.three').removeClass('accepted');
                  var paddingVal = parseInt( parseInt($('.startproject .features .form').css('padding-top')) + parseInt($('.startproject .features .form').css('padding-bottom')) );
                  $('.startproject .features .form').css('height', paddingVal +  $('.startproject .features .form form.three').height() );
                }, 600);

              } else if ( thisForm.is('.three') ) {

                // The final submission

                gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'startprojectthree' });

                $(thisForm).addClass('accepted');
                $('.startproject .features .form .success-results').removeClass('hidden');

                setTimeout(function() {
                  thisForm.addClass('form-is-loaded');
                  $('.startproject .features .form form.three').addClass('hidden');
                  $('.startproject .features .form .success-results').removeClass('accepted');
                  var paddingVal = parseInt( parseInt($('.startproject .features .form').css('padding-top')) + parseInt($('.startproject .features .form').css('padding-bottom')) );
                  $('.startproject .features .form').css('height', paddingVal +  $('.startproject .features .success-results').height() );
                }, 600);

              }

            } else {

              thisForm.children('h3').html('Oops... ' + response.message);
              thisForm.addClass('form-is-loaded');

            }

        });

      } else {

        thisForm.children('h3').html('Oops... Please correct your errors.');
        thisForm.addClass('form-is-loaded');

      }

    });

    $('.startproject .features .form .wrap input[type="radio"]').change(function(){
      var thisForm = $(this).parents(".startproject .features .form form");
      var id = thisForm.attr("id");
      if ($("#"+id+" input[type='radio']").is(":checked")) {
        $("#"+id+" .wrap.checks label").removeClass('invalid');
      } else {
        $("#"+id+" .wrap.checks label").addClass('invalid');
      }
    });
    $('.startproject .features .form .wrap input[type="checkbox"]').change(function(){
      var thisForm = $(this).parents(".startproject .features .form form");
      var id = thisForm.attr("id");
      if ($("#"+id+" input[type='checkbox']").is(":checked")) {
        $("#"+id+" .wrap.checks.checkbox label").removeClass('invalid');
      } else if ( !thisForm.hasClass("three") ) {
        $("#"+id+" .wrap.checks.checkbox label").addClass('invalid');
      }
    });

    $(".startproject .features .form input,select,textarea").change(function() {
      if ( $(this).prop('required') && !$(this).val() ) {
        $(this).addClass('invalid');
      } else {
        $(this).removeClass('invalid');
      }
    });

    $('.startproject .features .form .checkbox label input[name="project-type"]').change(function() {
      var projecttype = $('.startproject .features .form .checkbox label input[name="project-type"]:checked').val();
      if ( projecttype == "Other" ) {
        $(".startproject .features .form .checkbox label.labelother").addClass('inputdisplayed');
        $(".startproject .features .form span.otherspan").html("");
        $(".startproject .features .form input.otherinput").focus();
      } else {
        $(".startproject .features .form .checkbox label.labelother").removeClass('inputdisplayed');
        var othervalue = $(".startproject .features .form input.otherinput").val();
        //console.log("value = " + othervalue);
        if (othervalue == "") {
          $(".startproject .features .form span.otherspan").html("Other");
        } else {
          $(".startproject .features .form span.otherspan").html(othervalue);
        }
        $(".startproject .features .form input.otherinput").blur();
      }
    });

    $(".startproject .features .form .form-back").click(function(event) {

      event.preventDefault();

      if ( ($(window).width() < 1100) && $('body').hasClass('is-loaded') ) {
        $('html,body').animate({
          scrollTop: $('#theform').offset().top
        }, 800);
      }

      var thisForm = $(this).parents(".startproject .features .form form");
      $(thisForm).parents('.startproject .features .form').addClass('goingback');

      if ( thisForm.is('.two') ) {

        $(thisForm).addClass('accepted');

        setTimeout(function() {
          $('.startproject .features .form form.one h3').html('Contact Us');
          $('.startproject .features .form form.two').addClass('hidden');
          $('.startproject .features .form form.one').removeClass('hidden');
          $('.startproject .features .form form.one').removeClass('accepted');
          var paddingVal = parseInt( parseInt($('.startproject .features .form').css('padding-top')) + parseInt($('.startproject .features .form').css('padding-bottom')) );
          $('.startproject .features .form').css('height', paddingVal +  $('.startproject .features .form form.one').height() );
          $('.startproject .features .form').removeClass('goingback');
        }, 600);

      } else if ( thisForm.is('.three') ) {

        var chosenForm = '.startproject .features .form form.two.' + $('input[name="project-type"]:checked').val().replace(/\s+/g, '').toLowerCase();
        var chosenType = $('input[name="project-type"]:checked').val().replace(/\s+/g, '').toLowerCase();

        $(thisForm).addClass('accepted');

        setTimeout(function() {
          if (chosenType == "website") {
            $(chosenForm + ' h3').html('About Your Website');
          } else if (chosenType == "mobileapp") {
            $(chosenForm + ' h3').html('About Your Mobile App');
          } else if (chosenType == "marketing" || chosenType == "seo") {
            $(chosenForm + ' h3').html('About Your Campaign');
          } else if (chosenType == "full-serviceretainer") {
            $(chosenForm + ' h3').html('About Your Retainer');
          } else if (chosenType == "other") {
            $(chosenForm + ' h3').html('About Your Project');
          }
          $(thisForm).addClass('accepted');
          $(chosenForm).removeClass('hidden');
          $(chosenForm).removeClass('accepted');
          var paddingVal = parseInt( parseInt($('.startproject .features .form').css('padding-top')) + parseInt($('.startproject .features .form').css('padding-bottom')) );
          $('.startproject .features .form').css('height', paddingVal +  $(chosenForm).height() );
          $('.startproject .features .form').removeClass('goingback');
        }, 600);

      }

    });

    $(".startproject .features .form .wrap.extend span").click(function(event) {

      event.preventDefault();

      var thisInput = $('.startproject .features .form .wrap input[name="favorites"]:last-of-type');
      var thisIndex = $('.startproject .features .form .wrap input[name="favorites"]:last-of-type').index();

      $(thisInput).after('<input name="favorites" class="favorites[' + parseInt(thisIndex + 1) + ']" autocomplete="on" type="text">');

      var thisForm = $(this).parents(".startproject .features .form form");

      var paddingVal = parseInt( parseInt($('.startproject .features .form').css('padding-top')) + parseInt($('.startproject .features .form').css('padding-bottom')) );
      $('.startproject .features .form').css('height', paddingVal +  thisForm.height() );

    });

    $("#website-attachment").change(function() {
  		$(".startproject label[for=website-attachment]").attr("data-before", $(this).val());
  	});
    $("#mobileapp-attachment").change(function() {
  		$(".startproject label[for=mobileapp-attachment]").attr("data-before", $(this).val());
  	});
    $("#marketing-attachment").change(function() {
  		$(".startproject label[for=marketing-attachment]").attr("data-before", $(this).val());
  	});
    $("#seo-attachment").change(function() {
  		$(".startproject label[for=seo-attachment]").attr("data-before", $(this).val());
  	});
    $("#full-serviceretainer-attachment").change(function() {
  		$(".startproject label[for=full-serviceretainer-attachment]").attr("data-before", $(this).val());
  	});
    $("#other-attachment").change(function() {
  		$(".startproject label[for=other-attachment]").attr("data-before", $(this).val());
  	});

    $("form.partnersform").submit(function(event) {

      event.preventDefault();

      var thisForm = $(this);

      if (thisForm.is('.partners .startearning form') ) {
        $('.partners .startearning form').removeClass('form-is-loaded');
      } else if ( thisForm.is('.partners .refer form') ) {
        $('.partners .refer form').removeClass('form-is-loaded');
      }

      /*var data = $(this).serialize();*/
      var data = new FormData($(this)[0]);
      var url = $(this).attr("action");
      /*var posting = $.post( url, data, function(data) {*/

        data.append('rise_referrer', getCookie("rise_referrer"));
        data.append('rise_entry', getCookie("rise_entry"));
        data.append('rise_ip', getCookie("rise_ip"));
        data.append('rise_traffic', getCookie("rise_traffic"));
        data.append('rise_gclid', getCookie("rise_gclid"));
        data.append('rise_page', getCookie("rise_page"));
        data.append('rise_affiliate', getCookie("rise_affiliate"));

        $.ajax({
          url: url,
          type: "POST",
          data: data,
          enctype: 'multipart/form-data',
          processData: false,  // tell jQuery not to process the data
          contentType: false   // tell jQuery not to set contentType
        }).done(function(data) {

        var response = data;

        setTimeout(function() {

          if ( response.status == 'success' ) {


            if ( thisForm.is('.startearning form') ) {

              gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'partnerformshort'});

              $('.startearning form input:not([type="submit"])').val('');

              $('.startearning form input[name="honey"]').val('1');
              $('.startearning form input[name="type"]').val('referralshort');

              $('.startearning form h4').html('We’ve received your submission.');

            } else if ( thisForm.is('.refer form') ) {

              gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'partnerformfull'});

              $('.refer form input:not([type="submit"])').val('');
              $('.refer form .wrap textarea').val('');

              $('.refer form input[name="honey"]').val('1');
              $('.refer form input[name="type"]').val('referralfull');

              $('.partners .refer .duo .left .lower h2').html('We’ve received your submission.');

            }

          } else {

            if ( thisForm.is('.startearning form') ) {
              //$('.startearning form h4').html('Oops... ' + response.message);
            } else if ( thisForm.is('.refer form') ) {
              $('.partners .refer .duo .left .lower h2').html('Oops... ' + response.message);
            }

          }

          if ( thisForm.is('.partners .startearning form') ) {
            $('.partners .startearning form').addClass('form-is-loaded');
          } else if ( thisForm.is('.partners .refer form') ) {
            $('.partners .refer form').addClass('form-is-loaded');
          }

        }, 3300);

      });
    });

	});

})(jQuery);

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Contact Form AJAX Submission
function submitContactFormAjax(form_id) {


  event.preventDefault();

  var thisForm = $("form#"+form_id);
  if ( thisForm.hasClass('form-is-loaded') ) {
    thisForm.removeClass('form-is-loaded');
  }

var data = thisForm.serializeArray();
//var data = new FormData($("form#"+form_id)[0]);
var url = thisForm.attr("action");

data.push({name: 'rise_referrer', value: getCookie("rise_referrer")});
data.push({name: 'rise_entry', value: getCookie("rise_entry")});
data.push({name: 'rise_ip', value: getCookie("rise_ip")});
data.push({name: 'rise_traffic', value: getCookie("rise_traffic")});
data.push({name: 'rise_gclid', value: getCookie("rise_gclid")});
data.push({name: 'rise_page', value: getCookie("rise_page")});
data.push({name: 'rise_affiliate', value: getCookie("rise_affiliate")});

  var posting = $.post( url, data, function(data) {

    // Contact forms
    var response = data;

    setTimeout(function() {

      if ( response.status == 'success' ) {

        if(form_id == 'form-contact-newbusiness') {
          gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'newbusiness'});
        }

        if(form_id == 'form-contact-misc') {
          gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'generalcontact'});
        }

        if(form_id == 'mediainquiry') {
          gtag('event', 'submission', { 'event_category': 'forms', 'event_label': 'newsinquiry'});
        }

        if ( thisForm.is('.contact .form form') ) {
          thisForm.find('input:not([type="submit"]):not([type="hidden"]):not([class="hidden"]),textarea').val('');
          thisForm.children('h3').addClass('form-success');
          thisForm.children('h3').html('We’ve received your message.');
          thisForm.addClass('form-is-loaded');
        } else if ( thisForm.is('.newsroom .posts .right .media .form form') ) {
          thisForm.find('input:not([type="submit"]):not([type="hidden"]):not([class="hidden"]),textarea').val('');
          $('.newsroom .posts .right .media h3.primary').html('Got it');
          $('.newsroom .posts .right .media p.primary').html('We’ve received your message.');
          thisForm.addClass('form-is-loaded');
          //grecaptcha.reset();
        }

      } else {

        if ( thisForm.is('.contact .form form') ) {
          thisForm.children('h3').html('Oops... <br>' + response.message);
          thisForm.addClass('form-is-loaded');
          //grecaptcha.reset();
        } else if ( thisForm.is('.newsroom .posts .right .media .form form') ) {
          $('.newsroom .posts .right .media h3.primary').html('Oops...');
          $('.newsroom .posts .right .media p.primary').html(response.message);
          thisForm.addClass('form-is-loaded');
          //grecaptcha.reset();
        }

      }

      if ( thisForm.is('.contact .form form') ) {
        thisForm.addClass('form-is-loaded');
      }

    }, 3300);

  });

}

function submitNewsletter_header(token) {
  $('header form.nl').submit();
}

function submitNewsletter_footer(token) {
  $('footer form.nl').submit();
}

function submitNewbusiness(token) {
  submitContactFormAjax("form-contact-newbusiness");
}

function submitMisc(token) {
  submitContactFormAjax("form-contact-misc");
}

function submitNewsletter_contact(token) {
  $('#form-contact-newsletter').submit();
}

function submitNewsletter_article(token) {
  $('.article form.nl').submit();
}

function submitNewsletter_exit(token) {
  $('#exit-intent form.nl').submit();
}

function submitMediaInquiry(token) {
  submitContactFormAjax("mediainquiry");
}
