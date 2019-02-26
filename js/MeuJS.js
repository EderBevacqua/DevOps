document.getElementById('clickH2').onclick = function () { fun1() }
function fun1(){
    document.getElementById('clickH2').innerHTML='OLÁ MUNDÃO';
    // var elem = document.getElementById('DivPrincipal');
    // elem.style.width="100";
};
document.getElementById('FunRecarrega').onclick=FunReload;
function FunReload(){
    location.reload();
};
document.getElementById('BG').onclick=bgCollor;
function bgCollor(){
    document.body.style.background='gray';
    
}