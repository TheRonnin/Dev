const Btn=document.getElementById('btn')
const Lnt=document.getElementById('Length')
const Vol=document.getElementById('Volume')
const Mas=document.getElementById('Mass')
const Inp=document.getElementById('InputValue')



Btn.addEventListener('click',function(){
    let LengthInFoot=Number(Inp.value)*3.28084
    let LengthInMetre=Number(Inp.value)*0.3048
    let VolumeInGallon=Number(Inp.value)*0.264172
    let VolumeInLitre=Number(Inp.value)*3.78541
    let MassInPound=Number(Inp.value)*2.20462
    let MassInKilo=Number(Inp.value)*0.453592
    Lnt.innerHTML=`<p>${Inp.value} meters = ${LengthInFoot.toFixed(2)} feet | ${Inp.value} feet = ${LengthInMetre.toFixed(2)} meters</p>`
    Vol.innerHTML=`<p>${Inp.value} liters = ${VolumeInGallon.toFixed(2)} gallons | ${Inp.value} gallons = ${VolumeInLitre.toFixed(2)} liters</p>`
    Mas.innerHTML=`<p>${Inp.value} kilos = ${MassInPound.toFixed(2)} pounds | ${Inp.value} pounds = ${MassInKilo.toFixed(2)} kilos</p>`
})