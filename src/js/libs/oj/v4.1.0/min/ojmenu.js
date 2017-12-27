/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","hammerjs","ojs/ojjquery-hammer","promise","ojs/ojcomponentcore","ojs/ojpopupcore","ojs/ojanimation","ojs/ojoption"],function(a,g,c){(function(){a.hb("oj.ojMenu",g.oj.baseComponent,{defaultElement:"\x3cul\x3e",delay:300,role:"menu",widgetEventPrefix:"oj",options:{menuSelector:"ul",openOptions:{display:"auto",initialFocus:"menu",launcher:null,position:{my:"start top",at:"start bottom",collision:"flipfit"}},submenuOpenOptions:{position:{my:"start top",at:"end top",collision:"flipfit"}},
animateStart:null,animateEnd:null,beforeOpen:null,close:null,open:null,action:null},qc:function(){this._super();var a=this;this._focusForTesting=this.gh;this._nextForTesting=this.fpa;this._selectForTesting=this.vi;this.gB=this.element;this.W$=!1;if(!this.Y()&&h&&"ul"!==this.element[0].tagName.toLowerCase())throw Error("Cancel item supported for \x3cul\x3e menus only.");this.tYa();this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role,tabIndex:"0"});this._on(!0,{"mousedown .oj-menu-item":function(a){this.options.disabled&&
a.preventDefault()},click:function(a){this.options.disabled&&a.preventDefault()},keydown:function(a){!this.options.disabled||a.keyCode!==g.ui.keyCode.ESCAPE&&a.keyCode!==g.ui.keyCode.TAB||(a.keyCode===g.ui.keyCode.TAB&&a.preventDefault(),this.af&&this.sJ(a))}});this.options.disabled&&this.element.addClass("oj-disabled").attr("aria-disabled","true");var b=function(a){if(!this.b9){this.b9=!0;var b=g(a.currentTarget);try{this.Sja=!0,this.gh(a,b)}finally{this.Sja=!1}}}.bind(this),c=function(a){a&&a.target&&
!g(a.target).is(":visible")||this.ii(a,"eventSubtree")}.bind(this);this._on({"mousedown .oj-menu-item \x3e a":function(a){a.preventDefault()},"click .oj-disabled \x3e a":function(a){a.preventDefault()},click:function(){this.W$=!1},touchstart:function(){this.b9=!1},mouseover:function(){this.b9=!1},"click .oj-menu-item:has(a)":function(a){var b=g(a.target).closest(".oj-menu-item");!this.W$&&b.not(".oj-disabled").length&&(this.W$=!0,a.preventDefault(),this.xb&&this.xb.closest(b).length&&this.xb.get(0)!=
b.get(0)||(b.has(".oj-menu").length?this.qe(a):(this.vi(a),this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.xb&&1===this.xb.parents(".oj-menu").length&&this.qf&&this.qf()))))},"mouseenter .oj-menu-item":b,"touchstart .oj-menu-item":b,mouseleave:c,"mouseleave .oj-menu":c,focus:function(a,b){if(!b){var c=this.xb||this.element.children(".oj-menu-item").eq(0);this.gh(a,c)}},keydown:this.Ww,keyup:function(a){if(a.keyCode==g.ui.keyCode.ENTER||a.keyCode==g.ui.keyCode.SPACE)this.YP=!1}});
this._focusable({applyHighlight:!e,recentPointer:function(){return a.Sja},setupHandlers:function(b,c){a.Oj=b;a.bj=c}});this.Jta=g.proxy(this.aM,this);this.qb()},K_:function(a){if(arguments.length)d=a;else return d},Qr:function(){var a=this,b=this.element.find("oj-option");g.each(b,function(b,c){c.customOptionRenderer=a.ur.bind(a)})},ur:function(b){var c=g(b);if(!c.is(":not(.oj-menu-item)")||/[^\-\u2014\u2013\s]/.test(c.text())){var d=c.children("a");if(!(0<d.length)){d=document.createElement("a");
d.setAttribute("href","#");c.prepend(d);var e=["startIcon",""],f=a.J.Dn(b);g.each(f,function(a,c){-1==e.indexOf(a)&&g.each(c,function(a,c){b.removeChild(c)})});g.each(e,function(a,c){if(f[c]){var e=0;g.each(f[c],function(a,f){""===c?g(d).append(f):"startIcon"===c&&(0==e?(g(f).addClass("oj-menu-item-icon"),g(d).append(f),e++):b.removeChild(f))})}});!0==b.disabled&&c.addClass("oj-disabled")}}},T0:function(a){if(("focus"===a.type||"mousedown"===a.type||"touchstart"===a.type||93==a.which||121==a.which&&
a.shiftKey||93==a.keyCode)&&("mousedown"!==a.type||!d)){var c=this,e=b.slice(0,b.length);g.each(e,function(b,d){if(!g(a.target).closest(d.element).length&&("keydown"===a.type||"mousedown"===a.type&&3===a.which||!g(a.target).closest(d.af).length||d.aTa&&("mousedown"===a.type&&3!==a.which||"touchstart"===a.type))&&!d.Rz){d.Rz=a;var e=d.ii(a,"eventSubtree");c.QE(e,function(){d.Rz&&(d.af&&d.$v(a),d.Rz=null)})}})}},_setOption:function(a,b){this._superApply(arguments);switch(a){case "translations.labelCancel":case "translations":this.lha&&
this.lha.text(this.options.translations.labelCancel)}},_destroy:function(){this.element.is(":visible")&&this.$v();this.Eo("none");this.qf&&this.qf();delete this.qf;this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=
g(this);a.data("oj-ojMenu-submenu-icon")&&a.remove()});this.element.find("a").removeAttr("aria-expanded");this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");0<=b.indexOf(this)&&b.splice(b.indexOf(this),1);delete this.Tp;delete this.Jta;var a=this.yha;delete this.yha;a&&a();this.pQ&&this.pQ.remove();this.element.Tg("destroy");this._super()},Ww:function(a){function b(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$\x26")}var c,d,e,f,h=!0;switch(a.keyCode){case g.ui.keyCode.HOME:this.kT("first",
"first",a);break;case g.ui.keyCode.END:this.kT("last","last",a);break;case g.ui.keyCode.UP:this.LUa(a);break;case g.ui.keyCode.DOWN:this.fpa(a);break;case g.ui.keyCode.LEFT:case g.ui.keyCode.RIGHT:a.keyCode===g.ui.keyCode.RIGHT^this.Fn?this.xb&&!this.xb.is(".oj-disabled")&&this.qe(a):this.ii(a,"active");break;case g.ui.keyCode.ENTER:case g.ui.keyCode.SPACE:this.xPa(a);this.YP=!0;var k=this;setTimeout(function(){k.YP=!1},100);break;case g.ui.keyCode.TAB:a.preventDefault();this.af&&this.sJ(a);break;
case g.ui.keyCode.ESCAPE:this.af?(d=this.element.attr("aria-activedescendant"),e="#"+this.element.attr("id")+"\x3e*\x3ea",d&&!g("#"+d).is(e)?this.ii(a,"active"):this.sJ(a)):this.ii(a,"active");break;default:h=!1,c=this.eX||"",d=String.fromCharCode(a.keyCode),e=!1,clearTimeout(this.e1a),d===c?e=!0:d=c+d,f=new RegExp("^"+b(d),"i"),c=this.gB.children(".oj-menu-item").filter(function(){return f.test(g(this).children("a").text())}),c=e&&-1!==c.index(this.xb.next())?this.xb.nextAll(".oj-menu-item"):c,c.length||
(d=String.fromCharCode(a.keyCode),f=new RegExp("^"+b(d),"i"),c=this.gB.children(".oj-menu-item").filter(function(){return f.test(g(this).children("a").text())})),c.length?(this.gh(a,c),1<c.length?(this.eX=d,this.e1a=setTimeout(function(){delete this.eX}.bind(this),1E3)):delete this.eX):delete this.eX}h&&a.preventDefault()},xPa:function(a){this.xb&&!this.xb.is(".oj-disabled")&&(this.xb.children("a[aria-haspopup\x3d'true']").length?this.qe(a):this.vi(a))},refresh:function(){this._super();this.qb();
var a=this.element;if(a.is(":visible")){var b=a.data("oj-menu-position");b&&(b.of instanceof g.Event||b.of instanceof Window||g(b.of).is(":visible"))&&(a.position(b),a.find(".oj-menu").each(function(){var a=g(this);a.is(":visible")&&(b=a.data("oj-menu-position"))&&a.position(b)}))}},qb:function(){this.Fn="rtl"===this.Uc();var a=this;if(this.Y())a.Qr(),b=g([]);else var b=this.element.find(this.options.menuSelector);var c=b.add(this.element),d=c.children();this.dRa=!!b.length;d.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
var e=d.filter(":not(.oj-menu-item):has(a)"),f=e.children("a");this.Ana(e);this.ona(f);e=d.filter(function(a,b){var c=g(b);return c.is(":not(.oj-menu-item)")&&!/[^\-\u2014\u2013\s]/.test(c.text())});this.wna(e);this.xRa(d,e);d.filter(".oj-disabled").children("a").attr("aria-disabled","true");d.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");b.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu oj-menu-dropdown").hide().attr({role:this.role,"aria-hidden":"true"}).each(function(){var b=
g(this),c=a.u3(b),d=g("\x3cspan\x3e");d.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon",!0);c.attr("aria-haspopup","true").attr("aria-expanded","false").append(d);c=c.attr("id");b.attr("aria-labelledby",c)});c.each(function(){var a=g(this),b=a.children().children().children(".oj-menu-item-icon:not(.oj-menu-cancel-icon)").length;a.toggleClass("oj-menu-icons",!!b).toggleClass("oj-menu-text-only",!b)});this.xb&&!g.contains(this.element[0],this.xb[0])&&this.j0()},Ana:function(a){a.addClass("oj-menu-item").attr("role",
"presentation")},ona:function(a){a.uniqueId().attr({tabIndex:"-1",role:"menuitem"})},wna:function(a){a.addClass("oj-menu-divider").attr("role","separator")},xRa:function(a,b){a.removeClass("oj-menu-item-before-divider oj-menu-item-after-divider");b.prev().addClass("oj-menu-item-before-divider");b.next().addClass("oj-menu-item-after-divider")},u3:function(a){return a.prev("a")},h8a:function(){return"menuitem"},lR:function(a,b){var c=a.prev(".oj-menu-divider").add(a.next(".oj-menu-divider"));b&&(c=
c.add(a));return c},gh:function(a,b){a&&"focus"===a.type||this.qf&&this.qf();b=b.first();this.Koa(b,a);var c=b.parent(),d=c.closest(".oj-menu-item");c.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");this.lR(d,!0).addClass("oj-focus-ancestor");a&&"keydown"===a.type?this.Kt():this.qf=this.VE(function(){delete this.qf;this.Kt()},this.RJ("closing"),this.delay);c=b.children(".oj-menu");c.length&&a&&/^mouse/.test(a.type)&&!this.xb.hasClass("oj-disabled")&&this.KYa(c);this.gB=b.parent()},Koa:function(a,
b){if(!a.is(this.xb)){var c=this.xb?this.xb:g(),d=a.children("a");this.xb=a;this.element.attr("aria-activedescendant",d.attr("id"));this.bj(c);this.Oj(a);this.lR(c).removeClass("oj-focus");this.lR(a).addClass("oj-focus");this._trigger("_activeItem",b,{previousItem:c,item:a,privateNotice:"The _activeItem event is private.  Do not use."})}},GVa:function(a){if(this.xb){var b=this.xb;this.xb=null;this.element.removeAttr("aria-activedescendant");this.bj(b);this.lR(b).removeClass("oj-focus");this._trigger("_activeItem",
a,{previousItem:b,item:g(),privateNotice:"The _activeItem event is private.  Do not use."})}},j0:function(a){this.qf&&this.qf();this.GVa(a)},sJ:function(a,b){this.af.focus();this.$v(a,b)},$v:function(b,c){if(!this.Uw("close","__dismiss",[b,c])){var d=this.element.is(":visible");this.Eo("close");var e={};e[a.ca.Ha.Te]=this.element;e[a.ca.Ha.yv]={event:b,selectUi:c,isOpen:d};a.ca.Ya().close(e)}},XD:function(b,c){var d,e;(d=(a.gc.Yc("oj-menu-option-defaults")||{}).animation)&&d[b]&&(e=d[b][c]);return e},
Qw:function(){return!this.Y()||this.eJ},OT:function(a,b){if(b&&a&&"string"!=typeof a){var c=JSON.stringify(a),d;for(d in b)c=c.replace(new RegExp(d,"g"),b[d]);a=JSON.parse(c)}return a},QE:function(a,b){return a?a.then(b):b()},BI:function(b){var c=b[a.ca.Ha.Te];if(this.Y()){b=b[a.ca.Ha.yv];var d=b.selectUi;if(d&&d.item.length){var e={},d=d.item[0],f=b.event;f&&(e.originalEvent=f instanceof g.Event?f.originalEvent:f);e=new CustomEvent("ojAction",{detail:e,cancelable:!0,bubbles:!0});d.dispatchEvent(e);
b.event=e}}if(this.Qw())c.hide();else return b=this.XD(this.e7?"sheet":"dropdown","close"),b=a.ea.Fi(c[0],"close",a.Ma.WU(c,b),this),b.then(function(){c.hide()}),b},Ft:function(c){var d=c[a.ca.Ha.yv];c=d.event;var e=d.selectUi,d=d.isOpen;this.element.removeData("oj-menu-position");this.af=void 0;this.e7=!1;!this.Y()&&e&&(c=this.K7("select",c,e).event);d&&this._trigger("close",c,{});this.mw=null;0<=b.indexOf(this)&&b.splice(b.indexOf(this),1)},getCurrentOpenOptions:function(){return g.extend(!0,{},
this.mw||this.options.openOptions)},open:function(c,d,e){if(!this.Uw("open","open",[c,d,e])){this.Rz&&(this.eJ=!0,this.$v(this.Rz),this.Rz=null);d=g.extend({},this.options.openOptions,d);d.position=g.extend({},d.position);e=g.extend({},this.options.submenuOpenOptions,e);var f=this.mw;this.mw=d;a.Ma.aUa(c);this.aTa=this.element[0].XP;var h=this.K7("beforeOpen",c,{openOptions:d});if(h.proceed)if(this.element.is(":visible")&&(this.eJ=!0,this.mw=f,this.$v(h.event),this.Rz=null,this.mw=d),f=d.launcher,
(f=this.Y()?"string"===g.type(f)?g(document.getElementById(f)):g(f):"string"===g.type(f)?g(f):f)&&f.length){h=this.lSa(d.display);this.hZa(h);var k,n;if(h){if(this.element.addClass("oj-menu-dropdown").removeClass("oj-menu-sheet"),n=l,k=a.Ma.Aq(d.position,this.Fn),k.of=a.Ma.q4a(k.of,f,c),null==k.of){a.D.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call.");this.mw=null;this.eJ=!1;return}}else this.element.addClass("oj-menu-sheet").removeClass("oj-menu-dropdown"),
n=m,k={my:"bottom",at:p,of:window,collision:"flipfit"};var s=this.element[0],t=b.slice(0,b.length);g.each(t,function(a,b){b.element[0]!==s&&(b.ii(c,"eventSubtree"),b.af&&b.$v(c))});this.PYa=a.Ma.Aq(e.position,this.Fn);e=this.Jta;g.isFunction(k.using)&&k.using!==e&&(k.origUsing=k.using);k.using=e;this.element.data("oj-menu-position",k);this.Eo("open");e={};e[a.ca.Ha.Te]=this.element;e[a.ca.Ha.AC]=f;e[a.ca.Ha.ft]=k;e[a.ca.Ha.Ys]=this.cE();e[a.ca.Ha.Gv]="oj-menu-layer";e[a.ca.Ha.Em]=n;e[a.ca.Ha.yv]=
{event:c,initialFocus:d.initialFocus,launcher:f,isDropDown:h};e[a.ca.Ha.VG]=this.Y();a.ca.Ya().open(e)}else a.D.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."),this.mw=null;else this.mw=f;this.eJ=!1}},CI:function(b){var c,d=b[a.ca.Ha.Te],e=b[a.ca.Ha.ft];b=b[a.ca.Ha.yv].isDropDown;d.show();d.position(e);this.Qw()||(c=this.XD(b?"dropdown":"sheet","open"),c=a.ea.Fi(d[0],"open",a.Ma.WU(d,c),this),b&&
(c=void 0));return c},sI:function(c){var d=c[a.ca.Ha.yv];c=d.event;var e=d.initialFocus,f=d.launcher,d=d.isDropDown,g="firstItem"===e;(g||"menu"===e)&&this.element.focus();g?this.gh(c,this.element.children().first()):this.j0(c);this.af=f;this.e7=!d;b.push(this);this._trigger("open",c,{})},KYa:function(a){this.qf&&this.qf();"true"===a.attr("aria-hidden")&&(this.qf=this.VE(function(){delete this.qf;this.Kt();this.vpa(a)},this.RJ("closing and opening"),this.delay))},vpa:function(c){if("true"===c.attr("aria-hidden")){var d=
g.extend({of:this.xb},this.PYa);this.qf&&this.qf();this.element.find(".oj-menu").not(c.parents(".oj-menu")).hide().attr("aria-hidden","true").removeData("oj-menu-position");c.show().removeAttr("aria-hidden").position(d).data("oj-menu-position",d);this.u3(c).attr("aria-expanded","true");!this.af&&0>b.indexOf(this)&&b.push(this);if(!this.Qw()){var e=this.XD("submenu","open"),e=this.OT(e,{"#myPosition":d.my});a.ea.Fi(c[0],"open",e,this)}}},WP:function(b,c,d){function e(){delete h.qf;var a=c?h.element:
g(b&&b.target).closest(h.element.find(".oj-menu"));a.length||(a=h.element);var d=h.Kt(a);return d=h.QE(d,function(){h.j0(b);h.gB=a})}var f;this.qf&&this.qf();var h=this;d?this.Qw()?h.qf=h.VE(e,h.RJ("closing"),d):f=new Promise(function(a){h.qf=h.VE(e,h.RJ("closing"),d,function(){a(!0)})}):f=e();if(f){var k=a.Context.getContext(this.element[0]).Rc().Vc({description:"closing submenus"});f.then(k)}return f},Kt:function(c){function d(a){a.hide().attr("aria-hidden","true").removeData("oj-menu-position");
f.u3(a).attr("aria-expanded","false")}var e;c||(c=this.xb?this.xb.parent():this.element);var f=this,h=f.XD("submenu","close"),k=c.find(".oj-menu");if(this.Qw())d(k),c.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");else{var l=function(b){var c=null;b.children().children(".oj-menu").each(function(b,e){function k(){var b=m.data("oj-menu-position"),b=f.OT(h,{"#myPosition":b?b.my:null});return a.ea.Fi(e,"close",b,f).then(function(){d(m)})}var m=g(e);if(m.is(":visible")){var n=l(m);c=f.QE(n,
k)}else d(m)});return c};e=l(c);e=this.QE(e,function(){c.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor")})}this.af||0<=b.indexOf(this)&&c===this.element&&b.splice(b.indexOf(this),1);return e},ii:function(b,c){var d;if(null==c||"active"===c){var e=this.gB&&this.gB.closest(".oj-menu-item",this.element);if(e&&e.length){var f=this;d=this.Kt();d=this.QE(d,function(){f.gh(b,e)})}}else"all"===c||"eventSubtree"===c?d=this.WP(b,"all"===c,this.delay):a.D.warn("Invalid param "+c+" passed to Menu._collapse().  Ignoring the call.");
return d},qe:function(a){var b=this.xb&&this.xb.children(".oj-menu ").children(".oj-menu-item").first();b&&b.length&&(this.vpa(b.parent()),this.qf&&this.qf(),this.qf=this.VE(function(){delete this.qf;this.gh(a,b)},this.nR("focusing an item")))},fpa:function(a){this.kT("next","first",a)},LUa:function(a){this.kT("prev","last",a)},c8a:function(){return this.xb&&!this.xb.prevAll(".oj-menu-item").length},d8a:function(){return this.xb&&!this.xb.nextAll(".oj-menu-item").length},kT:function(a,b,c){var d;
this.xb&&(d="first"===a||"last"===a?this.xb["first"===a?"prevAll":"nextAll"](".oj-menu-item").eq(-1):this.xb[a+"All"](".oj-menu-item").eq(0));d&&d.length&&this.xb||(d=this.gB.children(".oj-menu-item")[b]());this.gh(c,d)},vi:function(b){if(!this.xb&&b&&b.target){var c=g(b.target).closest(".oj-menu-item");c.closest(this.element).length&&this.Koa(c,b)}if(this.xb)if(this.xb.has(".oj-menu").length||this.xb.is(".oj-disabled"))a.D.warn("Selecting a disabled menu item or parent menu item is not allowed.");
else{var d=this.xb.is(this.qQ)?void 0:{item:this.xb},c=this.WP(b,!0);if(this.af){var e=this;this.QE(c,function(){e.sJ(b,d)})}}else a.D.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.")},XA:function(){this.element.remove()},cE:function(){if(!this.Tp){var b=this.Tp={};b[a.ca.tc.CC]=this.U0.bind(this);b[a.ca.tc.DC]=this.XA.bind(this);b[a.ca.tc.et]=this.refresh.bind(this);b[a.ca.tc.BC]=this.T0.bind(this);b[a.ca.tc.IO]=this.CI.bind(this);b[a.ca.tc.GO]=
this.sI.bind(this);b[a.ca.tc.HO]=this.BI.bind(this);b[a.ca.tc.FO]=this.Ft.bind(this)}return this.Tp},U0:function(){this.eJ=!0;this.Kt(this.element);this.$v(null);this.Eo("none")},aM:function(b,c){var d=c.element.element;d.css(b);a.Ma.lua(d,c);(d=d.data("oj-menu-position"))&&(d=d.origUsing)&&d(b,c);a.Ma.c$(c)&&(this.yha=this.VE(this.U0,this.RJ("closing"),1))},getNodeBySubId:function(a){switch(a&&a.subId){case n:return this.F0?this.qQ[0]:null;default:return this._super(a)}},getSubIdByNode:function(a){return this.qQ&&
this.qQ.is(g(a).parents().addBack(a))?{subId:n}:this._super(a)},lSa:function(a){if(this.dRa)return!0;switch(a){case "dropDown":return!0;case "sheet":return!1;case "auto":return s.matches;default:throw Error("Invalid value for Menu openOptions.display: "+a);}},hZa:function(a){h&&(a?this.F0&&(this.eka().detach().eq(0).prev().removeClass("oj-menu-item-before-divider"),this.F0=!1):(this.eka().appendTo(this.element).eq(0).prev().addClass("oj-menu-item-before-divider"),this.F0=!0))},eka:function(){if(!this.pQ){var a=
g("\x3cli\x3e\x3c/li\x3e",this.document[0]),b=g("\x3ca href\x3d'#'\x3e\x3c/a\x3e",this.document[0]).text(this.options.translations.labelCancel);g("\x3cspan class\x3d'oj-menu-item-icon oj-component-icon oj-menu-cancel-icon'\x3e\x3c/span\x3e",this.document[0]).prependTo(b);var c=g("\x3cli\x3e\x3c/li\x3e",this.document[0]).addClass("oj-menu-item-cancel oj-menu-item-after-divider").append(b);this.wna(a);this.ona(b);this.Ana(c);this.lha=b;this.qQ=c;this.pQ=g([a[0],c[0]])}return this.pQ},tYa:function(){k&&
(this.element.Tg(t),this._on({swipedown:function(a){this.e7&&"touch"===a.gesture.pointerType&&(this.WP(a,!0),this.sJ(a))}}))},Eo:function(b){var c=this.bq;c&&(c.destroy(),delete this.bq);0>["open","close"].indexOf(b)||(this.bq=new a.Hm(this.element,b,"ojMenu",this.Y()))},Uw:function(a,b,c){var d=this.bq;return d?d.h$(this,a,b,c):!1},VE:function(b,c,d,e){function f(){g&&(g(),g=null,e&&e())}var g=a.Context.getContext(this.element[0]).Rc().Vc({description:c}),h=this,k=setTimeout(function(){var a=b.bind(h)();
a&&a instanceof Promise?a.then(f):f()},d||0);return function(){clearTimeout(k);f()}},nR:function(a){return"Menu with id '"+this.element.attr("id")+"' is busy "+a+"."},RJ:function(a){return this.nR(a+" a submenu")},Ch:function(){a.V.pg(this.element)===a.V.Kd.OPEN&&this.U0();this._super()}});var b=[],d=!1,e=-1<navigator.userAgent.indexOf("Macintosh")&&-1<navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"),f=a.gc.Yc("oj-menu-config")||{},h="menuItem"===f.sheetCancelAffordance,
k="dismiss"===f.sheetSwipeDownBehavior,l=f.dropDownModality||"modeless",m=f.sheetModality||"modal",p="bottom-"+(f.sheetMarginBottom||0),t=k&&{recognizers:[[c.Swipe,{direction:c.DIRECTION_DOWN}]]},s=function(){var a=f.dropDownThresholdWidth;null==a&&(a="768px");return window.matchMedia("(min-width: "+a+")")}(),n="oj-menu-cancel-command"})();a.J.Ua("oj-menu","baseComponent",{properties:{disabled:{type:"boolean"},openOptions:{type:"object",properties:{display:{type:"string",enumValues:["auto","dropDown",
"sheet"]},initialFocus:{type:"string",enumValues:["firstItem","menu","none"]},launcher:{type:"string"},position:{type:"object",properties:{my:{type:"string|object",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},at:{type:"string|object",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},offset:{type:"object",
properties:{x:{type:"number"},y:{type:"number"}}},of:{type:"string|object"},collision:{type:"string",enumValues:["flip","fit","flipfit","flipcenter","none"]}}},submenuPosition:{type:"object",properties:{my:{type:"object",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",enumValues:["top","center","bottom"]}}},at:{type:"object",properties:{horizontal:{type:"string",enumValues:["start","end","left","center","right"]},vertical:{type:"string",
enumValues:["top","center","bottom"]}}},offset:{type:"object",properties:{x:{type:"number"},y:{type:"number"}}},collision:{type:"string",enumValues:["flip","fit","flipfit","flipcenter","none"]}}}}},translations:{type:"object",properties:{labelCancel:{type:"string"}}}},methods:{getSubIdByNode:{},open:{},refresh:{}},events:{animateStart:{},animateEnd:{},beforeOpen:{},close:{},open:{}},extension:{Xa:"ojMenu"}});a.J.register("oj-menu",{metadata:a.J.getMetadata("oj-menu")})});