// Shared site script
function toggleLang(){
  var html = document.documentElement;
  html.setAttribute('lang', html.getAttribute('lang') === 'id' ? 'en' : 'id');
  try { localStorage.setItem('lang', html.getAttribute('lang')); } catch(e){}
}
// restore saved language + set year
(function(){
  try { var l = localStorage.getItem('lang'); if(l) document.documentElement.setAttribute('lang', l); } catch(e){}
  document.addEventListener('DOMContentLoaded', function(){
    var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
  });
})();
