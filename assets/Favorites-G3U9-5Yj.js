import{u as o,s as i,a as n,j as s}from"./index-44fJWzJX.js";import{C as c,M as l}from"./Message-KWR0FkfW.js";const m=()=>{const a=o(i).favorites,e=n().state.allCars;let t=[];return e&&(t=e.filter(r=>a.includes(r._id))),s.jsx(s.Fragment,{children:t.length>0?s.jsx(c,{cars:t}):s.jsx(l,{string:"Your favorites is empty now"})})};export{m as default};