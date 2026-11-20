const L=[
{id:1,t:"Two-bedroom family house",loc:"Wilberforce, Freetown",type:"House",m:"rent",p:450,b:2,ba:1,a:"92 m²"},
{id:2,t:"Modern apartment, sea view",loc:"Lumley, Freetown",type:"Apartment",m:"rent",p:700,b:2,ba:2,a:"85 m²"},
{id:3,t:"Four-bedroom detached house",loc:"Hill Station, Freetown",type:"House",m:"sale",p:185000,b:4,ba:3,a:"240 m²"},
{id:4,t:"Residential plot, 50 × 100 ft",loc:"Lakka, Western Area",type:"Land",m:"sale",p:null,b:0,ba:0,a:"465 m²"},
{id:5,t:"Three-bedroom bungalow",loc:"Goderich, Freetown",type:"House",m:"sale",p:120000,b:3,ba:2,a:"150 m²"},
{id:6,t:"Studio apartment",loc:"Aberdeen, Freetown",type:"Apartment",m:"rent",p:350,b:1,ba:1,a:"38 m²"},
{id:7,t:"Corner plot near main road",loc:"Waterloo, Western Area",type:"Land",m:"sale",p:22000,b:0,ba:0,a:"600 m²"},
{id:8,t:"Three-bedroom apartment",loc:"Congo Cross, Freetown",type:"Apartment",m:"rent",p:600,b:3,ba:2,a:"110 m²"}];
const T=[["#dfe8f1","#17324D","#D6AD60"],["#f3ebd9","#2c4a66","#17324D"],["#e4e9ee","#3b5875","#D6AD60"]];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function svgArt(l,k=l.id){const[s,w,r]=T[k%3];let h;
 if(l.type=="Land")h=`<path d="M60 160h280l-34-40H94z" fill="${r}" opacity=".55"/><path d="M94 120l-12 40M306 120l12 40" stroke="${w}" stroke-width="3"/>`;
 else if(l.type=="Apartment")h=`<rect x="130" y="45" width="140" height="115" fill="${w}"/>`+[150,190,230].flatMap(x=>[62,92,122].map(y=>`<rect x="${x}" y="${y}" width="18" height="16" fill="${r}"/>`)).join("");
 else h=`<path d="M110 160V98h180v62z" fill="${w}"/><path d="M92 102L200 42l108 60z" fill="${r}"/><rect x="184" y="124" width="32" height="36" fill="${s}"/>`;
 return `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration of ${l.type.toLowerCase()}"><rect width="400" height="200" fill="${s}"/><circle cx="338" cy="44" r="20" fill="${r}"/><path d="M0 160h400v40H0z" fill="${w}" opacity=".2"/>${h}</svg>`}
const art=(l,k=l.id)=>`<img src="images/${l.id}-${k-l.id+1}.jpg" alt="${l.t}, ${l.loc}" loading="lazy" onerror="this.onerror=null;this.outerHTML=svgArt(L[${l.id-1}],${k})">`;
const money=l=>l.p?`<div class="price">$${l.p.toLocaleString()}${l.m=="rent"?" <small>per month</small>":""}</div>`:`<div class="price"><small>Price on enquiry</small></div>`;
const tag=l=>`<span class="tag ${l.type=="Land"?"land":""}">${l.type=="Land"?"Land":"For "+l.m}</span>`;
const card=l=>`<article class="card"><a class="im" href="property.html?id=${l.id}" aria-label="${l.t}">${art(l)}${tag(l)}</a><div class="cb">${money(l)}<h3>${l.t}</h3><div class="loc">${l.loc}</div><div class="facts">${l.type=="Land"?`<span>${l.a}</span>`:`<span>${l.b} beds</span><span>${l.ba} baths</span><span>${l.a}</span>`}</div><a class="more" href="property.html?id=${l.id}">View details →</a></div></article>`;
const nav=[["index","Home"],["properties","Properties"],["services","Services"],["about","About"],["contact","Contact"]];
const pg=document.body.dataset.page;
document.body.insertAdjacentHTML("afterbegin",`<header><div class="w bar"><a class="logo" href="index.html"><i></i><span>Salone Property Brokers<small>SIERRA LEONE</small></span></a><button id="mb" class="btn o" aria-expanded="false">Menu</button><nav aria-label="Main">${nav.map(n=>`<a href="${n[0]}.html" class="${pg==n[0]?"on":""}">${n[1]}</a>`).join("")}</nav><div class="acts"><a href="contact.html">Sign in</a><a class="btn" href="contact.html">List your property</a></div></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="w"><div><h4>Salone Property Brokers</h4>Property listings in one organised place, with a direct line to the agent.</div><div><h4>Explore</h4><a href="properties.html">Properties</a><a href="services.html">Services</a></div><div><h4>Company</h4><a href="about.html">About</a><a href="contact.html">Contact</a></div><div><h4>Follow</h4><a href="#">Facebook</a><a href="#">WhatsApp</a><a href="#">Instagram</a></div><div class="copy">© 2026 Salone Property Brokers. Design prototype: listings, prices and contact details are examples.</div></div></footer>`);
$("#mb").onclick=e=>{const h=$("header");h.classList.toggle("open");e.target.setAttribute("aria-expanded",h.classList.contains("open"))};
const done=(f,msg)=>{f.innerHTML=`<div class="done"><b>✓</b><h2>Message sent</h2><p>${msg}</p></div>`};
$$("form[data-ok]").forEach(f=>f.onsubmit=e=>{e.preventDefault();done(f,f.dataset.ok)});
if($("#feat"))$("#feat").innerHTML=[1,2,3].map(i=>card(L[i-1])).join("");
if($("#hs"))$("#hs").onsubmit=e=>{e.preventDefault();location="properties.html?"+new URLSearchParams(new FormData(e.target))};
if($("#res")){const f=$("#f"),q=new URLSearchParams(location.search);let view="list";
 for(const[k,v]of q)if(f.elements[k])f.elements[k].value=v;
 const run=()=>{const v=Object.fromEntries(new FormData(f)),s=v.q.toLowerCase();
  let r=L.filter(l=>(!s||(l.t+l.loc+l.type).toLowerCase().includes(s))&&(!v.loc||l.loc.includes(v.loc))&&(!v.m||l.m==v.m)&&(!v.type||l.type==v.type)&&(!v.max||(l.p&&l.p<=+v.max))&&(!v.beds||l.b>=+v.beds));
  r.sort((a,b)=>v.sort=="lo"?(a.p||1e9)-(b.p||1e9):v.sort=="hi"?(b.p||0)-(a.p||0):b.id-a.id);
  $("#cnt").textContent=r.length+(r.length==1?" listing":" listings");
  $("#res").innerHTML=r.length?r.map(card).join(""):`<div class="empty"><h3>No properties match these filters</h3><p>Try a higher budget or clear the filters.</p></div>`;
  $("#map").innerHTML=r.map((l,i)=>`<span style="left:${12+(i*37)%72}%;top:${15+(i*29)%60}%">${l.p?"$"+(l.p>=1e3&&l.m=="sale"?Math.round(l.p/1e3)+"k":l.p):"Plot"}</span>`).join("")+"<p>Map placeholder: pins are illustrative</p>"};
 f.oninput=run;f.onsubmit=e=>{e.preventDefault();run()};$("#clr").onclick=()=>{f.reset();run()};
 $$(".seg button").forEach(b=>b.onclick=()=>{view=b.dataset.v;$$(".seg button").forEach(x=>x.classList.toggle("on",x==b));$("#res").style.display=view=="list"?"":"none";$("#map").style.display=view=="map"?"block":"none"});run()}
if($("#det")){const l=L.find(x=>x.id==new URLSearchParams(location.search).get("id"))||L[0];document.title=l.t+" | Salone Property Brokers";
 $("#det").innerHTML=`<p class="crumb"><a href="properties.html">← Back to properties</a> / ${l.t}</p><div class="det"><div class="main"><div id="big">${art(l)}</div><div class="th">${[0,1,2].map(k=>`<button aria-pressed="${k==0}" aria-label="Photo ${k+1}" data-k="${k}">${art(l,l.id+k)}</button>`).join("")}</div><h2 style="margin-top:32px">About this property</h2><p class="sub">A well-kept ${l.type.toLowerCase()} in ${l.loc}, close to transport and daily shops. Full description, floor plan and neighbourhood notes would be supplied by the listing agent.</p><p class="note">Example listing. Images are illustrative, not proof of any property.</p></div><aside class="side">${tag(l).replace("tag","tag").replace('class="tag','style="position:static" class="tag')}${money(l)}<h1 style="font-size:1.4rem;color:var(--navy)">${l.t}</h1><div class="loc">${l.loc}</div><div class="kv">${l.type=="Land"?`<div><b>${l.a}</b>Plot size</div><div><b>Land</b>Type</div>`:`<div><b>${l.b}</b>Bedrooms</div><div><b>${l.ba}</b>Bathrooms</div><div><b>${l.a}</b>Floor area</div><div><b>${l.type}</b>Type</div>`}</div><span class="ok">Available</span> <small class="loc">Last confirmed 2 Nov 2026</small><div class="warn">Verify all documents before you pay any money.</div><button class="btn g" id="ask">Request a viewing</button><button class="btn o" id="ask2">Contact agent</button><a class="rep" href="contact.html">Report this listing</a></aside></div>
 <dialog id="dlg"><form data-ok="The agent will contact you about ${l.t}. This is a prototype, so nothing was actually sent."><h2>Enquire about this property</h2><p class="loc">${l.t}, ${l.loc}</p><div class="fld"><label for="n">Full name</label><input id="n" required></div><div class="fld"><label for="c">Email or phone</label><input id="c" required></div><div class="fld"><label for="m">Message</label><textarea id="m" rows="3">I would like to arrange a viewing of this property.</textarea></div><div class="row"><button class="btn">Send enquiry</button><button type="button" class="btn o" id="x">Cancel</button></div></form></dialog>`;
 const d=$("#dlg");$("#ask").onclick=$("#ask2").onclick=()=>d.showModal();$("#x").onclick=()=>d.close();
 $$(".th button").forEach(b=>b.onclick=()=>{$("#big").innerHTML=art(l,l.id+ +b.dataset.k);$$(".th button").forEach(x=>x.setAttribute("aria-pressed",x==b))});
 d.querySelector("form").onsubmit=e=>{e.preventDefault();done(e.target,e.target.dataset.ok)}}
