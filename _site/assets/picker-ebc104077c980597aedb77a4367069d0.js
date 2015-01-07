!function(e){"function"==typeof define&&define.amd?define("picker",["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):this.Picker=e(jQuery)}(function(e){function t(i,a,s,f){function l(){return t._.node("div",t._.node("div",t._.node("div",t._.node("div",w.component.nodes(y.open),$.box),$.wrap),$.frame),$.holder)}function p(){k.data(a,w).addClass($.input).attr("tabindex",-1).val(k.data("value")?w.get("select",b.format):i.value),b.editable||k.on("focus."+y.id+" click."+y.id,function(e){e.preventDefault(),w.$root[0].focus()}).on("keydown."+y.id,h),r(i,{haspopup:!0,expanded:!1,readonly:!1,owns:i.id+"_root"+(w._hidden?" "+w._hidden.id:"")})}function m(){w.$root.on({keydown:h,focusin:function(e){w.$root.removeClass($.focused),e.stopPropagation()},"mousedown click":function(t){var n=t.target;n!=w.$root.children()[0]&&(t.stopPropagation(),"mousedown"!=t.type||e(n).is(":input")||"OPTION"==n.nodeName||(t.preventDefault(),w.$root[0].focus()))}}).on({focus:function(){k.addClass($.target)},blur:function(){k.removeClass($.target)}}).on("focus.toOpen",v).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var t=e(this),n=t.data(),o=t.hasClass($.navDisabled)||t.hasClass($.disabled),r=d();r=r&&(r.type||r.href),(o||r&&!e.contains(w.$root[0],r))&&w.$root[0].focus(),!o&&n.nav?w.set("highlight",w.component.item.highlight,{nav:n.nav}):!o&&"pick"in n?w.set("select",n.pick).close(!0):n.clear?w.clear().close(!0):n.close&&w.close(!0)}),r(w.$root[0],"hidden",!0)}function g(){var t;b.hiddenName===!0?(t=i.name,i.name=""):(t=["string"==typeof b.hiddenPrefix?b.hiddenPrefix:"","string"==typeof b.hiddenSuffix?b.hiddenSuffix:"_submit"],t=t[0]+i.name+t[1]),w._hidden=e('<input type=hidden name="'+t+'"'+(k.data("value")||i.value?' value="'+w.get("select",b.formatSubmit)+'"':"")+">")[0],k.on("change."+y.id,function(){w._hidden.value=i.value?w.get("select",b.formatSubmit):""}).after(w._hidden)}function h(e){var t=e.keyCode,n=/^(8|46)$/.test(t);return 27==t?(w.close(),!1):void((32==t||n||!y.open&&w.component.key[t])&&(e.preventDefault(),e.stopPropagation(),n?w.clear().close():w.open()))}function v(e){e.stopPropagation(),"focus"==e.type&&w.$root.addClass($.focused),w.open()}if(!i)return t;var _=!1,y={id:i.id||"P"+Math.abs(~~(Math.random()*new Date))},b=s?e.extend(!0,{},s.defaults,f):f||{},$=e.extend({},t.klasses(),b.klass),k=e(i),x=function(){return this.start()},w=x.prototype={constructor:x,$node:k,start:function(){return y&&y.start?w:(y.methods={},y.start=!0,y.open=!1,y.type=i.type,i.autofocus=i==d(),i.readOnly=!b.editable,i.id=i.id||y.id,"text"!=i.type&&(i.type="text"),w.component=new s(w,b),w.$root=e(t._.node("div",l(),$.picker,'id="'+i.id+'_root" tabindex="0"')),m(),b.formatSubmit&&g(),p(),b.container?e(b.container).append(w.$root):k.after(w.$root),w.on({start:w.component.onStart,render:w.component.onRender,stop:w.component.onStop,open:w.component.onOpen,close:w.component.onClose,set:w.component.onSet}).on({start:b.onStart,render:b.onRender,stop:b.onStop,open:b.onOpen,close:b.onClose,set:b.onSet}),_=n(w.$root.children()[0]),i.autofocus&&w.open(),w.trigger("start").trigger("render"))},render:function(e){return e?w.$root.html(l()):w.$root.find("."+$.box).html(w.component.nodes(y.open)),w.trigger("render")},stop:function(){return y.start?(w.close(),w._hidden&&w._hidden.parentNode.removeChild(w._hidden),w.$root.remove(),k.removeClass($.input).removeData(a),setTimeout(function(){k.off("."+y.id)},0),i.type=y.type,i.readOnly=!1,w.trigger("stop"),y.methods={},y.start=!1,w):w},open:function(n){return y.open?w:(k.addClass($.active),r(i,"expanded",!0),setTimeout(function(){w.$root.addClass($.opened),r(w.$root[0],"hidden",!1)},0),n!==!1&&(y.open=!0,_&&u.css("overflow","hidden").css("padding-right","+="+o()),w.$root[0].focus(),c.on("click."+y.id+" focusin."+y.id,function(e){var t=e.target;t!=i&&t!=document&&3!=e.which&&w.close(t===w.$root.children()[0])}).on("keydown."+y.id,function(n){var o=n.keyCode,r=w.component.key[o],i=n.target;27==o?w.close(!0):i!=w.$root[0]||!r&&13!=o?e.contains(w.$root[0],i)&&13==o&&(n.preventDefault(),i.click()):(n.preventDefault(),r?t._.trigger(w.component.key.go,w,[t._.trigger(r)]):w.$root.find("."+$.highlighted).hasClass($.disabled)||w.set("select",w.component.item.highlight).close())})),w.trigger("open"))},close:function(e){return e&&(w.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){w.$root.on("focus.toOpen",v)},0)),k.removeClass($.active),r(i,"expanded",!1),setTimeout(function(){w.$root.removeClass($.opened+" "+$.focused),r(w.$root[0],"hidden",!0)},0),y.open?(y.open=!1,_&&u.css("overflow","").css("padding-right","-="+o()),c.off("."+y.id),w.trigger("close")):w},clear:function(e){return w.set("clear",null,e)},set:function(t,n,o){var r,i,a=e.isPlainObject(t),d=a?t:{};if(o=a&&e.isPlainObject(n)?n:o||{},t){a||(d[t]=n);for(r in d)i=d[r],r in w.component.item&&(void 0===i&&(i=null),w.component.set(r,i,o)),("select"==r||"clear"==r)&&k.val("clear"==r?"":w.get(r,b.format)).trigger("change");w.render()}return o.muted?w:w.trigger("set",d)},get:function(e,n){if(e=e||"value",null!=y[e])return y[e];if("valueSubmit"==e){if(w._hidden)return w._hidden.value;e=value}if("value"==e)return i.value;if(e in w.component.item){if("string"==typeof n){var o=w.component.get(e);return o?t._.trigger(w.component.formats.toString,w.component,[n,o]):""}return w.component.get(e)}},on:function(t,n,o){var r,i,a=e.isPlainObject(t),d=a?t:{};if(t){a||(d[t]=n);for(r in d)i=d[r],o&&(r="_"+r),y.methods[r]=y.methods[r]||[],y.methods[r].push(i)}return w},off:function(){var e,t,n=arguments;for(e=0,namesCount=n.length;namesCount>e;e+=1)t=n[e],t in y.methods&&delete y.methods[t];return w},trigger:function(e,n){var o=function(e){var o=y.methods[e];o&&o.map(function(e){t._.trigger(e,w,[n])})};return o("_"+e),o(e),w}};return new x}function n(e){var t,n="position";return e.currentStyle?t=e.currentStyle[n]:window.getComputedStyle&&(t=getComputedStyle(e)[n]),"fixed"==t}function o(){if(u.height()<=s.height())return 0;var t=e('<div style="visibility:hidden;width:100px" />').appendTo("body"),n=t[0].offsetWidth;t.css("overflow","scroll");var o=e('<div style="width:100%" />').appendTo(t),r=o[0].offsetWidth;return t.remove(),n-r}function r(t,n,o){if(e.isPlainObject(n))for(var r in n)i(t,r,n[r]);else i(t,n,o)}function i(e,t,n){e.setAttribute(("role"==t?"":"aria-")+t,n)}function a(t,n){e.isPlainObject(t)||(t={attribute:n}),n="";for(var o in t){var r=("role"==o?"":"aria-")+o,i=t[o];n+=null==i?"":r+'="'+t[o]+'"'}return n}function d(){try{return document.activeElement}catch(e){}}var s=e(window),c=e(document),u=e(document.documentElement);return t.klasses=function(e){return e=e||"picker",{picker:e,opened:e+"--opened",focused:e+"--focused",input:e+"__input",active:e+"__input--active",target:e+"__input--target",holder:e+"__holder",frame:e+"__frame",wrap:e+"__wrap",box:e+"__box"}},t._={group:function(e){for(var n,o="",r=t._.trigger(e.min,e);r<=t._.trigger(e.max,e,[r]);r+=e.i)n=t._.trigger(e.item,e,[r]),o+=t._.node(e.node,n[0],n[1],n[2]);return o},node:function(t,n,o,r){return n?(n=e.isArray(n)?n.join(""):n,o=o?' class="'+o+'"':"",r=r?" "+r:"","<"+t+o+r+">"+n+"</"+t+">"):""},lead:function(e){return(10>e?"0":"")+e},trigger:function(e,t,n){return"function"==typeof e?e.apply(t,n||[]):e},digits:function(e){return/\d/.test(e[1])?2:1},isDate:function(e){return{}.toString.call(e).indexOf("Date")>-1&&this.isInteger(e.getDate())},isInteger:function(e){return{}.toString.call(e).indexOf("Number")>-1&&e%1===0},ariaAttr:a},t.extend=function(n,o){e.fn[n]=function(r,i){var a=this.data(n);return"picker"==r?a:a&&"string"==typeof r?t._.trigger(a[r],a,[i]):this.each(function(){var i=e(this);i.data(n)||new t(this,n,o,r)})},e.fn[n].defaults=o.defaults},t});