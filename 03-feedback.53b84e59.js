var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequire4c75=o);var a=o("kEUo3");const n={input:document.querySelector('input[name="email"]'),textarea:document.querySelector('textarea[name="message"]'),form:document.querySelector(".feedback-form")};let l={};n.form.addEventListener("input",(0,a.throttle)((function(e){l[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(l))}),500)),n.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===e.currentTarget.email.value||""===e.currentTarget.message.value)alert("всі поля повинні бути заповнені");else{const t=new FormData(e.currentTarget),r={};t.forEach(((e,t)=>{r[t]=e})),console.log(r),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}})),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);if(e)for(const e in t)n.form.querySelector(`[name=${e}]`).value=t[e],l[`${e}`]=n.form.querySelector(`[name=${e}]`).value}();
//# sourceMappingURL=03-feedback.53b84e59.js.map