/*
@license
dhtmlxScheduler.Net v.3.4.1 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){!function(){function t(e){return e.replace(w,"\n").replace(k,"")}function a(e,t){e=parseFloat(e),t=parseFloat(t),isNaN(t)||(e-=t);var a=i(e);return e=e-a.width+a.cols*y,isNaN(e)?"auto":100*e/y}function n(e,t,a){e=parseFloat(e),t=parseFloat(t),!isNaN(t)&&a&&(e-=t);var n=i(e);return e=e-n.width+n.cols*y,isNaN(e)?"auto":100*e/(y-(isNaN(t)?0:t))}function i(t){for(var a=0,n=e._els.dhx_cal_header[0].childNodes,i=n[1]?n[1].childNodes:n[0].childNodes,r=0;r<i.length;r++){var o=i[r].style?i[r]:i[r].parentNode,d=parseFloat(o.style.width);
if(!(t>d))break;t-=d+1,a+=d+1}return{width:a,cols:r}}function r(e){return e=parseFloat(e),isNaN(e)?"auto":100*e/x}function o(e,t){return(window.getComputedStyle?window.getComputedStyle(e,null)[t]:e.currentStyle?e.currentStyle[t]:null)||""}function d(t,a){for(var n=parseInt(t.style.left,10),i=0;i<e._cols.length;i++)if(n-=e._cols[i],0>n)return i;return a}function l(t,a){for(var n=parseInt(t.style.top,10),i=0;i<e._colsS.heights.length;i++)if(e._colsS.heights[i]>n)return i;return a}function s(e){return e?"<"+e+">":"";
}function _(e){return e?"</"+e+">":""}function c(e,t,a,n){var i="<"+e+" profile='"+t+"'";return a&&(i+=" header='"+a+"'"),n&&(i+=" footer='"+n+"'"),i+=">"}function u(){var a="",n=e._mode;if(e.matrix&&e.matrix[e._mode]&&(n="cell"==e.matrix[e._mode].render?"matrix":"timeline"),a+="<scale mode='"+n+"' today='"+e._els.dhx_cal_date[0].innerHTML+"'>","week_agenda"==e._mode)for(var i=e._els.dhx_cal_data[0].getElementsByTagName("DIV"),r=0;r<i.length;r++)"dhx_wa_scale_bar"==i[r].className&&(a+="<column>"+t(i[r].innerHTML)+"</column>");else if("agenda"==e._mode||"map"==e._mode){
var i=e._els.dhx_cal_header[0].childNodes[0].childNodes;a+="<column>"+t(i[0].innerHTML)+"</column><column>"+t(i[1].innerHTML)+"</column>"}else if("year"==e._mode)for(var i=e._els.dhx_cal_data[0].childNodes,r=0;r<i.length;r++)a+="<month label='"+t(i[r].childNodes[0].innerHTML)+"'>",a+=p(i[r].childNodes[1].childNodes),a+=h(i[r].childNodes[2]),a+="</month>";else{a+="<x>";var i=e._els.dhx_cal_header[0].childNodes;a+=p(i),a+="</x>";var o=e._els.dhx_cal_data[0];if(e.matrix&&e.matrix[e._mode]){a+="<y>";for(var r=0;r<o.firstChild.rows.length;r++){
var d=o.firstChild.rows[r];a+="<row><![CDATA["+t(d.cells[0].innerHTML)+"]]></row>"}a+="</y>",x=o.firstChild.rows[0].cells[0].offsetHeight}else if("TABLE"==o.firstChild.tagName)a+=h(o);else{for(o=o.childNodes[o.childNodes.length-1];-1==o.className.indexOf("dhx_scale_holder");)o=o.previousSibling;o=o.childNodes,a+="<y>";for(var r=0;r<o.length;r++)a+="\n<row><![CDATA["+t(o[r].innerHTML)+"]]></row>";a+="</y>",x=o[0].offsetHeight}}return a+="</scale>"}function h(e){for(var a="",n=e.firstChild.rows,i=0;i<n.length;i++){
for(var r=[],o=0;o<n[i].cells.length;o++)r.push(n[i].cells[o].firstChild.innerHTML);a+="\n<row height='"+e.firstChild.rows[i].cells[0].offsetHeight+"'><![CDATA["+t(r.join("|"))+"]]></row>",x=e.firstChild.rows[0].cells[0].offsetHeight}return a}function p(a){var n,i="";e.matrix&&e.matrix[e._mode]&&(e.matrix[e._mode].second_scale&&(n=a[1].childNodes),a=a[0].childNodes);for(var r=0;r<a.length;r++)i+="\n<column><![CDATA["+t(a[r].innerHTML)+"]]></column>";if(y=a[0].offsetWidth,n)for(var o=0,d=a[0].offsetWidth,l=1,r=0;r<n.length;r++)i+="\n<column second_scale='"+l+"'><![CDATA["+t(n[r].innerHTML)+"]]></column>",
o+=n[r].offsetWidth,o>=d&&(d+=a[l]?a[l].offsetWidth:0,l++),y=n[0].offsetWidth;return i}function v(i){var s="",_=e._rendered,c=e.matrix&&e.matrix[e._mode];if("agenda"==e._mode||"map"==e._mode)for(var u=0;u<_.length;u++)s+="<event><head><![CDATA["+t(_[u].childNodes[0].innerHTML)+"]]></head><body><![CDATA["+t(_[u].childNodes[2].innerHTML)+"]]></body></event>";else if("week_agenda"==e._mode)for(var u=0;u<_.length;u++)s+="<event day='"+_[u].parentNode.getAttribute("day")+"'><body>"+t(_[u].innerHTML)+"</body></event>";else if("year"==e._mode)for(var _=e.get_visible_events(),u=0;u<_.length;u++){
var h=_[u].start_date;for(h.valueOf()<e._min_date.valueOf()&&(h=e._min_date);h<_[u].end_date;){var p=h.getMonth()+12*(h.getFullYear()-e._min_date.getFullYear())-e.week_starts._month,v=e.week_starts[p]+h.getDate()-1,m=i?o(e._get_year_cell(h),"color"):"",g=i?o(e._get_year_cell(h),"backgroundColor"):"";if(s+="<event day='"+v%7+"' week='"+Math.floor(v/7)+"' month='"+p+"' backgroundColor='"+g+"' color='"+m+"'></event>",h=e.date.add(h,1,"day"),h.valueOf()>=e._max_date.valueOf())break}}else if(c&&"cell"==c.render)for(var _=e._els.dhx_cal_data[0].getElementsByTagName("TD"),u=0;u<_.length;u++){
var m=i?o(_[u],"color"):"",g=i?o(_[u],"backgroundColor"):"";s+="\n<event><body backgroundColor='"+g+"' color='"+m+"'><![CDATA["+t(_[u].innerHTML)+"]]></body></event>"}else for(var u=0;u<_.length;u++){var f,b;if(e.matrix&&e.matrix[e._mode])f=a(_[u].style.left),b=a(_[u].offsetWidth)-1;else{var y=e.config.use_select_menu_space?0:26;f=n(_[u].style.left,y,!0),b=n(_[u].style.width,y)-1}if(!isNaN(1*b)){var k=r(_[u].style.top),w=r(_[u].style.height),D=_[u].className.split(" ")[0].replace("dhx_cal_","");if("dhx_tooltip_line"!==D){
var E=e.getEvent(_[u].getAttribute("event_id"));if(E){var v=E._sday,S=E._sweek,N=E._length||0;if("month"==e._mode)w=parseInt(_[u].offsetHeight,10),k=parseInt(_[u].style.top,10)-e.xy.month_head_height,v=d(_[u],v),S=l(_[u],S);else if(e.matrix&&e.matrix[e._mode]){v=0;var M=_[u].parentNode.parentNode.parentNode;S=M.rowIndex;var A=x;x=_[u].parentNode.offsetHeight,k=r(_[u].style.top),k-=.2*k,x=A}else{if(_[u].parentNode==e._els.dhx_cal_data[0])continue;var C=e._els.dhx_cal_data[0].childNodes[0],O=parseFloat(-1!=C.className.indexOf("dhx_scale_holder")?C.style.left:0);
f+=a(_[u].parentNode.style.left,O)}if(s+="\n<event week='"+S+"' day='"+v+"' type='"+D+"' x='"+f+"' y='"+k+"' width='"+b+"' height='"+w+"' len='"+N+"'>","event"==D){s+="<header><![CDATA["+t(_[u].childNodes[1].innerHTML)+"]]></header>";var m=i?o(_[u].childNodes[2],"color"):"",g=i?o(_[u].childNodes[2],"backgroundColor"):"";s+="<body backgroundColor='"+g+"' color='"+m+"'><![CDATA["+t(_[u].childNodes[2].innerHTML)+"]]></body>"}else{var m=i?o(_[u],"color"):"",g=i?o(_[u],"backgroundColor"):"";s+="<body backgroundColor='"+g+"' color='"+m+"'><![CDATA["+t(_[u].innerHTML)+"]]></body>";
}s+="</event>"}}}}return s}function m(t,a,n,i,r,o){var d=!1;"fullcolor"==i&&(d=!0,i="color"),i=i||"color";var l="";if(t){var h=e._date,p=e._mode;a=e.date[n+"_start"](a),a=e.date["get_"+n+"_end"]?e.date["get_"+n+"_end"](a):e.date.add(a,1,n),l=c("pages",i,r,o);for(var m=new Date(t);+a>+m;m=this.date.add(m,1,n))this.setCurrentView(m,n),l+=s("page")+u().replace("–","-")+v(d)+_("page");l+=_("pages"),this.setCurrentView(h,p)}else l=c("data",i,r,o)+u().replace("–","-")+v(d)+_("data");return l}function g(t,a){
var n=e.uid(),i=document.createElement("div");i.style.display="none",document.body.appendChild(i),i.innerHTML='<form id="'+n+'" method="post" target="_blank" action="'+a+'" accept-charset="utf-8" enctype="application/x-www-form-urlencoded"><input type="hidden" name="mycoolxmlbody"/> </form>',document.getElementById(n).firstChild.value=encodeURIComponent(t),document.getElementById(n).submit(),i.parentNode.removeChild(i)}function f(e,t,a,n,i,r,o){var d="";d="object"==typeof i?b(i):m.apply(this,[e,t,a,i,r,o]),
g(d,n)}function b(e){for(var t="<data>",a=0;a<e.length;a++)t+=e[a].source.getPDFData(e[a].start,e[a].end,e[a].view,e[a].mode,e[a].header,e[a].footer);return t+="</data>"}var y,x,k=new RegExp("<[^>]*>","g"),w=new RegExp("<br[^>]*>","g");e.getPDFData=m,e.toPDF=function(e,t,a,n){return f.apply(this,[null,null,null,e,t,a,n])},e.toPDFRange=function(t,a,n,i,r,o,d){return"string"==typeof t&&(t=e.templates.api_date(t),a=e.templates.api_date(a)),f.apply(this,arguments)}}()});