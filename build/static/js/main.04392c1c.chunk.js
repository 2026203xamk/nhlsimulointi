(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,a){e.exports=a(72)},63:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(48),o=a.n(c),r=(a(63),a(41)),s=a(2),i=a(100),m=a(111),u=a(102),g=a(42),E=a(40),p=a(106),d=a(110),h=a(109),S=a(105),k=a(107),f=a(108),y=a(104);a(66);const b=e=>{let{teamA:t,teamB:a,onCancel:l,onSimulate:c}=e;return n.a.createElement("div",{className:"simulate-match-popup"},n.a.createElement("h3",null,"".concat(t," vs ").concat(a)),n.a.createElement("div",{className:"button-container"},n.a.createElement(u.a,{onClick:c},"Simuloi ottelu"),n.a.createElement(u.a,{onClick:l},"Peruuta")))},v=e=>{let{nhlTeams:t}=e;const[a,c]=Object(l.useState)([]),[o,r]=Object(l.useState)([]),[s,i]=Object(l.useState)({}),[m,v]=Object(l.useState)(!1),[C,N]=Object(l.useState)([]),[x,O]=Object(l.useState)([]),[w,I]=Object(l.useState)({});Object(l.useEffect)(()=>{const e=JSON.parse(localStorage.getItem("selectedTeams"))||[];c(e);const a=JSON.parse(localStorage.getItem("matchResults"))||[];r(a);const l=JSON.parse(localStorage.getItem("teamWins"))||{};i(l);const n=t.map(e=>({name:e,points:0,played:0,goalsFor:0,goalsAgainst:0,goalDifference:0})),o=JSON.parse(localStorage.getItem("leagueTable"))||n;O(o);const s=JSON.parse(localStorage.getItem("teamMatches"))||{};I(s)},[t]);const j=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},J=e=>{c(t=>{let a;return a=2===t.length?[e]:t.includes(e)?t.filter(t=>t!==e):[...t,e],j("selectedTeams",a),a})},M=t.slice(0,Math.floor(t.length/2)),F=t.slice(Math.floor(t.length/2)),L=e=>{const t="".concat(e.split(" ").slice(1).join("_").toLowerCase(),".png");return"".concat("","/logos/").concat(t)};return n.a.createElement("div",null,n.a.createElement("div",{className:"team-container"},n.a.createElement("div",{className:"conference"},M.map((e,t)=>n.a.createElement("div",{key:t,className:"team-box ".concat(a.includes(e)?"selected":""),onClick:()=>J(e)},n.a.createElement("img",{src:L(e),alt:e,style:{width:"60px",height:"60px"}}),n.a.createElement("p",null,e),a.includes(e)&&n.a.createElement(g.a,{icon:E.a,className:"selected-icon"})))),n.a.createElement("div",{className:"conference"},F.map((e,t)=>n.a.createElement("div",{key:t,className:"team-box ".concat(a.includes(e)?"selected":""),onClick:()=>J(e)},n.a.createElement("img",{src:L(e),alt:e,style:{width:"60px",height:"60px"}}),n.a.createElement("p",null,e),a.includes(e)&&n.a.createElement(g.a,{icon:E.a,className:"selected-icon"}))))),2===a.length&&n.a.createElement(u.a,{onClick:()=>{2===a.length&&(N(a),v(!0))}},"Simuloi ottelu"),m&&n.a.createElement(b,{teamA:C[0],teamB:C[1],onCancel:()=>{v(!1),N([])},onSimulate:()=>{const[e,t]=C;let a,l;do{a=Math.floor(9*Math.random()),l=Math.floor(9*Math.random())}while(a===l);const n="".concat(e," VS ").concat(t," lopputulos ").concat(a,"-").concat(l);r(e=>[...e,n]),j("matchResults",[...o,n]),((e,t,a,l)=>{O(n=>{const c=n.map(e=>({...e}));return c.forEach(n=>{n.name===e?(n.played++,n.goalsFor+=a,n.goalsAgainst+=l,n.points=a>l?n.points+2:n.points):n.name===t&&(n.played++,n.goalsFor+=l,n.goalsAgainst+=a,n.points=l>a?n.points+2:n.points),n.goalDifference=n.goalsFor-n.goalsAgainst}),c.sort((e,t)=>t.points-e.points||t.goalDifference-e.goalDifference||t.goalsFor-e.goalsFor)})})(e,t,a,l),v(!1),N([]),c([]),j("selectedTeams",[]),j("teamMatches",w),j("teamWins",s)}}),n.a.createElement("div",{className:"results-container"},n.a.createElement(S.a,{component:y.a},n.a.createElement(p.a,null,n.a.createElement(k.a,null,n.a.createElement(f.a,null,n.a.createElement(h.a,null,n.a.createElement("h2",{style:{color:"#56346"}},"Ottelutulokset")))),n.a.createElement(d.a,null,o.map((e,t)=>{const a=e.split(" ")[0],l=e.split(" ")[2],c=L(a),o=L(l);return n.a.createElement(f.a,{key:t},n.a.createElement(h.a,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement("img",{src:c,alt:a,style:{width:"60px",height:"60px",marginRight:"8px"},onError:e=>e.target.style.display="none"}),n.a.createElement("span",{style:{color:e.includes("voitti")?"green":"red"}},e),n.a.createElement("img",{src:o,alt:l,style:{width:"60px",height:"60px",marginLeft:"8px"},onError:e=>e.target.style.display="none"}))))})))),n.a.createElement(S.a,{component:y.a},n.a.createElement(p.a,null,n.a.createElement(k.a,null,n.a.createElement(f.a,null)),n.a.createElement(d.a,null,Object.entries(s).map(e=>{let[t,a]=e;return n.a.createElement(f.a,{key:t},n.a.createElement(h.a,null,n.a.createElement("div",{style:{display:"flex",alignItems:"center"}},n.a.createElement("img",{src:L(t),alt:t,style:{width:"60px",height:"60px"},onError:e=>e.target.style.display="none"}),"".concat(t,": ").concat(a," voittoa"))))}))),n.a.createElement("div",{className:"league-table-container"},n.a.createElement("h2",null,"Sarjataulukko"),n.a.createElement(S.a,{component:y.a},n.a.createElement(p.a,null,n.a.createElement(k.a,null,n.a.createElement(f.a,null,n.a.createElement(h.a,null,"Joukkue"),n.a.createElement(h.a,{align:"right"},"Pelatut ottelut"),n.a.createElement(h.a,{align:"right"},"Maaliero"),n.a.createElement(h.a,{align:"right"},"Pisteet"))),n.a.createElement(d.a,null,x.map((e,t)=>n.a.createElement(f.a,{key:t},n.a.createElement(h.a,{component:"th",scope:"row"},n.a.createElement("img",{src:L(e.name),alt:e.name,style:{width:"25px",height:"25px",marginRight:"10px"}}),e.name),n.a.createElement(h.a,{align:"right"},e.played),n.a.createElement(h.a,{align:"right"},e.goalDifference),n.a.createElement(h.a,{align:"right"},e.points))))))))),n.a.createElement(u.a,{className:"end-season-button",onClick:()=>{localStorage.clear(),c([]),r([]),i({}),O([]),I({})}},"Lopeta kausi"))};var C=()=>{const[e,t]=Object(l.useState)(!1);return n.a.createElement(r.a,null,n.a.createElement(i.a,{value:2,onChange:()=>{}},n.a.createElement(m.a,{label:"NHL-SIMULOINTI PELI",component:r.b,to:"/"}),n.a.createElement(m.a,{label:"OHJEET",onClick:()=>t(!0)})),n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",element:n.a.createElement(v,{nhlTeams:["Anaheim Ducks","Arizona Coyotes","Boston Bruins","Buffalo Sabres","Calgary Flames","Carolina Hurricanes","Chicago Blackhawks","Colorado Avalanche","Columbus Blue Jackets","Dallas Stars","Detroit Red Wings","Edmonton Oilers","Florida Panthers","Los Angeles Kings","Minnesota Wild","Montreal Canadiens","Nashville Predators","New Jersey Devils","New York Islanders","New York Rangers","Ottawa Senators","Philadelphia Flyers","Pittsburgh Penguins","San Jose Sharks","Seattle Kraken","St. Louis Blues","Tampa Bay Lightning","Toronto Maple Leafs","Vancouver Canucks","Vegas Golden Knights","Washington Capitals","Winnipeg Jets"]})})),e&&n.a.createElement(e=>{let{onClose:t}=e;return n.a.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"lightblue",padding:"20px",zIndex:"1000"}},n.a.createElement("h2",null,"OHJEET PELIIN"),n.a.createElement("p",null,n.a.createElement("div",null,"1.Valitse kaksi joukkuetta. ",n.a.createElement("div",null,"2.Paina Simuloi ottelu.")," ")," ",n.a.createElement("br",null),n.a.createElement("div",null,"Ottelun tulos tulostuu alle ja tilastot menev\xe4t Sarjataulukkoon.")),n.a.createElement("button",{onClick:t},"Sulje"))},{onClose:()=>t(!1)}))};var N=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:c,getTTFB:o}=t;a(e),l(e),n(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null))),N()}},[[55,1,2]]]);
//# sourceMappingURL=main.04392c1c.chunk.js.map