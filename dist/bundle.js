(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){function e(e,t,n){e.addEventListener("input",(function(){e.value.length>0?(t.style.display="block",n&&(n.style.display="block")):(t.style.display="none",n&&(n.style.display="none"))})),t.addEventListener("click",(function(){var d;e.value="",t.style.display="none",n&&(n.style.display="none"),e.focus(),"search-input-brand"===(d=e.id)?document.getElementById("result-message-brand").style.display="none":"search-input-product"===d&&(document.getElementById("search-results-product").innerHTML="",document.getElementById("result-message-product").style.display="none")}))}var t,n=document.getElementById("search-input"),d=document.getElementById("clear-btn"),c=document.getElementById("search-btn"),l=document.getElementById("search-input-brand"),s=document.getElementById("clear-btn-brand"),a=document.getElementById("clear-attributes-btn");a&&a.addEventListener("click",(function(){document.querySelectorAll(".checkbox-input").forEach((function(e){e.checked=!1}))})),n&&d&&c&&e(n,d,c),l&&s&&(e(l,s),t=function(){document.getElementById("search-input-brand").value.trim().toLowerCase(),document.getElementById("result-message-brand").style.display="block"},l.addEventListener("keydown",(function(e){"Enter"===e.key&&t()})))}))})();