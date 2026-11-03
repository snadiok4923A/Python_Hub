const state={level:"All",list:[],index:0,answers:{},revealed:{}};
const $=id=>document.getElementById(id), letters=["A","B","C","D"];
const selected=()=>state.list[state.index];
function loadList(){state.list=state.level==="All"?QUESTIONS:QUESTIONS.filter(q=>q.level===state.level);}
function stats(){
 const ids=Object.keys(state.answers), correct=ids.filter(id=>QUESTIONS.find(q=>q.id===+id).answer===state.answers[id]).length;
 $("score").textContent=`${correct} / ${state.list.length}`;$("attempted").textContent=ids.length;
 $("accuracy").textContent=ids.length?`${Math.round(correct/ids.length*100)}%`:"—";
 $("bar").style.width=`${correct/state.list.length*100}%`;
}
function render(){
 const q=selected(),answered=Object.hasOwn(state.answers,q.id),revealed=!!state.revealed[q.id];
 $("number").textContent=`QUESTION ${String(state.index+1).padStart(2,"0")} / ${state.list.length}`;
 $("level").textContent=q.level.toUpperCase();$("topic").textContent=q.topic;$("question").textContent=q.question;
 $("qbar").style.width=`${(state.index+1)/state.list.length*100}%`;
 $("code").hidden=!q.code;$("code").textContent=q.code||"";
 const grid=$("options");grid.replaceChildren();
 q.options.forEach((option,i)=>{
  const b=document.createElement("button");const k=document.createElement("span"),t=document.createElement("span");
  k.className="key";k.textContent=letters[i];t.textContent=option;b.append(k,t);
  b.disabled=answered||revealed;
  if((answered||revealed)&&i===q.answer)b.classList.add("correct");
  if(answered&&state.answers[q.id]===i&&i!==q.answer)b.classList.add("wrong");
  if((answered||revealed)&&i!==q.answer&&!(answered&&state.answers[q.id]===i))b.classList.add("dim");
  b.addEventListener("click",()=>choose(i));grid.append(b);
 });
 const f=$("feedback");f.hidden=!(answered||revealed);f.className="";
 if(answered||revealed){
  const ok=answered&&state.answers[q.id]===q.answer;if(answered&&!ok)f.classList.add("bad");
  f.textContent=`${revealed&&!answered?"ANSWER REVEALED":ok?"✓ CORRECT PREDICTION":"✕ NOT QUITE"} — Correct answer: ${letters[q.answer]}. ${q.options[q.answer]}. ${q.explanation}`;
 }else f.textContent="";
 $("next").disabled=!(answered||revealed);$("reveal").disabled=answered||revealed;
 $("reveal").textContent=revealed?"Answer revealed":"Reveal answer";stats();
}
function choose(i){const q=selected();if(Object.hasOwn(state.answers,q.id)||state.revealed[q.id])return;state.answers[q.id]=i;render();}
function reveal(){const q=selected();if(!Object.hasOwn(state.answers,q.id))state.revealed[q.id]=true;render();}
function next(){if(state.index<state.list.length-1){state.index++;render();}else finish();}
function finish(){
 $("quiz").hidden=true;$("finish").hidden=false;
 const attempted=Object.keys(state.answers).length,correct=Object.keys(state.answers).filter(id=>QUESTIONS.find(q=>q.id===+id).answer===state.answers[id]).length;
 const shown=Object.keys(state.revealed).length;
 $("summary").textContent=`You got ${correct} correct out of ${state.list.length}. You attempted ${attempted} and revealed ${shown} answer(s). ${correct/state.list.length>=.8?"Excellent work!":"Keep practising. Every explanation helps you improve."}`;
 $("finish").scrollIntoView({behavior:"smooth"});
}
function restart(){state.index=0;state.answers={};state.revealed={};$("quiz").hidden=false;$("finish").hidden=true;render();}
$("next").addEventListener("click",next);$("reveal").addEventListener("click",reveal);
$("reset").addEventListener("click",restart);$("again").addEventListener("click",restart);
document.querySelectorAll("[data-level]").forEach(b=>b.addEventListener("click",()=>{
 state.level=b.dataset.level;state.index=0;state.answers={};state.revealed={};loadList();
 document.querySelectorAll("[data-level]").forEach(x=>x.classList.toggle("active",x===b));
 restart();
}));
loadList();render();