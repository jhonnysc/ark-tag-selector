(this["webpackJsonpark-tag-selector"]=this["webpackJsonpark-tag-selector"]||[]).push([[0],{15:function(e,n,r){e.exports=r(25)},22:function(e,n,r){},23:function(e,n,r){var t={"./jessica.jpg":24};function o(e){var n=a(e);return r(n)}function a(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=a,e.exports=o,o.id=23},24:function(e,n,r){e.exports=r.p+"static/media/jessica.35c3f3d2.jpg"},25:function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),a=r(8),i=r.n(a),c=r(13),u=r(12),l=r(6),p=r(1),s=r(2);function d(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 150px;\n  height: 250px;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #ccd7ff;\n  border-radius: 10px;\n  margin: 20px;\n\n  & > div {\n    font-size: 15px;\n    background-color: white;\n    border: 1px black solid;\n    width: 100%;\n\n    :hover {\n      background-color: gray;\n    }\n  }\n\n  & > span {\n    color: blue;\n  }\n"]);return d=function(){return e},e}function f(){var e=Object(p.a)(["\n  width: 100px;\n  height: 100px;\n"]);return f=function(){return e},e}function b(){var e=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 20px;\n"]);return b=function(){return e},e}function S(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  background-color: ",";\n  border-radius: 10px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s;\n  box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.1);\n"]);return S=function(){return e},e}function m(){var e=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  width: 100%;\n  padding: 20px;\n  grid-gap: 20px;\n"]);return m=function(){return e},e}function g(){var e=Object(p.a)(["\n  width: 100%;\n  height: 100vh;\n"]);return g=function(){return e},e}var v,h=s.a.div(g()),y=s.a.div(m()),w=s.a.div(S(),(function(e){return e.selected?"#2832CC":"#6B94E8"})),C=s.a.div(b()),x=(s.a.img(f()),s.a.div(d())),D=r(5),j=r.n(D),E=(r(22),{});(v=r(23)).keys().forEach((function(e){E[e]=v(e)}));var O=["Starter","Senior Operator","Top Operator","Melee","Ranged","Guard","Medic","Vanguard","Caster","Sniper","Defender","Supporter","Specialist","Healing","Support","DPS","AoE","Slow","Survival","Defense","Debuff","Shift","Crowd Control","Nuker","Summon","Fast-Redeploy","DP-Recovery","Robot"].sort();var k=function(){var e=Object(t.useState)(O),n=Object(l.a)(e,2),r=n[0],a=n[1],i=Object(t.useState)({}),p=Object(l.a)(i,2),s=p[0],d=p[1];return Object(t.useEffect)((function(){console.log(s)}),[r,s]),o.a.createElement(h,null,o.a.createElement(y,null,O.map((function(e){return o.a.createElement(w,{key:e,selected:r.includes(e),onClick:function(){return function(e){var n=[];r.includes(e)?(n=r.filter((function(n){return n!==e})),a(n)):(n=[].concat(Object(u.a)(r),[e]),a(n));var t=Object(c.a)({},s);Object.keys(j.a).forEach((function(e){var r=[],o=[];j.a[e].combos.forEach((function(e){var t=!0;e.forEach((function(e){n.includes(e)||(t=!1)})),t?r.push(e):o.push(e)})),r.length>0?t[e]?r.forEach((function(n){t[e].includes(n)||t[e].push(n)})):t[e]=r:t[e]&&(o.forEach((function(n){t[e].includes(n)&&t[e].pop(n)})),t[e].length<1&&delete t[e])})),d(t)}(e)}},e)}))),o.a.createElement(C,null,Object.keys(s).map((function(e){return o.a.createElement(x,null,o.a.createElement("span",null,e),s[e].map((function(e){return o.a.createElement("div",null,e.join(" - "))})))}))))};i.a.render(o.a.createElement(k,null),document.getElementById("root"))},5:function(e,n){e.exports={Cliffheart:{rarity:5,combos:[["Special","DPS"],["DPS","Shift"]]},FEater:{rarity:5,combos:[["Special","Slow"],["Shift","Slow"]]},Meteorite:{rarity:5,combos:[["AoE","Debuff"]]},"Projekt Red":{rarity:5,combos:[["Special","Crowd Control"],["Crowd-Control"],["Crowd Control","Melee"],["Crowd Control","Fast-Redeploy"]]},Texas:{rarity:5,combos:[["Vanguard","Crowd Control"],["Crowd-Control"],["Crowd Control","Melee"],["Crowd-Control","DP Recovery"]]},Vulcan:{rarity:5,combos:[["Defender","Survival"],["Defender","DPS"],["Defense","Survival"],["Defense","DPS"]]},Croissant:{rarity:5,combos:[["Defender","Shift"],["Shift","Defense"]]},"Any Recruitable 5*":{rarity:5,combos:[["Senior Operator"]]},Liskarm:{rarity:5,combos:[["Defender","DPS"],["Defense","DPS"]]},Manticore:{rarity:5,combos:[["Special","Survival"],["Special","DPS"]]},Firewatch:{rarity:5,combos:[["Nuker"]]},Ptilopsis:{rarity:5,combos:[["Medic","Support"],["Ranged","Support"],["Healing","Support"]]},Zima:{rarity:5,combos:[["Vanguard","Support"],["DP-Recovery","Support"]]},Istina:{rarity:5,combos:[["Supporter","DPS"],["Ranged","Slow","DPS"]]},Mayer:{rarity:5,combos:[["Supporter","Crowd Control"],["Summon"],["Crowd-Control"],["Crowd Control","Ranged"]]},Warfarin:{rarity:5,combos:[["Medic","Support"],["Ranged","Support"],["Healing","Support"]]},Pramanix:{rarity:5,combos:[["Supporter","Debuff"]]}}}},[[15,1,2]]]);
//# sourceMappingURL=main.71b25706.chunk.js.map