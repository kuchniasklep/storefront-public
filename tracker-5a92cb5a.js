import{c as e}from"./index-0418a9fc.js";let r;const s=e({loaded:new Promise((e=>{e()})),resolved:new Promise((e=>r=e)),trackers:[]});function o(e){s.get("resolved").then((()=>{s.get("trackers").forEach((r=>{e(r)}))}))}export{o as e,r,s as t}