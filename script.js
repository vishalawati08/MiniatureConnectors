
function openSample(){

document.getElementById("sampleModal").style.display="block";

}


function closeSample(){

document.getElementById("sampleModal").style.display="none";

}


function toggleFAQ(btn){

let answer = btn.nextElementSibling;

answer.style.display =
answer.style.display==="block"?"none":"block";

}


function showTab(tab){

document.getElementById("tab-content").innerHTML =
tab + " compliance supported";

}
