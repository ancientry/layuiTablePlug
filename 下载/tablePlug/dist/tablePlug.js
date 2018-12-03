/** layui-v2.4.5 MIT License By https://www.layui.com */
 ;layui.define(["table"],function(e){"use strict";var a=layui.$,t=layui.laytpl,i=layui.laypage,n=layui.layer,l=layui.form,r=(layui.util,layui.table),c=layui.hint(),o=(layui.device(),{}),d="additional",s="removed",u="original",h="disabled",f="layui-none",y="layui-hide",p="layui-tablePlug-loading-p",g=".layui-table-header",v="colGroup",b=["numbers","checkbox","radio"],m=function(){return!(!r.thisTable||!r.Class)}(),x=function(e){return m?r.thisTable.that[e]:(c.error("getIns方法需要在对layui的table进行一定必要的改造才能使用！请到 https://fly.layui.com/jie/43423/ 里面的查看相关内容将table.js进行一个非常小的改造，之后再试试看。"),{})},k=function(){var e={};return{check:function(a){return!!e[a]},reset:function(a){e[a]?(this.set(a,d,[]),this.set(a,s,[])):(e[a]={},e[a][u]=[],e[a][d]=[],e[a][s]=[],e[a][h]=[])},init:function(e,a){this.reset(e),this.set(e,u,a)},disabled:function(a,t){e[a]||this.reset(a),this.set(a,h,t)},checkDisabled:function(e,a){return this.get(e,h).indexOf(a)!==-1},getChecked:function(e){var a=this.get(e,s),t=this.get(e,u).concat(this.get(e,d)),i=[];return layui.each(t,function(e,t){a.indexOf(t)===-1&&i.indexOf(t)===-1&&i.push(t)}),i},get:function(a,t){return t===d||t===s||t===u||t===h?e[a]?e[a][t]||[]:[]:e[a]},set:function(a,t,i){t!==u&&t!==d&&t!==s&&t!==h||(e[a][t]=i&&C(i)?i:[])},update:function(a,t,i){var n=e[a][u],l=e[a][d],r=e[a][s];i?n.indexOf(t)===-1?l.indexOf(t)===-1&&l.push(t):r.indexOf(t)!==-1&&r.splice(r.indexOf(t),1):n.indexOf(t)===-1?l.indexOf(t)!==-1&&l.splice(l.indexOf(t),1):r.indexOf(t)===-1&&r.push(t)}}}(),C=function(e){return"[object Array]"===Object.prototype.toString.call(e)},D=function(e,a,t){if(e&&a)for(var i=k.get(a,d)||[],n=k.get(a,u)||[],l=k.get(a,s)||[],c=i.concat(n.filter(function(e,a){return l.indexOf(e)===-1})),o=0;o<e.length;o++)c.indexOf(e[o].id)!==-1&&(e[o][t||r.config.checkName]=!0)},T=r.Class.prototype.sort;r.Class.prototype.sort=function(){var e=this,a=[];layui.each(arguments,function(e,t){a.push(t)}),T.apply(e,a)};var O=r.Class.prototype.loading;r.Class.prototype.loading=function(e){var t=this;if(O.call(t,e),!e&&t.layInit){t.layInit.remove(),t.layInit.addClass("layui-anim layui-anim-rotate layui-anim-loop"),t.layMain.height()||t.layBox.append(a('<div class="'+p+'" style="height: 56px;"></div>'));var i=0;t.layMain.height()-t.layMain.prop("clientHeight")>0&&(i=t.getScrollWidth()),t.layInit.height(t.layBox.height()-t.layHeader.height()-i).css("marginTop",t.layHeader.height()+"px"),t.layBox.append(t.layInit)}},r.Class.prototype.renderData=function(e,l,c,o){var d=this,s=d.config,u=e[s.response.dataName]||[],h=[],p=[],g=[],v=function(){var e;return!o&&d.sortKey?d.sort(d.sortKey.field,d.sortKey.sort,!0):(layui.each(u,function(i,n){var c=[],u=[],f=[],v=i+s.limit*(l-1)+1;0!==n.length&&(o||(n[r.config.indexName]=i),d.eachCols(function(l,o){var d=o.field||l,h=s.index+"-"+o.key,p=n[d];if(void 0!==p&&null!==p||(p=""),!o.colGroup){var g=['<td data-field="'+d+'" data-key="'+h+'" '+function(){var e=[];return o.edit&&e.push('data-edit="'+o.edit+'"'),o.align&&e.push('align="'+o.align+'"'),o.templet&&e.push('data-content="'+p+'"'),o.toolbar&&e.push('data-off="true"'),o.event&&e.push('lay-event="'+o.event+'"'),o.style&&e.push('style="'+o.style+'"'),o.minWidth&&e.push('data-minwidth="'+o.minWidth+'"'),e.join(" ")}()+' class="'+function(){var e=[];return o.hide&&e.push(y),o.field||e.push("layui-table-col-special"),e.join(" ")}()+'">','<div class="layui-table-cell laytable-cell-'+function(){return"normal"===o.type?h:h+" laytable-cell-"+o.type}()+'">'+function(){var l=a.extend(!0,{LAY_INDEX:v},n),c=r.config.checkName;switch(o.type){case"checkbox":return'<input type="checkbox" name="layTableCheckbox" lay-skin="primary" '+function(){return o[c]?(n[c]=o[c],o[c]?"checked":""):l[c]?"checked":""}()+">";case"radio":return l[c]&&(e=i),'<input type="radio" name="layTableRadio_'+s.index+'" '+(l[c]?"checked":"")+' lay-type="layTableRadio">';case"numbers":return v}return o.toolbar?t(a(o.toolbar).html()||"").render(l):o.templet?function(){return"function"==typeof o.templet?o.templet(l):t(a(o.templet).html()||String(p)).render(l)}():p}(),"</div></td>"].join("");c.push(g),o.fixed&&"right"!==o.fixed&&u.push(g),"right"===o.fixed&&f.push(g)}}),h.push('<tr data-index="'+i+'">'+c.join("")+"</tr>"),p.push('<tr data-index="'+i+'">'+u.join("")+"</tr>"),g.push('<tr data-index="'+i+'">'+f.join("")+"</tr>"))}),d.layBody.scrollTop(0),!u.length||d.layMain.find("."+f).remove(),d.layMain.find("tbody").html(h.join("")),d.layFixLeft.find("tbody").html(p.join("")),d.layFixRight.find("tbody").html(g.join("")),d.renderForm(),"number"==typeof e&&d.setThisRowChecked(e),d.syncCheckAll(),d.haveInit?d.scrollPatch():setTimeout(function(){d.scrollPatch()},50),d.haveInit=!0,n.close(d.tipsIndex),s.HAS_SET_COLS_PATCH||d.setColsPatch(),void(s.HAS_SET_COLS_PATCH=!0))};return d.key=s.id||s.index,r.cache[d.key]=u,d.layPage[0==c||0===u.length&&1==l?"addClass":"removeClass"](y),o?v():0===u.length?(d.renderForm(),d.layFixed.addClass(y),d.layMain.find("tbody").html(""),d.layMain.find("."+f).remove(),d.layMain.append('<div class="'+f+'">'+s.text.none+"</div>")):(v(),d.renderTotal(u),void(s.page&&(s.page=a.extend({elem:"layui-table-page"+s.index,count:c,limit:s.limit,limits:s.limits||[10,20,30,40,50,60,70,80,90],groups:3,layout:["prev","page","next","skip","count","limit"],prev:'<i class="layui-icon">&#xe603;</i>',next:'<i class="layui-icon">&#xe602;</i>',jump:function(e,a){a||(d.page=e.curr,s.limit=e.limit,d.loading(),d.pullData(e.curr))}},s.page),s.page.count=c,i.render(s.page))))};var _=function(e,a){var t=x(e);if(t){var i=t.config;a&&(i.checkDisabled=i.checkDisabled||{},i.checkDisabled.enabled=i.checkDisabled.enabled||!0,i.checkDisabled.primaryKey=i.checkDisabled.primaryKey||"id",i.checkDisabled.data=k.get(e,h)||[]),i.checkDisabled.enabled?layui.each(r.cache[e],function(a,n){t.elem.find(".layui-table-body").find('tr[data-index="'+a+'"]').find('input[name="layTableCheckbox"]').prop("disabled",k.checkDisabled(e,n[i.checkDisabled.primaryKey]))}):k.set(e,h,[]),t.layBox.find('input[lay-filter="layTableAllChoose"]').prop("checked",r.checkStatus(e).isAll),t.renderForm("checkbox")}},I=r.Class.prototype.setColsWidth;r.Class.prototype.setColsWidth=function(){var e=this;e.layBox.find("."+p).remove(),I.call(e);var t=e.config,i=t.id,n=e.elem;if(t.cols.length>1){var l=e.layFixed.find(g).find("th"),r=e.layHeader.height();r/=t.cols.length,l.each(function(e,t){t=a(t),t.height(r*parseInt(t.attr("rowspan")||1)-1-parseFloat(t.css("padding-top"))-parseFloat(t.css("padding-bottom")))})}if(k.get(t.id,h).length&&_(i),n.data("patch")===!0){n.data("patch",null);var c=n.find("."+f);if(c.length){e.layFixed.find("tbody").html(""),e.layFixed.addClass(y);var o=['<table cellspacing="0" cellpadding="0" border="0" class="layui-table"><tbody></tbody></table>'],d=c.prev();d&&d.length||a(o.join("")).insertBefore(c),e.layTotal.addClass(y),e.layPage.addClass(y)}else e.layFixLeft.removeClass(y),e.layTotal.removeClass(y),e.layBody.scrollTop(0);e.renderForm("checkbox")}},r.Class.prototype.setInit=function(e){var a=this,t=a.config;return t.clientWidth=t.width||function(){var e=function(a){var i,n;a=a||t.elem.parent(),i=a.width();try{n="none"===a.css("display")}catch(l){}return!a[0]||i&&!n?i:e(a.parent())};return e()}(),"width"===e?t.clientWidth:void layui.each(t.cols,function(e,i){layui.each(i,function(n,l){if(!l)return void i.splice(n,1);if(l.key=e+"-"+n,l.hide=l.hide||!1,l.colGroup||l.colspan>1){var r=0;layui.each(t.cols[e+(parseInt(l.rowspan)||1)],function(a,t){t.HAS_PARENT||r>1&&r==l.colspan||(t.HAS_PARENT=!0,t.parentKey=e+"-"+n,r+=parseInt(t.colspan>1?t.colspan:1))}),l.colGroup=!0}a.initOpts(l)})})};var S=r.Class.prototype.reload;r.Class.prototype.reload=function(e){var a=this;r.reload(a.config.id,e,!0)},r.eachCols=function(e,t,i){var n=this,l=n.thisTable.config[e]||{},r=[],c=0;i=a.extend(!0,[],i||l.cols),layui.each(i,function(e,a){layui.each(a,function(a,t){if(t.colGroup){var n=0;c++,t.CHILD_COLS=[],layui.each(i[e+(parseInt(t.rowspan)||1)],function(e,a){a.PARENT_COL_INDEX||n>1&&n==t.colspan||(a.PARENT_COL_INDEX=c,t.CHILD_COLS.push(a),n+=parseInt(a.colspan>1?a.colspan:1))})}t.PARENT_COL_INDEX||r.push(t)})});var o=function(e){layui.each(e||r,function(e,a){return a.CHILD_COLS?o(a.CHILD_COLS):void("function"==typeof t&&t(e,a))})};o()};var P=r.render;r.render=function(e){var t=this,i=a.extend(!0,{},r.config,e),n=i.id||a(i.elem).attr("id");i.checkStatus&&!k.check(n)&&k.init(n,i.checkStatus["default"]),i.checkDisabled&&C(i.checkDisabled.data)&&i.checkDisabled.data.length&&k.disabled(n,C(i.checkDisabled.data)?i.checkDisabled.data:[]);var l=i.parseData;if(l&&l.plugFlag||(e.parseData=function(e){e="function"==typeof l?l.call(t,e)||e:e;var a=i.response?i.response.dataName||"data":"data";return D(e[a],n),e},e.parseData.plugFlag=!0),i.colFilterRecord){var c=w.get(n,e.colFilterRecord);a.each(e.cols,function(e,t){a.each(t,function(e,a){a.hide=!!c[a.field]})})}else w.clear(n);e.cols.length>1&&layui.each(e.cols,function(e,a){layui.each(a,function(e,a){a.field||a.toolbar||a.colspan&&1!==a.colspan||b.indexOf(a.type)!==-1?!a[v]||a.colspan>1||(a[v]=!1):a[v]=!0})});var d=P.call(t,e),s=d.config.elem.next();s.attr("lay-id")!==d.config.id&&s.attr("lay-id",d.config.id);var u=x(d.config.id);return u&&u.index&&(u.setColsWidth(),u.config.url&&u.loading()),o[d.config.id]=d};var A=r.reload,L=function(){var e=["url","method","where","contentType","headers","parseData","request","response","data","page","initSort","autoSort"];return{getParams:function(){return e},registParams:function(){var a=this;layui.each(arguments,function(t,i){C(i)?a.registParams.apply(a,i):"string"==typeof i&&e.indexOf(i)===-1&&e.push(i)})},check:function(){}}}(),F=function(){var e=!1;return{enable:function(){if(!arguments.length)return e;var a=arguments[0];"boolean"!=typeof a?c.error("如果要开启或者关闭全局的表格智能重载模式，请传入一个true/false为参数"):e=a}}}();L.registParams("colFilterRecord","checkStatus","smartReloadModel","checkDisabled"),r.reload=function(e,t,i){var n=this,l=j(e),d=a.extend(!0,{},j(e),t);if(F.enable()&&d.smartReloadModel){var s=!1;if(!!d.page!=!!l.page&&(s=!0),!s){var u=a.extend(!0,[],L.getParams());layui.each(t,function(e,a){var t=u.indexOf(e);return t===-1?s=!0:void u.splice(t,1)})}if(!s){if(m){var h=x(e);return"object"==typeof t.page&&(t.page.curr&&(h.page=t.page.curr),delete t.elem,delete t.jump),i?a.extend(h.config,t):a.extend(!0,h.config,t),h.config.page||(h.page=1),h.elem.data("patch",!0),h.loading(),h.pullData(h.page),r.thisTable.call(h)}c.error("您开启了智能重载模式，但是未检测到一个必要的前提，另参考帖子 https://fly.layui.com/jie/43423/ 里面的相关内容将table.js进行一个非常小的改造，之后再试试看。")}}if(!i){var h=A.call(n,e,t);return o[e]=h}S.call(x(e),t),o[e].config=x(e).config};var j=function(e){return o[e]&&o[e].config},E=r.checkStatus;r.checkStatus=function(e){var a=this,t=x(e),i=t.config,n=E.call(a,e);if(i&&i.checkStatus&&(n.status=k.get(e)),i.checkDisabled){var l=i.checkDisabled;if("object"==typeof l&&l.enabled!==!1){var c=0,o=0,d=l.primaryKey,s=k.get(e,h);layui.each(r.cache[e],function(e,a){var t=a[d];s.indexOf(t)===-1&&(c++,a[r.config.checkName]&&o++)}),n.isAll=o>0&&c===o}}return n};var R=function(e,a,t){return!k.checkDisabled(e,a)&&void k.update(e,a,t)};r.on("checkbox",function(e){var t=a(this).closest(".layui-table-view"),i=t.attr("lay-id"),n=j(i);if(n.page&&n.checkStatus&&k.check(i)){var l=e.checked,c=e.data,o=e.type,d=n.checkStatus.primaryKey||"id";if("one"===o)R(i,c[d],l);else if("all"===o){var s=!1;layui.each(layui.table.cache[i],function(e,a){var n=R(i,a[d],l);if(n===!1){s=!0;var c=k.getChecked(i).indexOf(a[d])!==-1;t.find(".layui-table-body").find('tr[data-index="'+e+'"]').find('input[name="layTableCheckbox"]').prop("checked",c),a[r.config.checkName]=c}}),s&&x(i).renderForm("checkbox")}}}),l.on("checkbox",function(e){a(e.elem).change()});var w=function(){var e="tablePlug_col_filter_record",t=function(e){return"local"===e?"data":"sessionData"};return{set:function(a,i,n,l){if(a&&i){var r=t(l),c=this.get(a,l);c[i]=!n,layui[r](e,{key:a,value:c})}},get:function(a,i){return layui[t(i)](e)[a]||{}},clear:function(t){a.each(["data","sessionData"],function(a,i){layui[i](e,{key:t,remove:!0})})}}}();a(document).on("change",'input[lay-filter="LAY_TABLE_TOOL_COLS"]',function(e){var t=a(this),i=t.attr("name"),n=t.closest(".layui-table-view"),l=n.attr("lay-id"),r=j(l),c=r.colFilterRecord;c?w.set(l,i,this.checked,c):w.clear(l)}),a(document).off("mousedown",".layui-table-grid-down").on("mousedown",".layui-table-grid-down",function(e){var t=a(this),i=t.closest("td").data("key"),n=t.closest("tr").data("index"),l=t.closest(".layui-table-view").attr("lay-id");r._tableTrCurr={tableId:l,trIndex:n,tdKey:i}}),a(document).off("click",".layui-table-tips-main [lay-event]").on("click",".layui-table-tips-main [lay-event]",function(e){var t=a(this),i=r._tableTrCurr;if(i){var l=t.closest(".layui-table-tips").attr("times");n.close(l),a('div.layui-table-view[lay-id="'+i.tableId+'"]').find('tr[data-index="'+i.trIndex+'"]').find('td[data-key="'+i.tdKey+'"]').find('[lay-event="'+t.attr("lay-event")+'"]').first().click()}});var N={CHECK_TYPE_ADDITIONAL:d,CHECK_TYPE_REMOVED:s,CHECK_TYPE_ORIGINAL:u,tableCheck:k,colFilterRecord:w,getConfig:j,getIns:function(e){return o[e]},disabledCheck:function(e,a){var t=this;k.disabled(e,a||[]),_.call(t,e,!0)},queryParams:L,smartReload:F};e("tablePlug",N)});