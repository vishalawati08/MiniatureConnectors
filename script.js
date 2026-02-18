
function openSample(){

document.getElementById("samplePopup").style.display="block";

}

function closeSample(){

document.getElementById("samplePopup").style.display="none";

}

function toggleFAQ(){

let faq = document.getElementById("faq");

faq.style.display = faq.style.display==="none"?"block":"none";

}

function showTab(tab){

document.getElementById("tabContent").innerHTML = tab + " compliance details";

}
