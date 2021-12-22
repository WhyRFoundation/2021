/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
!function(n){var t=n(window),o=t.height();t.resize(function(){o=t.height()}),n.fn.parallax=function(i,e,r){function u(){var r=t.scrollTop();c.each(function(){var t=n(this),u=t.offset().top,f=h(t);u+f<r||u>r+o||c.css("backgroundPosition",i+" "+Math.round((l-r)*e)+"px")})}var h,l,c=n(this);c.each(function(){l=c.offset().top}),h=r?function(n){return n.outerHeight(!0)}:function(n){return n.height()},(arguments.length<1||null===i)&&(i="50%"),(arguments.length<2||null===e)&&(e=.1),(arguments.length<3||null===r)&&(r=!0),t.bind("scroll",u).resize(u),u()}}(jQuery);