//using css selector
const para = document.querySelector('div.error');
console.log(para.innerText);


const paras = document.querySelectorAll('p');
paras.forEach(para=>{
    console.log(para.innerText);
    //overiding and adding new text to all the p tags at once
    para.innerText +=' new text added';
});

//get an element by ID
const title=document.getElementById('page-title');
console.log(title);

//get an element by their class name
const error =document.getElementsByClassName('error');
console.log(error);

//get an element by their tag name
const tagy=document.getElementsByTagName('p');
console.log(tagy);

//changing the value using selected element
para.innerText='FuckYou Everyone';

//append the text
para.innerText+=' SaleGully pvt limited';

const content=document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML='<h2>THIS IS NEW H2</h2>';

const people=['Dherea','Madddy','Ronda','Rowsy'];
people.forEach(people=>{
    content.innerHTML+=`<p>${people}</p>`;//error innerHTML solved. found syntax error.
});

// overiding the attribute of an element
const link=document.querySelector('a');
console.log(link.getAttribute('href'));

//This set attribute override the previous attribute if found and add if not found
link.setAttribute('href','https://www.w3schools.com');
link.innerText='The W3Schools';

const mssg=document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class','success');
mssg.setAttribute('style','color:green');

const head=document.querySelector('h1');
//head.setAttribute('style','margin=50px'); This overrides the previos style
console.log(head.style);
console.log(head.style.color);

//adding the new style along with the previous one
title.style.margin='50px';

//Remember js does not support css double value attribute it understands as minus
title.style.fontSize='50px';

//to remove a property without writing long enough
title.style.margin='';

//remove or add class using js
const lost=document.querySelector('p');
console.log(lost.classList);
lost.classList.add('error');
lost.classList.remove('error');

/* innerText views the text which is allowed to view whereas using textContent
allows you to view the text even if it is hidden.*/

const all=document.querySelectorAll('p');
if(p.textContent.includes('error')){
    p.classList.add('error');
}
if(p.textContent.includes('success')){
    p.classList.add('success');
}

//toggle classes first toggle adds a class and second toggle removes a class
p.classList.toggle('head');
p.classList.toggle('head'); 


