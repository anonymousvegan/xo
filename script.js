
var kontejner=document.getElementById("kontejner");
const pobeda=document.getElementById("pobeda");
function podesivelicinu(){
var w=window.innerWidth;
var h=window.innerHeight;
var a; 
if (h<w){
    a = h* 0.8;
}
else{
    a= w* 0.8;
}
kontejner.style.width =a+"px";
kontejner.style.height=a+"px";
document.getElementById("prvi").style.width=a/3+"px";
document.getElementById("drugi").style.width=a/3+"px";
document.getElementById("treci").style.width=a/3+"px";
document.getElementById("cetvrti").style.width=a/3+"px";
document.getElementById("peti").style.width=a/3+"px";
document.getElementById("sesti").style.width=a/3+"px";
document.getElementById("sedmi").style.width=a/3+"px";
document.getElementById("osmi").style.width=a/3+"px";
document.getElementById("deveti").style.width=a/3+"px";
document.getElementById("prvi").style.height=a/3+"px";
document.getElementById("drugi").style.height=a/3+"px";
document.getElementById("treci").style.height=a/3+"px";
document.getElementById("cetvrti").style.height=a/3+"px";
document.getElementById("peti").style.height=a/3+"px";
document.getElementById("sesti").style.height=a/3+"px";
document.getElementById("sedmi").style.height=a/3+"px";
document.getElementById("osmi").style.height=a/3+"px";
document.getElementById("deveti").style.height=a/3+"px";
document.getElementById("kontejner").style.fontSize=a/3*0.9+"px";
}
podesivelicinu();
var niz =[false, false, false, false, false, false, false, false, false];
var preostalo=9;

//ODIGRAJ O
function odigrajo(){
if (preostalo>=1){
o= Math.floor(Math.random()*8);
if(niz[o]!=true){
niz[o]=true;
document.getElementsByClassName("kvadrat")[o].innerHTML="o";
proveripobeduo();
preostalo--;
}
else{
    odigrajo();
}
}
}
//ODIGRAJ X
function odigraj(x){
if (preostalo>=1){
preostalo--;
if (niz[x]==false){
niz[x]=true;
document.getElementsByClassName("kvadrat")[x].innerHTML="x";
proveripobedux();
console.log((document.getElementsByClassName("kvadrat")[2].textcontent=="x" && document.getElementsByClassName("kvadrat")[5].textcontent=="x" && document.getElementsByClassName("kvadrat")[8].textcontent=="x" ))
odigrajo()
if(document.getElementsByClassName("kvadrat")[1].get)
console.log("x",x,"niz",preostalo);
}}}

function proveripobedux(){
    if (
    (document.getElementsByClassName("kvadrat")[0].textContent=="x" && document.getElementsByClassName("kvadrat")[3].textContent=="x" && document.getElementsByClassName("kvadrat")[6].textContent=="x" ) ||
    (document.getElementsByClassName("kvadrat")[1].textContent=="x" && document.getElementsByClassName("kvadrat")[4].textContent=="x" && document.getElementsByClassName("kvadrat")[7].textContent=="x" ) ||
    (document.getElementsByClassName("kvadrat")[2].textContent=="x" && document.getElementsByClassName("kvadrat")[5].textContent=="x" && document.getElementsByClassName("kvadrat")[8].textContent=="x" ) ||
    (document.getElementsByClassName("kvadrat")[0].textContent=="x" && document.getElementsByClassName("kvadrat")[1].textContent=="x" && document.getElementsByClassName("kvadrat")[2].textContent=="x" ) ||
    (document.getElementsByClassName("kvadrat")[3].textContent=="x" && document.getElementsByClassName("kvadrat")[4].textContent=="x" && document.getElementsByClassName("kvadrat")[5].textContent=="x" ) ||
    (document.getElementsByClassName("kvadrat")[6].textContent=="x" && document.getElementsByClassName("kvadrat")[7].textContent=="x" && document.getElementsByClassName("kvadrat")[8].textContent=="x" ) ||
    (document.getElementsByClassName("kvadrat")[0].textContent=="x" && document.getElementsByClassName("kvadrat")[4].textContent=="x" && document.getElementsByClassName("kvadrat")[8].textContent=="x" ) ||
    (document.getElementsByClassName("kvadrat")[2].textContent=="x" && document.getElementsByClassName("kvadrat")[4].textContent=="x" && document.getElementsByClassName("kvadrat")[6].textContent=="x" ))
    {pobedax();}
}
function proveripobeduo(){
    if (( document.getElementsByClassName("kvadrat")[0].textContent=="o" && document.getElementsByClassName("kvadrat")[3].textContent=="o" && document.getElementsByClassName("kvadrat")[6].textContent=="o") || 
    (document.getElementsByClassName("kvadrat")[0].textContent=="o" && document.getElementsByClassName("kvadrat")[3].textContent=="o" && document.getElementsByClassName("kvadrat")[6].textContent=="o") ||
    (document.getElementsByClassName("kvadrat")[1].textContent=="o" && document.getElementsByClassName("kvadrat")[4].textContent=="o" && document.getElementsByClassName("kvadrat")[7].textContent=="o") ||
    (document.getElementsByClassName("kvadrat")[2].textcontent=="o" && document.getElementsByClassName("kvadrat")[5].textcontent=="o" && document.getElementsByClassName("kvadrat")[8].textcontent=="o") ||
    (document.getElementsByClassName("kvadrat")[0].textcontent=="o" && document.getElementsByClassName("kvadrat")[1].textcontent=="o" && document.getElementsByClassName("kvadrat")[2].textcontent=="o") ||
    (document.getElementsByClassName("kvadrat")[3].textcontent=="o" && document.getElementsByClassName("kvadrat")[4].textcontent=="o" && document.getElementsByClassName("kvadrat")[5].textcontent=="o") ||
    (document.getElementsByClassName("kvadrat")[6].textcontent=="o" && document.getElementsByClassName("kvadrat")[7].textcontent=="o" && document.getElementsByClassName("kvadrat")[8].textcontent=="o") ||
    (document.getElementsByClassName("kvadrat")[0].textContent=="o" && document.getElementsByClassName("kvadrat")[4].textContent=="o" && document.getElementsByClassName("kvadrat")[8].textContent=="o") || 
    (document.getElementsByClassName("kvadrat")[2].textContent=="o" && document.getElementsByClassName("kvadrat")[4].textContent=="o" && document.getElementsByClassName("kvadrat")[6].textContent=="o"))
    {pobedao();}
}


function pobedax(){
    document.getElementById("pobeda").style.display="flex";
    document.getElementById("pobedatext").innerHTML="Pobedio si!"
}
function pobedao(){
    document.getElementById("pobeda").style.display="flex";
    document.getElementById("pobedatext").innerHTML="Izgubio si!"
}
function restart(){
    i=0;
    do{
    document.getElementsByClassName("kvadrat")[i].innerHTML="";
    i++;
    }
    while(i<9)
    niz =[false, false, false, false, false, false, false, false, false];
    preostalo=9;
    document.getElementById("pobeda").style.display="none";
}