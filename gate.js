(function(){
  var H='ea505736d4f73308454901f636f1ec26bdfd4a90f4ff77cf103b9fb1662d014b', K='artus-ok';
  try{ if(sessionStorage.getItem(K)===H) return; }catch(e){}
  var css=document.createElement('style');
  css.textContent='#gate{position:fixed;inset:0;z-index:2147483647;background:#F6F3EE;display:flex;align-items:center;justify-content:center;padding:24px;font-family:"Source Sans 3",system-ui,sans-serif;color:#16294D}#gate form{background:#FCFAF7;border:1px solid rgba(22,41,77,.12);border-radius:24px;padding:36px 32px;max-width:380px;width:100%;display:flex;flex-direction:column;gap:16px;box-shadow:0 18px 40px rgba(22,41,77,.08)}#gate h1{margin:0;font-family:Outfit,sans-serif;font-size:24px}#gate h1 span{color:#D21F4A}#gate p{margin:0;font-size:15px;opacity:.8}#gate input{font:inherit;font-size:16px;padding:12px 16px;border-radius:12px;border:1.5px solid rgba(22,41,77,.3);background:#fff;color:#16294D}#gate input:focus{outline:2px solid #1D4FB0;outline-offset:1px}#gate button{font-family:Outfit,sans-serif;font-weight:600;font-size:16px;padding:13px 20px;border:0;border-radius:999px;background:#16294D;color:#F6F3EE;cursor:pointer}#gate button:hover{background:#D21F4A}#gate .err{color:#D21F4A;font-size:14px;min-height:1.2em}html.locked body{overflow:hidden}';
  document.head.appendChild(css);
  document.documentElement.classList.add('locked');
  var g=document.createElement('div'); g.id='gate';
  g.innerHTML='<form autocomplete="off"><h1>Art’Us <span>&amp;</span> Usages</h1><p>Aperçu privé. Saisissez le mot de passe pour accéder au site.</p><label for="gate-pw" style="position:absolute;left:-9999px">Mot de passe</label><input id="gate-pw" type="password" placeholder="Mot de passe" required><div class="err" role="alert"></div><button type="submit">Entrer</button></form>';
  document.documentElement.appendChild(g);
  var f=g.querySelector('form'), i=g.querySelector('input'), er=g.querySelector('.err');
  setTimeout(function(){i.focus();},50);
  function sha(s){return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('')});}
  f.addEventListener('submit',function(e){e.preventDefault();sha(i.value.trim()).then(function(h){
    if(h===H){try{sessionStorage.setItem(K,H)}catch(x){} g.remove(); document.documentElement.classList.remove('locked');}
    else{er.textContent='Mot de passe incorrect.'; i.select();}
  });});
})();
