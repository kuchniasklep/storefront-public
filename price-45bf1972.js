import{c as n}from"./common-950aeaa1.js";function r(r){const c=n.get("currency");return c?function(r){const c=n.get("currency");return c?r.toFixed(2).replace(".",c.separator):r.toString()}(r)+` ${c.symbol}`:r.toString()}export{r as p}