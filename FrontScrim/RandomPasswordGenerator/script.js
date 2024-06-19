const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El=document.getElementById("pass1")
let pass2El=document.getElementById("pass2")
let genPass=document.getElementById("Generate")

genPass.addEventListener("click",function(){
    const generateText1=generateText();
    const generateText2=generateText();

    pass1El.value=generateText1;
    pass2El.value=generateText2;
});

function generateText(){
    let generateText=" ";
    for(let i=0;i<15;i++){
        generateText+=characters[Math.floor(Math.random()*characters.length)];
    }
    return generateText;
}
