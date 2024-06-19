
let count=0;
let count1=0;

let guestP=document.getElementById("guestPointer");
let homeP=document.getElementById("homePointer");

function add1(){
    count+=1
    guestP.textContent=count;
}

function add2(){
    count+=2;
    guestP.textContent=count;
}

function add3(){
    count+=3
    guestP.textContent=count;
}

function add11(){
    count1+=1;
    homeP.textContent=count1;
}

function add22(){
    count1+=2;
    homeP.textContent=count1;
}

function add33(){
    count1+=3;
    homeP.textContent=count1;
}