const message = document.querySelector('.message');
window.addEventListener('DOMContentLoaded' , ()=>{
    message.className = 'btn m-3'
    let x = document.createElement('button');
    x.innerHTML= "X";
    x.addEventListener('click' , ()=>{
        message.style.display ="none"
    
    });
    message.textContent = "You Have enrolled succesfully for Javascript Course";
    
    message.appendChild(x)


});
const items = document.querySelector('.items')

const option1 = document.querySelector('.option1');

const content = document.querySelector('.content');
option1.addEventListener('click' , ()=>{
    let span1 = document.createElement('span');
    span1.textContent  = "akdjlsfffffffffffffffffffaskldfajskdlfjasklfjfioewr";
    let li = document.createElement('li');
    li.appendChild(span1)
    items.appendChild(li)
});
// var index;
// for ( index = 0; index < options.length; index++) {
//         let selectedItem = options[index].textContent;
//         switch(selectedItem){
//                 case "Syllabus" : 
//                         options[index].addEventListener('clicl',()=>{
//                                 content.innerHTML=`This is syllabus`
//                         });
//                         break;
//                 case "Introduction to programming and javascript" : 
//                         options[index].addEventListener('clicl',()=>{
//                                 content.innerHTML=`This is Introduction to programming and javascript`
//                 });
//                 break;
//                 case "Variable and Datatypes" : 
//                         options[index].addEventListener('clicl',()=>{
//                                 content.innerHTML=`This is Variable and Datatypes`
//                         });break;
//                 case "Control flow" : 
//                         options[index].addEventListener('clicl',()=>{
//                                 content.innerHTML=`This is Control flow`
//                         });break;
//                 case "Class and objects" : 
//                         options[index].addEventListener('clicl',()=>{
//                                 content.innerHTML=`This is Class and objects`
//                         });break;
//                 case "Inheritance" : 
//                         options[index].addEventListener('clicl',()=>{
//                                 content.innerHTML=`This is Inheritance`
//                         });break;
//                 default:
//                     alert("Fresh Start")
//         }
    
// }
